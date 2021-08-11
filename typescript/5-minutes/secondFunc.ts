const wrapInArray = (obj: string | string[]) =>
  typeof obj === 'string' ? [obj] : obj

console.log(wrapInArray('Hello!'))
