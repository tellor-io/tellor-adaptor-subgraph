import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  ExcessDIVARewardRecipientUpdated,
  FinalReferenceValueSet,
  MaxDIVARewardUSDUpdated,
  PendingExcessDIVARewardRecipientUpdateRevoked,
  PendingMaxDIVARewardUSDUpdateRevoked,
  TipAdded,
  TipClaimed
} from "../generated/Contract/Contract"

export function createExcessDIVARewardRecipientUpdatedEvent(
  from: Address,
  excessDIVARewardRecipient: Address,
  startTimeExcessDIVARewardRecipient: BigInt
): ExcessDIVARewardRecipientUpdated {
  let excessDivaRewardRecipientUpdatedEvent = changetype<
    ExcessDIVARewardRecipientUpdated
  >(newMockEvent())

  excessDivaRewardRecipientUpdatedEvent.parameters = new Array()

  excessDivaRewardRecipientUpdatedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  excessDivaRewardRecipientUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "excessDIVARewardRecipient",
      ethereum.Value.fromAddress(excessDIVARewardRecipient)
    )
  )
  excessDivaRewardRecipientUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "startTimeExcessDIVARewardRecipient",
      ethereum.Value.fromUnsignedBigInt(startTimeExcessDIVARewardRecipient)
    )
  )

  return excessDivaRewardRecipientUpdatedEvent
}

export function createFinalReferenceValueSetEvent(
  poolId: Bytes,
  finalValue: BigInt,
  expiryTime: BigInt,
  timestamp: BigInt
): FinalReferenceValueSet {
  let finalReferenceValueSetEvent = changetype<FinalReferenceValueSet>(
    newMockEvent()
  )

  finalReferenceValueSetEvent.parameters = new Array()

  finalReferenceValueSetEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  finalReferenceValueSetEvent.parameters.push(
    new ethereum.EventParam(
      "finalValue",
      ethereum.Value.fromUnsignedBigInt(finalValue)
    )
  )
  finalReferenceValueSetEvent.parameters.push(
    new ethereum.EventParam(
      "expiryTime",
      ethereum.Value.fromUnsignedBigInt(expiryTime)
    )
  )
  finalReferenceValueSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return finalReferenceValueSetEvent
}

export function createMaxDIVARewardUSDUpdatedEvent(
  from: Address,
  maxDIVARewardUSD: BigInt,
  startTimeMaxDIVARewardUSD: BigInt
): MaxDIVARewardUSDUpdated {
  let maxDivaRewardUsdUpdatedEvent = changetype<MaxDIVARewardUSDUpdated>(
    newMockEvent()
  )

  maxDivaRewardUsdUpdatedEvent.parameters = new Array()

  maxDivaRewardUsdUpdatedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  maxDivaRewardUsdUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxDIVARewardUSD",
      ethereum.Value.fromUnsignedBigInt(maxDIVARewardUSD)
    )
  )
  maxDivaRewardUsdUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "startTimeMaxDIVARewardUSD",
      ethereum.Value.fromUnsignedBigInt(startTimeMaxDIVARewardUSD)
    )
  )

  return maxDivaRewardUsdUpdatedEvent
}

export function createPendingExcessDIVARewardRecipientUpdateRevokedEvent(
  revokedBy: Address,
  revokedExcessDIVARewardRecipient: Address,
  restoredExcessDIVARewardRecipient: Address
): PendingExcessDIVARewardRecipientUpdateRevoked {
  let pendingExcessDivaRewardRecipientUpdateRevokedEvent = changetype<
    PendingExcessDIVARewardRecipientUpdateRevoked
  >(newMockEvent())

  pendingExcessDivaRewardRecipientUpdateRevokedEvent.parameters = new Array()

  pendingExcessDivaRewardRecipientUpdateRevokedEvent.parameters.push(
    new ethereum.EventParam("revokedBy", ethereum.Value.fromAddress(revokedBy))
  )
  pendingExcessDivaRewardRecipientUpdateRevokedEvent.parameters.push(
    new ethereum.EventParam(
      "revokedExcessDIVARewardRecipient",
      ethereum.Value.fromAddress(revokedExcessDIVARewardRecipient)
    )
  )
  pendingExcessDivaRewardRecipientUpdateRevokedEvent.parameters.push(
    new ethereum.EventParam(
      "restoredExcessDIVARewardRecipient",
      ethereum.Value.fromAddress(restoredExcessDIVARewardRecipient)
    )
  )

  return pendingExcessDivaRewardRecipientUpdateRevokedEvent
}

export function createPendingMaxDIVARewardUSDUpdateRevokedEvent(
  revokedBy: Address,
  revokedMaxDIVARewardUSD: BigInt,
  restoredMaxDIVARewardUSD: BigInt
): PendingMaxDIVARewardUSDUpdateRevoked {
  let pendingMaxDivaRewardUsdUpdateRevokedEvent = changetype<
    PendingMaxDIVARewardUSDUpdateRevoked
  >(newMockEvent())

  pendingMaxDivaRewardUsdUpdateRevokedEvent.parameters = new Array()

  pendingMaxDivaRewardUsdUpdateRevokedEvent.parameters.push(
    new ethereum.EventParam("revokedBy", ethereum.Value.fromAddress(revokedBy))
  )
  pendingMaxDivaRewardUsdUpdateRevokedEvent.parameters.push(
    new ethereum.EventParam(
      "revokedMaxDIVARewardUSD",
      ethereum.Value.fromUnsignedBigInt(revokedMaxDIVARewardUSD)
    )
  )
  pendingMaxDivaRewardUsdUpdateRevokedEvent.parameters.push(
    new ethereum.EventParam(
      "restoredMaxDIVARewardUSD",
      ethereum.Value.fromUnsignedBigInt(restoredMaxDIVARewardUSD)
    )
  )

  return pendingMaxDivaRewardUsdUpdateRevokedEvent
}

export function createTipAddedEvent(
  poolId: Bytes,
  tippingToken: Address,
  amount: BigInt,
  tipper: Address
): TipAdded {
  let tipAddedEvent = changetype<TipAdded>(newMockEvent())

  tipAddedEvent.parameters = new Array()

  tipAddedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  tipAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tippingToken",
      ethereum.Value.fromAddress(tippingToken)
    )
  )
  tipAddedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tipAddedEvent.parameters.push(
    new ethereum.EventParam("tipper", ethereum.Value.fromAddress(tipper))
  )

  return tipAddedEvent
}

export function createTipClaimedEvent(
  poolId: Bytes,
  recipient: Address,
  tippingToken: Address,
  amount: BigInt
): TipClaimed {
  let tipClaimedEvent = changetype<TipClaimed>(newMockEvent())

  tipClaimedEvent.parameters = new Array()

  tipClaimedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  tipClaimedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  tipClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "tippingToken",
      ethereum.Value.fromAddress(tippingToken)
    )
  )
  tipClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tipClaimedEvent
}
