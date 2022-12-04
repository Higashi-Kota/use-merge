import { z } from "zod";
import { flatten, unflatten } from "flat";
import { mergeDeepWith } from "ramda";

const record = z.record(z.any());
type Record = z.infer<typeof record>;

const useMerge = () => {
  const merge = (...objects: Record[]): Record => {
    const result = objects.reduce((acc: Record, cur: Record) => {
      return mergeDeepWith(
        (x, y) => {
          if (x) return x;
          if (y) return y;
          return null;
        },
        flatten(acc),
        flatten(cur)
      );
    }, {});
    return unflatten(result);
  };

  return {
    merge,
  };
};
export { useMerge };
