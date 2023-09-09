import { 
    ProxyCreation as ProxyCreationEvent
} from "../generated/DummyFactory/DummyFactory"

import {
    ProxyCreation, User
} from '../generated/schema'

export function handleProxyCreation(event: ProxyCreationEvent): void {
    let proxyCreation = new ProxyCreation(event.params._proxy.toHexString())
    proxyCreation.creator = event.params._creator.toHexString()
    proxyCreation.blockNumber = event.block.number
    proxyCreation.blockTimestamp = event.block.timestamp
    proxyCreation.transactionHash = event.transaction.hash
    proxyCreation.gasLimit = event.transaction.gasLimit
    proxyCreation.gasPrice = event.transaction.gasPrice
    proxyCreation.save()

    let user = User.load(event.params._creator.toHexString())
    if (!user) {
        user = new User(event.params._creator.toHexString())
        user.save()
    }
}