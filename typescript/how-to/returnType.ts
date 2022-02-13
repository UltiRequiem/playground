// deno-lint-ignore-file no-explicit-any

type AnyFunction = (...args: any[]) => any;

type UltiReturnType<F extends AnyFunction> = F extends
  (...args: any[]) => infer R ? R : never;

type GimmeYourParameters<F extends AnyFunction> = F extends
  (...args: infer ArgTypes) => any ? ArgTypes : never;

function Sum(a: number, b: number) {
  return a + b;
}

type SumReturnType = UltiReturnType<typeof Sum>;

type SumParameters = GimmeYourParameters<typeof Sum>;

type myFunc = (hello: string) => number;

type hey = UltiReturnType<myFunc>;
