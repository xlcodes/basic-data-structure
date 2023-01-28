/* eslint-disable no-console */
export function sum(...args: number[]): number {
  console.log('test');
  return args.reduce((prev, total) => total + prev, 0);
}
