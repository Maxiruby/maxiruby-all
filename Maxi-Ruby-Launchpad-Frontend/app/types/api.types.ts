export type Result<T> =
  | { success: true; error: undefined; data: T }
  | { success: false; error: Error; data: undefined };

export type CallParams = {
  url: string;
  method: "GET" | "POST" | "UPDATE" | "PATCH" | "DELETE";
  headers: HeadersInit;
  body: any;
  authorization?: boolean;
};
