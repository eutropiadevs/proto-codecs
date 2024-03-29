/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.liquidity.v1beta1";

/** OrderDirection enumerates order directions. */
export enum OrderDirection {
  /** ORDER_DIRECTION_UNSPECIFIED - ORDER_DIRECTION_UNSPECIFIED specifies unknown order direction */
  ORDER_DIRECTION_UNSPECIFIED = 0,
  /** ORDER_DIRECTION_BUY - ORDER_DIRECTION_BUY specifies buy(swap quote coin to base coin) order direction */
  ORDER_DIRECTION_BUY = 1,
  /** ORDER_DIRECTION_SELL - ORDER_DIRECTION_SELL specifies sell(swap base coin to quote coin) order direction */
  ORDER_DIRECTION_SELL = 2,
  UNRECOGNIZED = -1,
}

export function orderDirectionFromJSON(object: any): OrderDirection {
  switch (object) {
    case 0:
    case "ORDER_DIRECTION_UNSPECIFIED":
      return OrderDirection.ORDER_DIRECTION_UNSPECIFIED;
    case 1:
    case "ORDER_DIRECTION_BUY":
      return OrderDirection.ORDER_DIRECTION_BUY;
    case 2:
    case "ORDER_DIRECTION_SELL":
      return OrderDirection.ORDER_DIRECTION_SELL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderDirection.UNRECOGNIZED;
  }
}

export function orderDirectionToJSON(object: OrderDirection): string {
  switch (object) {
    case OrderDirection.ORDER_DIRECTION_UNSPECIFIED:
      return "ORDER_DIRECTION_UNSPECIFIED";
    case OrderDirection.ORDER_DIRECTION_BUY:
      return "ORDER_DIRECTION_BUY";
    case OrderDirection.ORDER_DIRECTION_SELL:
      return "ORDER_DIRECTION_SELL";
    case OrderDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** RequestStatus enumerates request statuses. */
export enum RequestStatus {
  /** REQUEST_STATUS_UNSPECIFIED - REQUEST_STATUS_UNSPECIFIED specifies unknown request status */
  REQUEST_STATUS_UNSPECIFIED = 0,
  /** REQUEST_STATUS_NOT_EXECUTED - REQUEST_STATUS_NOT_EXECUTED indicates the request is not executed yet */
  REQUEST_STATUS_NOT_EXECUTED = 1,
  /** REQUEST_STATUS_SUCCEEDED - REQUEST_STATUS_SUCCEEDED indicates the request has been succeeded */
  REQUEST_STATUS_SUCCEEDED = 2,
  /** REQUEST_STATUS_FAILED - REQUEST_STATUS_FAILED indicates the request is failed */
  REQUEST_STATUS_FAILED = 3,
  UNRECOGNIZED = -1,
}

export function requestStatusFromJSON(object: any): RequestStatus {
  switch (object) {
    case 0:
    case "REQUEST_STATUS_UNSPECIFIED":
      return RequestStatus.REQUEST_STATUS_UNSPECIFIED;
    case 1:
    case "REQUEST_STATUS_NOT_EXECUTED":
      return RequestStatus.REQUEST_STATUS_NOT_EXECUTED;
    case 2:
    case "REQUEST_STATUS_SUCCEEDED":
      return RequestStatus.REQUEST_STATUS_SUCCEEDED;
    case 3:
    case "REQUEST_STATUS_FAILED":
      return RequestStatus.REQUEST_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestStatus.UNRECOGNIZED;
  }
}

export function requestStatusToJSON(object: RequestStatus): string {
  switch (object) {
    case RequestStatus.REQUEST_STATUS_UNSPECIFIED:
      return "REQUEST_STATUS_UNSPECIFIED";
    case RequestStatus.REQUEST_STATUS_NOT_EXECUTED:
      return "REQUEST_STATUS_NOT_EXECUTED";
    case RequestStatus.REQUEST_STATUS_SUCCEEDED:
      return "REQUEST_STATUS_SUCCEEDED";
    case RequestStatus.REQUEST_STATUS_FAILED:
      return "REQUEST_STATUS_FAILED";
    case RequestStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** OrderStatus enumerates order statuses. */
export enum OrderStatus {
  /** ORDER_STATUS_UNSPECIFIED - ORDER_STATUS_UNSPECIFIED specifies unknown order status */
  ORDER_STATUS_UNSPECIFIED = 0,
  /** ORDER_STATUS_NOT_EXECUTED - ORDER_STATUS_NOT_EXECUTED indicates the order has not been executed yet */
  ORDER_STATUS_NOT_EXECUTED = 1,
  /** ORDER_STATUS_NOT_MATCHED - ORDER_STATUS_NOT_MATCHED indicates the order has been executed but has no match */
  ORDER_STATUS_NOT_MATCHED = 2,
  /** ORDER_STATUS_PARTIALLY_MATCHED - ORDER_STATUS_PARTIALLY_MATCHED indicates the order has been partially matched */
  ORDER_STATUS_PARTIALLY_MATCHED = 3,
  /** ORDER_STATUS_COMPLETED - ORDER_STATUS_COMPLETED indicates the order has been fully matched and completed */
  ORDER_STATUS_COMPLETED = 4,
  /** ORDER_STATUS_CANCELED - ORDER_STATUS_CANCELED indicates the order has been canceled */
  ORDER_STATUS_CANCELED = 5,
  /** ORDER_STATUS_EXPIRED - ORDER_STATUS_EXPIRED indicates the order has been expired */
  ORDER_STATUS_EXPIRED = 6,
  UNRECOGNIZED = -1,
}

export function orderStatusFromJSON(object: any): OrderStatus {
  switch (object) {
    case 0:
    case "ORDER_STATUS_UNSPECIFIED":
      return OrderStatus.ORDER_STATUS_UNSPECIFIED;
    case 1:
    case "ORDER_STATUS_NOT_EXECUTED":
      return OrderStatus.ORDER_STATUS_NOT_EXECUTED;
    case 2:
    case "ORDER_STATUS_NOT_MATCHED":
      return OrderStatus.ORDER_STATUS_NOT_MATCHED;
    case 3:
    case "ORDER_STATUS_PARTIALLY_MATCHED":
      return OrderStatus.ORDER_STATUS_PARTIALLY_MATCHED;
    case 4:
    case "ORDER_STATUS_COMPLETED":
      return OrderStatus.ORDER_STATUS_COMPLETED;
    case 5:
    case "ORDER_STATUS_CANCELED":
      return OrderStatus.ORDER_STATUS_CANCELED;
    case 6:
    case "ORDER_STATUS_EXPIRED":
      return OrderStatus.ORDER_STATUS_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderStatus.UNRECOGNIZED;
  }
}

export function orderStatusToJSON(object: OrderStatus): string {
  switch (object) {
    case OrderStatus.ORDER_STATUS_UNSPECIFIED:
      return "ORDER_STATUS_UNSPECIFIED";
    case OrderStatus.ORDER_STATUS_NOT_EXECUTED:
      return "ORDER_STATUS_NOT_EXECUTED";
    case OrderStatus.ORDER_STATUS_NOT_MATCHED:
      return "ORDER_STATUS_NOT_MATCHED";
    case OrderStatus.ORDER_STATUS_PARTIALLY_MATCHED:
      return "ORDER_STATUS_PARTIALLY_MATCHED";
    case OrderStatus.ORDER_STATUS_COMPLETED:
      return "ORDER_STATUS_COMPLETED";
    case OrderStatus.ORDER_STATUS_CANCELED:
      return "ORDER_STATUS_CANCELED";
    case OrderStatus.ORDER_STATUS_EXPIRED:
      return "ORDER_STATUS_EXPIRED";
    case OrderStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** AddressType enumerates the available types of a address. */
export enum AddressType {
  /** ADDRESS_TYPE_32_BYTES - the 32 bytes length address type of ADR 028. */
  ADDRESS_TYPE_32_BYTES = 0,
  /** ADDRESS_TYPE_20_BYTES - the default 20 bytes length address type. */
  ADDRESS_TYPE_20_BYTES = 1,
  UNRECOGNIZED = -1,
}

export function addressTypeFromJSON(object: any): AddressType {
  switch (object) {
    case 0:
    case "ADDRESS_TYPE_32_BYTES":
      return AddressType.ADDRESS_TYPE_32_BYTES;
    case 1:
    case "ADDRESS_TYPE_20_BYTES":
      return AddressType.ADDRESS_TYPE_20_BYTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AddressType.UNRECOGNIZED;
  }
}

export function addressTypeToJSON(object: AddressType): string {
  switch (object) {
    case AddressType.ADDRESS_TYPE_32_BYTES:
      return "ADDRESS_TYPE_32_BYTES";
    case AddressType.ADDRESS_TYPE_20_BYTES:
      return "ADDRESS_TYPE_20_BYTES";
    case AddressType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Pair defines a coin pair. */
export interface Pair {
  id: Long;
  baseCoinDenom: string;
  quoteCoinDenom: string;
  escrowAddress: string;
  lastOrderId: Long;
  lastPrice: string;
  currentBatchId: Long;
  swapFeeCollectorAddress: string;
  appId: Long;
}

/** Pool defines a basic liquidity pool with no min-price and max-price. */
export interface Pool {
  id: Long;
  pairId: Long;
  reserveAddress: string;
  poolCoinDenom: string;
  lastDepositRequestId: Long;
  lastWithdrawRequestId: Long;
  disabled: boolean;
  appId: Long;
}

/** DepositRequest defines a deposit request. */
export interface DepositRequest {
  /** id specifies the id for the request */
  id: Long;
  /** pool_id specifies the pool id */
  poolId: Long;
  /** msg_height specifies the block height when the request is stored for the batch execution */
  msgHeight: Long;
  /** depositor specifies the bech32-encoded address that makes a deposit to the pool */
  depositor: string;
  /** deposit_coins specifies the amount of coins to deposit. */
  depositCoins: Coin[];
  /** accepted_coins specifies the amount of coins that are accepted. */
  acceptedCoins: Coin[];
  mintedPoolCoin?: Coin;
  status: RequestStatus;
  appId: Long;
}

/** WithdrawRequest defines a withdraw request. */
export interface WithdrawRequest {
  /** id specifies the id for the request */
  id: Long;
  /** pool_id specifies the pool id */
  poolId: Long;
  /** msg_height specifies the block height when the request is stored for the batch execution */
  msgHeight: Long;
  /** withdrawer specifies the bech32-encoded address that withdraws pool coin from the pool */
  withdrawer: string;
  /** pool_coin specifies the pool coin that is a proof of liquidity provider for the pool */
  poolCoin?: Coin;
  /** withdrawn_coins specifies the amount of coins that are withdrawn. */
  withdrawnCoins: Coin[];
  status: RequestStatus;
  appId: Long;
}

/** Order defines an order. */
export interface Order {
  /** id specifies the id for the request */
  id: Long;
  /** pair_id specifies the pair id */
  pairId: Long;
  /** msg_height specifies the block height when the request is stored for the batch execution */
  msgHeight: Long;
  /** orderer specifies the bech32-encoded address that makes an order */
  orderer: string;
  /** direction specifies the order direction; either buy or sell */
  direction: OrderDirection;
  offerCoin?: Coin;
  /** remaining_offer_coin specifies the remaining offer coin */
  remainingOfferCoin?: Coin;
  /** received_coin specifies the received coin after the swap */
  receivedCoin?: Coin;
  /** price specifies the price that an orderer is willing to swap */
  price: string;
  amount: string;
  openAmount: string;
  /** batch_id specifies the pair's batch id when the request is stored */
  batchId: Long;
  expireAt?: Date;
  status: OrderStatus;
  appId: Long;
}

export interface ActiveFarmer {
  appId: Long;
  poolId: Long;
  farmer: string;
  farmedPoolCoin?: Coin;
}

export interface QueuedCoin {
  farmedPoolCoin?: Coin;
  createdAt?: Date;
}

export interface QueuedFarmer {
  appId: Long;
  poolId: Long;
  farmer: string;
  queudCoins: QueuedCoin[];
}

function createBasePair(): Pair {
  return {
    id: Long.UZERO,
    baseCoinDenom: "",
    quoteCoinDenom: "",
    escrowAddress: "",
    lastOrderId: Long.UZERO,
    lastPrice: "",
    currentBatchId: Long.UZERO,
    swapFeeCollectorAddress: "",
    appId: Long.UZERO,
  };
}

export const Pair = {
  encode(message: Pair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.baseCoinDenom !== "") {
      writer.uint32(18).string(message.baseCoinDenom);
    }
    if (message.quoteCoinDenom !== "") {
      writer.uint32(26).string(message.quoteCoinDenom);
    }
    if (message.escrowAddress !== "") {
      writer.uint32(34).string(message.escrowAddress);
    }
    if (!message.lastOrderId.isZero()) {
      writer.uint32(40).uint64(message.lastOrderId);
    }
    if (message.lastPrice !== "") {
      writer.uint32(50).string(message.lastPrice);
    }
    if (!message.currentBatchId.isZero()) {
      writer.uint32(56).uint64(message.currentBatchId);
    }
    if (message.swapFeeCollectorAddress !== "") {
      writer.uint32(66).string(message.swapFeeCollectorAddress);
    }
    if (!message.appId.isZero()) {
      writer.uint32(72).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.baseCoinDenom = reader.string();
          break;
        case 3:
          message.quoteCoinDenom = reader.string();
          break;
        case 4:
          message.escrowAddress = reader.string();
          break;
        case 5:
          message.lastOrderId = reader.uint64() as Long;
          break;
        case 6:
          message.lastPrice = reader.string();
          break;
        case 7:
          message.currentBatchId = reader.uint64() as Long;
          break;
        case 8:
          message.swapFeeCollectorAddress = reader.string();
          break;
        case 9:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pair {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      baseCoinDenom: isSet(object.baseCoinDenom)
        ? String(object.baseCoinDenom)
        : "",
      quoteCoinDenom: isSet(object.quoteCoinDenom)
        ? String(object.quoteCoinDenom)
        : "",
      escrowAddress: isSet(object.escrowAddress)
        ? String(object.escrowAddress)
        : "",
      lastOrderId: isSet(object.lastOrderId)
        ? Long.fromValue(object.lastOrderId)
        : Long.UZERO,
      lastPrice: isSet(object.lastPrice) ? String(object.lastPrice) : "",
      currentBatchId: isSet(object.currentBatchId)
        ? Long.fromValue(object.currentBatchId)
        : Long.UZERO,
      swapFeeCollectorAddress: isSet(object.swapFeeCollectorAddress)
        ? String(object.swapFeeCollectorAddress)
        : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: Pair): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.baseCoinDenom !== undefined &&
      (obj.baseCoinDenom = message.baseCoinDenom);
    message.quoteCoinDenom !== undefined &&
      (obj.quoteCoinDenom = message.quoteCoinDenom);
    message.escrowAddress !== undefined &&
      (obj.escrowAddress = message.escrowAddress);
    message.lastOrderId !== undefined &&
      (obj.lastOrderId = (message.lastOrderId || Long.UZERO).toString());
    message.lastPrice !== undefined && (obj.lastPrice = message.lastPrice);
    message.currentBatchId !== undefined &&
      (obj.currentBatchId = (message.currentBatchId || Long.UZERO).toString());
    message.swapFeeCollectorAddress !== undefined &&
      (obj.swapFeeCollectorAddress = message.swapFeeCollectorAddress);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pair>, I>>(object: I): Pair {
    const message = createBasePair();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.baseCoinDenom = object.baseCoinDenom ?? "";
    message.quoteCoinDenom = object.quoteCoinDenom ?? "";
    message.escrowAddress = object.escrowAddress ?? "";
    message.lastOrderId =
      object.lastOrderId !== undefined && object.lastOrderId !== null
        ? Long.fromValue(object.lastOrderId)
        : Long.UZERO;
    message.lastPrice = object.lastPrice ?? "";
    message.currentBatchId =
      object.currentBatchId !== undefined && object.currentBatchId !== null
        ? Long.fromValue(object.currentBatchId)
        : Long.UZERO;
    message.swapFeeCollectorAddress = object.swapFeeCollectorAddress ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBasePool(): Pool {
  return {
    id: Long.UZERO,
    pairId: Long.UZERO,
    reserveAddress: "",
    poolCoinDenom: "",
    lastDepositRequestId: Long.UZERO,
    lastWithdrawRequestId: Long.UZERO,
    disabled: false,
    appId: Long.UZERO,
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(26).string(message.reserveAddress);
    }
    if (message.poolCoinDenom !== "") {
      writer.uint32(34).string(message.poolCoinDenom);
    }
    if (!message.lastDepositRequestId.isZero()) {
      writer.uint32(40).uint64(message.lastDepositRequestId);
    }
    if (!message.lastWithdrawRequestId.isZero()) {
      writer.uint32(48).uint64(message.lastWithdrawRequestId);
    }
    if (message.disabled === true) {
      writer.uint32(56).bool(message.disabled);
    }
    if (!message.appId.isZero()) {
      writer.uint32(64).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.pairId = reader.uint64() as Long;
          break;
        case 3:
          message.reserveAddress = reader.string();
          break;
        case 4:
          message.poolCoinDenom = reader.string();
          break;
        case 5:
          message.lastDepositRequestId = reader.uint64() as Long;
          break;
        case 6:
          message.lastWithdrawRequestId = reader.uint64() as Long;
          break;
        case 7:
          message.disabled = reader.bool();
          break;
        case 8:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      reserveAddress: isSet(object.reserveAddress)
        ? String(object.reserveAddress)
        : "",
      poolCoinDenom: isSet(object.poolCoinDenom)
        ? String(object.poolCoinDenom)
        : "",
      lastDepositRequestId: isSet(object.lastDepositRequestId)
        ? Long.fromValue(object.lastDepositRequestId)
        : Long.UZERO,
      lastWithdrawRequestId: isSet(object.lastWithdrawRequestId)
        ? Long.fromValue(object.lastWithdrawRequestId)
        : Long.UZERO,
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.reserveAddress !== undefined &&
      (obj.reserveAddress = message.reserveAddress);
    message.poolCoinDenom !== undefined &&
      (obj.poolCoinDenom = message.poolCoinDenom);
    message.lastDepositRequestId !== undefined &&
      (obj.lastDepositRequestId = (
        message.lastDepositRequestId || Long.UZERO
      ).toString());
    message.lastWithdrawRequestId !== undefined &&
      (obj.lastWithdrawRequestId = (
        message.lastWithdrawRequestId || Long.UZERO
      ).toString());
    message.disabled !== undefined && (obj.disabled = message.disabled);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.reserveAddress = object.reserveAddress ?? "";
    message.poolCoinDenom = object.poolCoinDenom ?? "";
    message.lastDepositRequestId =
      object.lastDepositRequestId !== undefined &&
      object.lastDepositRequestId !== null
        ? Long.fromValue(object.lastDepositRequestId)
        : Long.UZERO;
    message.lastWithdrawRequestId =
      object.lastWithdrawRequestId !== undefined &&
      object.lastWithdrawRequestId !== null
        ? Long.fromValue(object.lastWithdrawRequestId)
        : Long.UZERO;
    message.disabled = object.disabled ?? false;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseDepositRequest(): DepositRequest {
  return {
    id: Long.UZERO,
    poolId: Long.UZERO,
    msgHeight: Long.ZERO,
    depositor: "",
    depositCoins: [],
    acceptedCoins: [],
    mintedPoolCoin: undefined,
    status: 0,
    appId: Long.UZERO,
  };
}

export const DepositRequest = {
  encode(
    message: DepositRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (!message.msgHeight.isZero()) {
      writer.uint32(24).int64(message.msgHeight);
    }
    if (message.depositor !== "") {
      writer.uint32(34).string(message.depositor);
    }
    for (const v of message.depositCoins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.acceptedCoins) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.mintedPoolCoin !== undefined) {
      Coin.encode(message.mintedPoolCoin, writer.uint32(58).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (!message.appId.isZero()) {
      writer.uint32(72).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.msgHeight = reader.int64() as Long;
          break;
        case 4:
          message.depositor = reader.string();
          break;
        case 5:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.acceptedCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.mintedPoolCoin = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      msgHeight: isSet(object.msgHeight)
        ? Long.fromValue(object.msgHeight)
        : Long.ZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      depositCoins: Array.isArray(object?.depositCoins)
        ? object.depositCoins.map((e: any) => Coin.fromJSON(e))
        : [],
      acceptedCoins: Array.isArray(object?.acceptedCoins)
        ? object.acceptedCoins.map((e: any) => Coin.fromJSON(e))
        : [],
      mintedPoolCoin: isSet(object.mintedPoolCoin)
        ? Coin.fromJSON(object.mintedPoolCoin)
        : undefined,
      status: isSet(object.status) ? requestStatusFromJSON(object.status) : 0,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: DepositRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.msgHeight !== undefined &&
      (obj.msgHeight = (message.msgHeight || Long.ZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.depositCoins) {
      obj.depositCoins = message.depositCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.depositCoins = [];
    }
    if (message.acceptedCoins) {
      obj.acceptedCoins = message.acceptedCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.acceptedCoins = [];
    }
    message.mintedPoolCoin !== undefined &&
      (obj.mintedPoolCoin = message.mintedPoolCoin
        ? Coin.toJSON(message.mintedPoolCoin)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositRequest>, I>>(
    object: I
  ): DepositRequest {
    const message = createBaseDepositRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.msgHeight =
      object.msgHeight !== undefined && object.msgHeight !== null
        ? Long.fromValue(object.msgHeight)
        : Long.ZERO;
    message.depositor = object.depositor ?? "";
    message.depositCoins =
      object.depositCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.acceptedCoins =
      object.acceptedCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.mintedPoolCoin =
      object.mintedPoolCoin !== undefined && object.mintedPoolCoin !== null
        ? Coin.fromPartial(object.mintedPoolCoin)
        : undefined;
    message.status = object.status ?? 0;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseWithdrawRequest(): WithdrawRequest {
  return {
    id: Long.UZERO,
    poolId: Long.UZERO,
    msgHeight: Long.ZERO,
    withdrawer: "",
    poolCoin: undefined,
    withdrawnCoins: [],
    status: 0,
    appId: Long.UZERO,
  };
}

export const WithdrawRequest = {
  encode(
    message: WithdrawRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (!message.msgHeight.isZero()) {
      writer.uint32(24).int64(message.msgHeight);
    }
    if (message.withdrawer !== "") {
      writer.uint32(34).string(message.withdrawer);
    }
    if (message.poolCoin !== undefined) {
      Coin.encode(message.poolCoin, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.withdrawnCoins) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (!message.appId.isZero()) {
      writer.uint32(64).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.msgHeight = reader.int64() as Long;
          break;
        case 4:
          message.withdrawer = reader.string();
          break;
        case 5:
          message.poolCoin = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.withdrawnCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      msgHeight: isSet(object.msgHeight)
        ? Long.fromValue(object.msgHeight)
        : Long.ZERO,
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
      poolCoin: isSet(object.poolCoin)
        ? Coin.fromJSON(object.poolCoin)
        : undefined,
      withdrawnCoins: Array.isArray(object?.withdrawnCoins)
        ? object.withdrawnCoins.map((e: any) => Coin.fromJSON(e))
        : [],
      status: isSet(object.status) ? requestStatusFromJSON(object.status) : 0,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: WithdrawRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.msgHeight !== undefined &&
      (obj.msgHeight = (message.msgHeight || Long.ZERO).toString());
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.poolCoin !== undefined &&
      (obj.poolCoin = message.poolCoin
        ? Coin.toJSON(message.poolCoin)
        : undefined);
    if (message.withdrawnCoins) {
      obj.withdrawnCoins = message.withdrawnCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.withdrawnCoins = [];
    }
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WithdrawRequest>, I>>(
    object: I
  ): WithdrawRequest {
    const message = createBaseWithdrawRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.msgHeight =
      object.msgHeight !== undefined && object.msgHeight !== null
        ? Long.fromValue(object.msgHeight)
        : Long.ZERO;
    message.withdrawer = object.withdrawer ?? "";
    message.poolCoin =
      object.poolCoin !== undefined && object.poolCoin !== null
        ? Coin.fromPartial(object.poolCoin)
        : undefined;
    message.withdrawnCoins =
      object.withdrawnCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseOrder(): Order {
  return {
    id: Long.UZERO,
    pairId: Long.UZERO,
    msgHeight: Long.ZERO,
    orderer: "",
    direction: 0,
    offerCoin: undefined,
    remainingOfferCoin: undefined,
    receivedCoin: undefined,
    price: "",
    amount: "",
    openAmount: "",
    batchId: Long.UZERO,
    expireAt: undefined,
    status: 0,
    appId: Long.UZERO,
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (!message.msgHeight.isZero()) {
      writer.uint32(24).int64(message.msgHeight);
    }
    if (message.orderer !== "") {
      writer.uint32(34).string(message.orderer);
    }
    if (message.direction !== 0) {
      writer.uint32(40).int32(message.direction);
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(50).fork()).ldelim();
    }
    if (message.remainingOfferCoin !== undefined) {
      Coin.encode(
        message.remainingOfferCoin,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.receivedCoin !== undefined) {
      Coin.encode(message.receivedCoin, writer.uint32(66).fork()).ldelim();
    }
    if (message.price !== "") {
      writer.uint32(74).string(message.price);
    }
    if (message.amount !== "") {
      writer.uint32(82).string(message.amount);
    }
    if (message.openAmount !== "") {
      writer.uint32(90).string(message.openAmount);
    }
    if (!message.batchId.isZero()) {
      writer.uint32(96).uint64(message.batchId);
    }
    if (message.expireAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expireAt),
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }
    if (!message.appId.isZero()) {
      writer.uint32(120).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.pairId = reader.uint64() as Long;
          break;
        case 3:
          message.msgHeight = reader.int64() as Long;
          break;
        case 4:
          message.orderer = reader.string();
          break;
        case 5:
          message.direction = reader.int32() as any;
          break;
        case 6:
          message.offerCoin = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.remainingOfferCoin = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.receivedCoin = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.price = reader.string();
          break;
        case 10:
          message.amount = reader.string();
          break;
        case 11:
          message.openAmount = reader.string();
          break;
        case 12:
          message.batchId = reader.uint64() as Long;
          break;
        case 13:
          message.expireAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.status = reader.int32() as any;
          break;
        case 15:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      msgHeight: isSet(object.msgHeight)
        ? Long.fromValue(object.msgHeight)
        : Long.ZERO,
      orderer: isSet(object.orderer) ? String(object.orderer) : "",
      direction: isSet(object.direction)
        ? orderDirectionFromJSON(object.direction)
        : 0,
      offerCoin: isSet(object.offerCoin)
        ? Coin.fromJSON(object.offerCoin)
        : undefined,
      remainingOfferCoin: isSet(object.remainingOfferCoin)
        ? Coin.fromJSON(object.remainingOfferCoin)
        : undefined,
      receivedCoin: isSet(object.receivedCoin)
        ? Coin.fromJSON(object.receivedCoin)
        : undefined,
      price: isSet(object.price) ? String(object.price) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      openAmount: isSet(object.openAmount) ? String(object.openAmount) : "",
      batchId: isSet(object.batchId)
        ? Long.fromValue(object.batchId)
        : Long.UZERO,
      expireAt: isSet(object.expireAt)
        ? fromJsonTimestamp(object.expireAt)
        : undefined,
      status: isSet(object.status) ? orderStatusFromJSON(object.status) : 0,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.msgHeight !== undefined &&
      (obj.msgHeight = (message.msgHeight || Long.ZERO).toString());
    message.orderer !== undefined && (obj.orderer = message.orderer);
    message.direction !== undefined &&
      (obj.direction = orderDirectionToJSON(message.direction));
    message.offerCoin !== undefined &&
      (obj.offerCoin = message.offerCoin
        ? Coin.toJSON(message.offerCoin)
        : undefined);
    message.remainingOfferCoin !== undefined &&
      (obj.remainingOfferCoin = message.remainingOfferCoin
        ? Coin.toJSON(message.remainingOfferCoin)
        : undefined);
    message.receivedCoin !== undefined &&
      (obj.receivedCoin = message.receivedCoin
        ? Coin.toJSON(message.receivedCoin)
        : undefined);
    message.price !== undefined && (obj.price = message.price);
    message.amount !== undefined && (obj.amount = message.amount);
    message.openAmount !== undefined && (obj.openAmount = message.openAmount);
    message.batchId !== undefined &&
      (obj.batchId = (message.batchId || Long.UZERO).toString());
    message.expireAt !== undefined &&
      (obj.expireAt = message.expireAt.toISOString());
    message.status !== undefined &&
      (obj.status = orderStatusToJSON(message.status));
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Order>, I>>(object: I): Order {
    const message = createBaseOrder();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.msgHeight =
      object.msgHeight !== undefined && object.msgHeight !== null
        ? Long.fromValue(object.msgHeight)
        : Long.ZERO;
    message.orderer = object.orderer ?? "";
    message.direction = object.direction ?? 0;
    message.offerCoin =
      object.offerCoin !== undefined && object.offerCoin !== null
        ? Coin.fromPartial(object.offerCoin)
        : undefined;
    message.remainingOfferCoin =
      object.remainingOfferCoin !== undefined &&
      object.remainingOfferCoin !== null
        ? Coin.fromPartial(object.remainingOfferCoin)
        : undefined;
    message.receivedCoin =
      object.receivedCoin !== undefined && object.receivedCoin !== null
        ? Coin.fromPartial(object.receivedCoin)
        : undefined;
    message.price = object.price ?? "";
    message.amount = object.amount ?? "";
    message.openAmount = object.openAmount ?? "";
    message.batchId =
      object.batchId !== undefined && object.batchId !== null
        ? Long.fromValue(object.batchId)
        : Long.UZERO;
    message.expireAt = object.expireAt ?? undefined;
    message.status = object.status ?? 0;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseActiveFarmer(): ActiveFarmer {
  return {
    appId: Long.UZERO,
    poolId: Long.UZERO,
    farmer: "",
    farmedPoolCoin: undefined,
  };
}

export const ActiveFarmer = {
  encode(
    message: ActiveFarmer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.farmer !== "") {
      writer.uint32(26).string(message.farmer);
    }
    if (message.farmedPoolCoin !== undefined) {
      Coin.encode(message.farmedPoolCoin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveFarmer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveFarmer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.farmer = reader.string();
          break;
        case 4:
          message.farmedPoolCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActiveFarmer {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      farmer: isSet(object.farmer) ? String(object.farmer) : "",
      farmedPoolCoin: isSet(object.farmedPoolCoin)
        ? Coin.fromJSON(object.farmedPoolCoin)
        : undefined,
    };
  },

  toJSON(message: ActiveFarmer): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.farmer !== undefined && (obj.farmer = message.farmer);
    message.farmedPoolCoin !== undefined &&
      (obj.farmedPoolCoin = message.farmedPoolCoin
        ? Coin.toJSON(message.farmedPoolCoin)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActiveFarmer>, I>>(
    object: I
  ): ActiveFarmer {
    const message = createBaseActiveFarmer();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.farmer = object.farmer ?? "";
    message.farmedPoolCoin =
      object.farmedPoolCoin !== undefined && object.farmedPoolCoin !== null
        ? Coin.fromPartial(object.farmedPoolCoin)
        : undefined;
    return message;
  },
};

function createBaseQueuedCoin(): QueuedCoin {
  return { farmedPoolCoin: undefined, createdAt: undefined };
}

export const QueuedCoin = {
  encode(
    message: QueuedCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.farmedPoolCoin !== undefined) {
      Coin.encode(message.farmedPoolCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueuedCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.farmedPoolCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueuedCoin {
    return {
      farmedPoolCoin: isSet(object.farmedPoolCoin)
        ? Coin.fromJSON(object.farmedPoolCoin)
        : undefined,
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
    };
  },

  toJSON(message: QueuedCoin): unknown {
    const obj: any = {};
    message.farmedPoolCoin !== undefined &&
      (obj.farmedPoolCoin = message.farmedPoolCoin
        ? Coin.toJSON(message.farmedPoolCoin)
        : undefined);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueuedCoin>, I>>(
    object: I
  ): QueuedCoin {
    const message = createBaseQueuedCoin();
    message.farmedPoolCoin =
      object.farmedPoolCoin !== undefined && object.farmedPoolCoin !== null
        ? Coin.fromPartial(object.farmedPoolCoin)
        : undefined;
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

function createBaseQueuedFarmer(): QueuedFarmer {
  return { appId: Long.UZERO, poolId: Long.UZERO, farmer: "", queudCoins: [] };
}

export const QueuedFarmer = {
  encode(
    message: QueuedFarmer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.farmer !== "") {
      writer.uint32(26).string(message.farmer);
    }
    for (const v of message.queudCoins) {
      QueuedCoin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueuedFarmer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedFarmer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.farmer = reader.string();
          break;
        case 4:
          message.queudCoins.push(QueuedCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueuedFarmer {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      farmer: isSet(object.farmer) ? String(object.farmer) : "",
      queudCoins: Array.isArray(object?.queudCoins)
        ? object.queudCoins.map((e: any) => QueuedCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueuedFarmer): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.farmer !== undefined && (obj.farmer = message.farmer);
    if (message.queudCoins) {
      obj.queudCoins = message.queudCoins.map((e) =>
        e ? QueuedCoin.toJSON(e) : undefined
      );
    } else {
      obj.queudCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueuedFarmer>, I>>(
    object: I
  ): QueuedFarmer {
    const message = createBaseQueuedFarmer();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.farmer = object.farmer ?? "";
    message.queudCoins =
      object.queudCoins?.map((e) => QueuedCoin.fromPartial(e)) || [];
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
