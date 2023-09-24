// types
import type { Result, CallParams } from "~/types/api.types";

class Api {
  private base = process.env.PUBLIC_BASE_URL;
  private access_token = process.env.PUBLIC_ACCESS_TOKEN;

  private prepare_headers(headers: HeadersInit, authorization: boolean) {
    const configuredHeader: HeadersInit = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Cache-Control": "max-age=604800",
      "Referrer-Policy": "origin-when-cross-origin",
      "X-Frame-Options": "deny",
      "X-Content-Type-Options": "nosniff",
      "X-XSS-Protection": "1; mode=block",
      ...headers,
      ...(authorization && { Authorization: this.access_token })
    };

    return configuredHeader;
  }

  public async call<T>(params: CallParams): Promise<Result<T>> {
    const data = await fetch(this.base + params.url, {
      method: params.method,
      headers: this.prepare_headers(params.headers, params.authorization || false),
      body: params.body
    })
      .then(async response => {
        if (!response.ok) {
          return { success: false, error: true, data: undefined };
        }

        return await response.json();
      })
      .catch((error: Error) => {
        return { success: false, error, data: undefined };
      });

    return { success: true, error: undefined, data };
  }
}

const api = new Api();
export { api };
