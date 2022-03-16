import * as value from '../../generated/typechain'

const proxyValue: any = value
// eslint-disable-next-line import/namespace
export const getLocalContractAbiFromName = (name: string): any => proxyValue[`${name}__factory`].abi
