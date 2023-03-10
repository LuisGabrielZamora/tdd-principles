export function expect<T>(expected: T) {
  return {
    toBe(result: T) {
      if (result === expected) {
        console.log('OK')
      } else {
        throw new Error(`${result} is not equal to ${expected}`)
      }
    }
  }
}
