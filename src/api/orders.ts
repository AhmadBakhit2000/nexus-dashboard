import { ApiError, getJson, isFiniteNumber, isRecord } from "./http";

export interface OrderSummary {
  orders: number;
  revenue: number;
  averageOrder: number;
}

interface Cart {
  discountedTotal: number;
}

function parseCart(value: unknown): Cart {
  if (!isRecord(value) || !isFiniteNumber(value.discountedTotal)) {
    throw new ApiError("Unexpected response format: invalid cart");
  }
  return { discountedTotal: value.discountedTotal };
}

export function parseCarts(data: unknown): Cart[] {
  if (!isRecord(data) || !Array.isArray(data.carts)) {
    throw new ApiError("Unexpected response format: missing carts");
  }
  return data.carts.map(parseCart);
}

export function summarize(carts: Cart[]): OrderSummary {
  const revenue = carts.reduce((sum, cart) => sum + cart.discountedTotal, 0);
  return {
    orders: carts.length,
    revenue,
    averageOrder: carts.length > 0 ? revenue / carts.length : 0,
  };
}

export async function fetchOrderSummary(signal: AbortSignal): Promise<OrderSummary> {
  const data = await getJson("/carts?limit=0", signal);
  return summarize(parseCarts(data));
}
