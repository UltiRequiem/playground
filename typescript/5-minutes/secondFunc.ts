function wrapInArray(obj: string | string[]) {
  return typeof obj === 'string' ? [obj] : obj
}

console.log(wrapInArray('Hello!'))
console.log(wrapInArray(['1', '2']))
