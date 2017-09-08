"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MathArray extends Array {
    constructor(...args) {
        super(...args);
    }
    fromArray(a) {
        return new MathArray(...a);
    }
    add(a) {
        if (this.length !== a.length) {
            throw new Error('Arrays must be of same length');
        }
        return this.map((number, index) => {
            return number + a[index];
        });
    }
    subtract(a) {
        if (this.length !== a.length) {
            throw new Error('Arrays must be of same length');
        }
        return this.map((number, index) => {
            return number - a[index];
        });
    }
    divide(a) {
        if (this.length !== a.length) {
            throw new Error('Arrays must be of same length');
        }
        return this.map((number, index) => {
            return number / a[index];
        });
    }
    multiply(a) {
        if (this.length !== a.length) {
            throw new Error('Arrays must be of same length');
        }
        return this.map((number, index) => {
            return number * a[index];
        });
    }
}
exports.default = MathArray;
//# sourceMappingURL=MathArray.js.map