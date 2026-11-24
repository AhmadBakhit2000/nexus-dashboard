export class ApiError extends Error {
  readonly status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "https://dummyjson.com";

export async function getJson(path: string, signal?: AbortSignal): Promise<unknown> {
  let response: Response;
  try {
    response = await fetch(`${BASE_URL}${path}`, { signal });
  } catch (error) {
    if (signal?.aborted) throw error;
    throw new ApiError("Network error: the server could not be reached");
  }
  if (!response.ok) throw new ApiError(`Request failed with status ${response.status}`, response.status);
  try {
    return await response.json();
  } catch {
    throw new ApiError("The server returned an invalid JSON response");
  }
}

export const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export const isFiniteNumber = (value: unknown): value is number =>
  typeof value === "number" && Number.isFinite(value);
