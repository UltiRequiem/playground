// deno-lint-ignore-file no-explicit-any
type InferArray<A extends any[]> = A extends (infer T)[] ? T : never;

type StringArray = InferArray<string[]>;
