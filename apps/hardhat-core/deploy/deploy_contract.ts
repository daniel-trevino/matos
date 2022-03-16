import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import chalk from 'chalk'
import keccak256 from 'keccak256'
import { MerkleTree } from 'merkletreejs'
import { formatBytes32String } from 'ethers/lib/utils'

const contractName = 'Matos'

const defaultNetwork =
  process.env.NEXT_PUBLIC_DEFAULT_NETWORK_NAME === 'localhost'
    ? 'hardhat'
    : process.env.NEXT_PUBLIC_DEFAULT_NETWORK_NAME
chalk.magenta(`Deploying to ${defaultNetwork} 🛰`)

const matosMetadataIPFS =
  'https://gateway.pinata.cloud/ipfs/QmQxo8Jogon3DaC59y1CjVWHns9QiQDbxr9fQPdo5VpbPY'

const func: DeployFunction = async ({
  deployments,
  getNamedAccounts,
}: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()
  const merkleTree = new MerkleTree([], keccak256, { sortPairs: true })
  const merkleRoot = formatBytes32String(merkleTree.getRoot().toString('hex'))

  const deployResult = await deploy(contractName, {
    from: deployer,
    args: [matosMetadataIPFS, merkleRoot],
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
