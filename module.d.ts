/* eslint-disable */

// region type
// Dictionary type
interface Dictionary<T> {
  [K: string]: T;
}

// Nullable type
type Nullable<T> = T | null | undefined;

// Deep Readonly
type DeepReadonly<T> =
  T extends (infer R)[] ? DeepReadonlyArray<R> :
    T extends Function ? T :
      T extends object ? DeepReadonlyObject<T> :
        T;

interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {
}

type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

//endregion

// Window variables
interface Window {
  // adbrix web sdk
  adbrix: any;
  adbrix_core: any;
}

