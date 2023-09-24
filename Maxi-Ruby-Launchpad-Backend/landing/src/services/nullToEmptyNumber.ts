export function nullToEmptyNumber(value: any) {
  return value == null ? 1 : Number(value);
}
