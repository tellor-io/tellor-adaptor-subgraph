import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { ExcessDIVARewardRecipientUpdated } from "../generated/schema"
import { ExcessDIVARewardRecipientUpdated as ExcessDIVARewardRecipientUpdatedEvent } from "../generated/Contract/Contract"
import { handleExcessDIVARewardRecipientUpdated } from "../src/contract"
import { createExcessDIVARewardRecipientUpdatedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let from = Address.fromString("0x0000000000000000000000000000000000000001")
    let excessDIVARewardRecipient = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let startTimeExcessDIVARewardRecipient = BigInt.fromI32(234)
    let newExcessDIVARewardRecipientUpdatedEvent = createExcessDIVARewardRecipientUpdatedEvent(
      from,
      excessDIVARewardRecipient,
      startTimeExcessDIVARewardRecipient
    )
    handleExcessDIVARewardRecipientUpdated(
      newExcessDIVARewardRecipientUpdatedEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExcessDIVARewardRecipientUpdated created and stored", () => {
    assert.entityCount("ExcessDIVARewardRecipientUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ExcessDIVARewardRecipientUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "from",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExcessDIVARewardRecipientUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "excessDIVARewardRecipient",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExcessDIVARewardRecipientUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "startTimeExcessDIVARewardRecipient",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
