type IsNumerical<S extends string> = S extends `${bigint}` ? true : false;

type T0 = IsNumerical<"123">; // true
type T1 = IsNumerical<"123.34">; // false
type T4 = IsNumerical<"Hey">; // false
