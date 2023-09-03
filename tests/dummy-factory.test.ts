import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { ProxyCreation } from "../generated/schema"
import { ProxyCreation as ProxyCreationEvent } from "../generated/DummyFactory/DummyFactory"
import { handleProxyCreation } from "../src/dummy-factory"
import { createProxyCreationEvent } from "./dummy-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _proxy = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newProxyCreationEvent = createProxyCreationEvent(_creator, _proxy)
    handleProxyCreation(newProxyCreationEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ProxyCreation created and stored", () => {
    assert.entityCount("ProxyCreation", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ProxyCreation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_creator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ProxyCreation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_proxy",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
