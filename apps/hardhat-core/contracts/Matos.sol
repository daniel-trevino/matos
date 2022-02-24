pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

//import "hardhat/console.sol";
import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol';

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

contract Matos is ERC1155Supply, Ownable {
  bool public saleIsActive = false;
  uint256 constant TOKEN_ID = 1;
  uint256 constant NUM_RESERVED_TOKENS = 20;
  uint256 constant MAX_TOKENS_PER_PURCHASE = 2;
  uint256 constant MAX_TOKENS = 100;
  uint256 constant TOKEN_PRICE = 0.005 ether;

  constructor(string memory uri) ERC1155(uri) {}

  function reserve() public onlyOwner {
    _mint(msg.sender, TOKEN_ID, NUM_RESERVED_TOKENS, '');
  }

  function setSaleState(bool newState) public onlyOwner {
    saleIsActive = newState;
  }

  function mint(uint256 numberOfTokens) public payable {
    require(saleIsActive, 'Sale must be active to mint Tokens');
    require(numberOfTokens <= MAX_TOKENS_PER_PURCHASE, 'Exceeded max token purchase');
    require(
      totalSupply(TOKEN_ID) + numberOfTokens <= MAX_TOKENS,
      'Purchase would exceed max supply of tokens'
    );
    require(TOKEN_PRICE * numberOfTokens <= msg.value, 'Ether value sent is not correct');
    _mint(msg.sender, TOKEN_ID, numberOfTokens, '');
  }

  function withdraw() public onlyOwner {
    uint256 balance = address(this).balance;
    payable(msg.sender).transfer(balance);
  }
}
