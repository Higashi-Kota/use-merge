const { useMerge } = require("../dist");

const { merge } = useMerge();

const obj1 = {
  a: null,
  b: "BBB",
  c: {
    "c-1": "CCC",
  },
  d: {
    "d-1": null,
    "d-2": null,
    "d-3": null,
  },
};
const obj2 = {
  a: "AAA",
  b: null,
  c: {
    "c-1": null,
  },
  d: {
    "d-1": null,
    "d-2": "DDD-2",
    "d-3": null,
  },
};

const obj3 = {
  d: {
    "d-1": "DDD-1",
    "d-3": "DDD-3",
  },
};

console.log(merge(obj1, obj2, obj3));

// This is output.
// {
//   a: 'AAA',
//   b: 'BBB',
//   c: { 'c-1': 'CCC' },
//   d: { 'd-1': 'DDD-1', 'd-2': 'DDD-2', 'd-3': 'DDD-3' }
// }