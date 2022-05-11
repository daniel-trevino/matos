import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import chalk from 'chalk'
import keccak256 from 'keccak256'
import { MerkleTree } from 'merkletreejs'

const contractName = 'Matos'

const defaultNetwork =
  process.env.NEXT_PUBLIC_DEFAULT_NETWORK_NAME === 'localhost'
    ? 'hardhat'
    : process.env.NEXT_PUBLIC_DEFAULT_NETWORK_NAME
chalk.magenta(`Deploying to ${defaultNetwork} 🛰`)

const whitelistAddresses = [
  '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc',
]

const func: DeployFunction = async ({
  deployments,
  getNamedAccounts,
}: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const leafNodes = whitelistAddresses.map((addr) => keccak256(addr))
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
  const merkleRoot = merkleTree.getHexRoot() // Gets the value as bytes32

  const deployResult = await deploy(contractName, {
    from: deployer,
    args: ['0x1b9d3475b14fda17ea74bc4f1ad3ee938de863bd7a41b72ac511ed5a1bdb8be8'],
  })

  deployments.log(
    ' 📄',
    chalk.cyan(contractName),
    'deployed to:',
    chalk.magenta(deployResult.address)
  )
}

export default func

func.tags = [contractName, 'all']
