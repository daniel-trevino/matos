pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

//import "hardhat/console.sol";
import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import {MerkleProof} from '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

contract Matos is ERC1155, ERC1155Supply, Ownable {
  using Counters for Counters.Counter;

  Counters.Counter private _tokenIds;

  uint256 constant NUM_RESERVED_TOKENS = 20;
  uint256 constant TOKEN_PRICE = 0.02 ether;
  uint256 constant SALE_TOKEN_PRICE = 0.005 ether;
  uint256 public constant MAX_TOKENS = 100;

  bytes32 public immutable merkleRoot;

  mapping(address => bool) public whitelistClaimed;

  constructor(string memory uri, bytes32 _merkleRoot) ERC1155(uri) {
    merkleRoot = _merkleRoot;
    uint256[] memory ids = new uint256[](NUM_RESERVED_TOKENS);
    uint256[] memory amounts = new uint256[](NUM_RESERVED_TOKENS);

    for (uint256 i = 0; i < NUM_RESERVED_TOKENS; i++) {
      ids[i] = i;
      amounts[i] = i;
      _tokenIds.increment();
    }

    _mintBatch(msg.sender, ids, amounts, '');
  }

  function setURI(string memory newuri) public onlyOwner {
    _setURI(newuri);
  }

  function totalSupply() external view virtual returns (uint256) {
    return _tokenIds.current();
  }

  function mint() public payable {
    uint256 tokenId = _tokenIds.current();
    require(tokenId + 1 <= MAX_TOKENS, 'Purchase would exceed max supply of tokens');
    require(TOKEN_PRICE <= msg.value, 'Ether value sent is not correct');
    _mint(msg.sender, tokenId, 1, '');
    _tokenIds.increment();
  }

  function onSaleMint(bytes32[] calldata proof) external payable {
    // Make sure the address hasn't claimed the nft already
    require(!whitelistClaimed[msg.sender], 'Address already claimed');

    // Check for a valid proof
    bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
    bool isValidLeaf = MerkleProof.verify(proof, merkleRoot, leaf);
    require(isValidLeaf, 'Address is not elegible for mint with discount');

    uint256 tokenId = _tokenIds.current();
    require(tokenId + 1 <= MAX_TOKENS, 'Purchase would exceed max supply of tokens');

    require(SALE_TOKEN_PRICE <= msg.value, 'Ether value sent is not correct');
    _mint(msg.sender, tokenId, 1, '');
    _tokenIds.increment();

    // Mark the address as claimed
    whitelistClaimed[msg.sender] = true;
  }

  function withdraw() public onlyOwner {
    uint256 balance = address(this).balance;
    payable(msg.sender).transfer(balance);
  }

  function _beforeTokenTransfer(
    address operator,
    address from,
    address to,
    uint256[] memory ids,
    uint256[] memory amounts,
    bytes memory data
  ) internal override(ERC1155, ERC1155Supply) {
    super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
  }
}
