export const delayPromise = (timer: number = 1000) =>
  new Promise<void>(resolve => setTimeout(() => resolve(), timer))
