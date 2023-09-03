import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { ProxyCreation } from "../generated/DummyFactory/DummyFactory"

export function createProxyCreationEvent(
  _creator: Address,
  _proxy: Address
): ProxyCreation {
  let proxyCreationEvent = changetype<ProxyCreation>(newMockEvent())

  proxyCreationEvent.parameters = new Array()

  proxyCreationEvent.parameters.push(
    new ethereum.EventParam("_creator", ethereum.Value.fromAddress(_creator))
  )
  proxyCreationEvent.parameters.push(
    new ethereum.EventParam("_proxy", ethereum.Value.fromAddress(_proxy))
  )

  return proxyCreationEvent
}
