function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') {
    return [obj];
  } 
    return obj;
  
}

console.log(wrapInArray('Hello!'))
