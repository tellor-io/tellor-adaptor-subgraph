import {
  ExcessDIVARewardRecipientUpdated as ExcessDIVARewardRecipientUpdatedEvent,
  FinalReferenceValueSet as FinalReferenceValueSetEvent,
  MaxDIVARewardUSDUpdated as MaxDIVARewardUSDUpdatedEvent,
  PendingExcessDIVARewardRecipientUpdateRevoked as PendingExcessDIVARewardRecipientUpdateRevokedEvent,
  PendingMaxDIVARewardUSDUpdateRevoked as PendingMaxDIVARewardUSDUpdateRevokedEvent,
  TipAdded as TipAddedEvent,
  TipClaimed as TipClaimedEvent
} from "../generated/Contract/Contract"
import {
  ExcessDIVARewardRecipientUpdated,
  FinalReferenceValueSet,
  MaxDIVARewardUSDUpdated,
  PendingExcessDIVARewardRecipientUpdateRevoked,
  PendingMaxDIVARewardUSDUpdateRevoked,
  TipAdded,
  TipClaimed
} from "../generated/schema"

export function handleExcessDIVARewardRecipientUpdated(
  event: ExcessDIVARewardRecipientUpdatedEvent
): void {
  let entity = new ExcessDIVARewardRecipientUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.excessDIVARewardRecipient = event.params.excessDIVARewardRecipient
  entity.startTimeExcessDIVARewardRecipient =
    event.params.startTimeExcessDIVARewardRecipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFinalReferenceValueSet(
  event: FinalReferenceValueSetEvent
): void {
  let entity = new FinalReferenceValueSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.finalValue = event.params.finalValue
  entity.expiryTime = event.params.expiryTime
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxDIVARewardUSDUpdated(
  event: MaxDIVARewardUSDUpdatedEvent
): void {
  let entity = new MaxDIVARewardUSDUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.maxDIVARewardUSD = event.params.maxDIVARewardUSD
  entity.startTimeMaxDIVARewardUSD = event.params.startTimeMaxDIVARewardUSD

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePendingExcessDIVARewardRecipientUpdateRevoked(
  event: PendingExcessDIVARewardRecipientUpdateRevokedEvent
): void {
  let entity = new PendingExcessDIVARewardRecipientUpdateRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.revokedBy = event.params.revokedBy
  entity.revokedExcessDIVARewardRecipient =
    event.params.revokedExcessDIVARewardRecipient
  entity.restoredExcessDIVARewardRecipient =
    event.params.restoredExcessDIVARewardRecipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePendingMaxDIVARewardUSDUpdateRevoked(
  event: PendingMaxDIVARewardUSDUpdateRevokedEvent
): void {
  let entity = new PendingMaxDIVARewardUSDUpdateRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.revokedBy = event.params.revokedBy
  entity.revokedMaxDIVARewardUSD = event.params.revokedMaxDIVARewardUSD
  entity.restoredMaxDIVARewardUSD = event.params.restoredMaxDIVARewardUSD

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTipAdded(event: TipAddedEvent): void {
  let entity = new TipAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.tippingToken = event.params.tippingToken
  entity.amount = event.params.amount
  entity.tipper = event.params.tipper

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTipClaimed(event: TipClaimedEvent): void {
  let entity = new TipClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.recipient = event.params.recipient
  entity.tippingToken = event.params.tippingToken
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
