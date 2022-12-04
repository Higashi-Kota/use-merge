"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMerge = void 0;
const zod_1 = require("zod");
const flat_1 = require("flat");
const ramda_1 = require("ramda");
const record = zod_1.z.record(zod_1.z.any());
const useMerge = () => {
    const merge = (...objects) => {
        const result = objects.reduce((acc, cur) => {
            return (0, ramda_1.mergeDeepWith)((x, y) => {
                if (x)
                    return x;
                if (y)
                    return y;
                return null;
            }, (0, flat_1.flatten)(acc), (0, flat_1.flatten)(cur));
        }, {});
        return (0, flat_1.unflatten)(result);
    };
    return {
        merge,
    };
};
exports.useMerge = useMerge;
//# sourceMappingURL=index.js.map