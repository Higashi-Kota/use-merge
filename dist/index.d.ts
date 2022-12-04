type ObjectLiteral = {
  [x: string]: any;
};

declare module "@nap5/use-merge" {
  export function useMerge() {
    return {
      merge: function merge(...objects: ObjectLiteral[]): ObjectLiteral {},
    };
  }
}