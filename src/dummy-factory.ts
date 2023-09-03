import { ProxyCreation as ProxyCreationEvent } from "../generated/DummyFactory/DummyFactory"
import { ProxyCreation } from "../generated/schema"

export function handleProxyCreation(event: ProxyCreationEvent): void {
  let entity = new ProxyCreation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._creator = event.params._creator
  entity._proxy = event.params._proxy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
