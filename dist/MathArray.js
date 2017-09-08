"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MathArray extends Array {
    constructor(...args) {
        super(...args);
    }
    add(a) {
        let isArray = Array.isArray(a);
        if (isArray && this.length !== a.length) {
            throw new Error(`Arrays must be of same length (${this.length}, ${a.length})`);
        }
        return this.map((number, index) => {
            if (isArray) {
                return number + a[index];
            }
            else {
                return number + a;
            }
        });
    }
    subtract(a) {
        let isArray = Array.isArray(a);
        if (isArray && this.length !== a.length) {
            throw new Error(`Arrays must be of same length (${this.length}, ${a.length})`);
        }
        return this.map((number, index) => {
            if (isArray) {
                return number - a[index];
            }
            else {
                return number - a;
            }
        });
    }
    divide(a) {
        let isArray = Array.isArray(a);
        if (isArray && this.length !== a.length) {
            throw new Error(`Arrays must be of same length (${this.length}, ${a.length})`);
        }
        return this.map((number, index) => {
            if (isArray) {
                return number / a[index];
            }
            else {
                return number / a;
            }
        });
    }
    multiply(a) {
        let isArray = Array.isArray(a);
        if (isArray && this.length !== a.length) {
            throw new Error(`Arrays must be of same length (${this.length}, ${a.length})`);
        }
        return this.map((number, index) => {
            if (isArray) {
                return number * a[index];
            }
            else {
                return number * a;
            }
        });
    }
}
exports.default = MathArray;
//# sourceMappingURL=MathArray.js.map