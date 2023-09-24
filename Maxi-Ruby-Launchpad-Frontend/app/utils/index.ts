// utils
import { isSSR } from "./ssr";

/**
 * Copies selected text to clipboard
 * @param text string that wanted to copy
 * @param cb callback function that runs after copied
 */
export function copyToClipboard(text: string, cb: () => void): void {
  if (isSSR() || !navigator) return;

  navigator.clipboard.writeText(text);
  typeof cb === "function" && cb();
}

/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param address full address to truncate
 * @returns truncated address
 */
export function truncate(address: string) {
  const ETH_ADDRESS_REGEX = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

  const match = address.match(ETH_ADDRESS_REGEX);
  if (!match) return address;

  return `${match[1]}…${match[2]}`;
}
