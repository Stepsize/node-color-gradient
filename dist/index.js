"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Color = require("color");
const MathArray_1 = require("./MathArray");
class NodeColorGradient {
    constructor(colors) {
        this.colors = colors.map((step) => {
            return Color.rgb(step).hsv();
        });
        this.differences = this.calculateDifferences();
    }
    calculateDifferences() {
        return Array.from(Array(this.colors.length - 1)).map((color, intervalIndex) => {
            return this.colors[intervalIndex].color.map((val, index) => {
                return this.colors[intervalIndex + 1].color[index] - val;
            });
        });
    }
    calculateIncrements(steps) {
        const stopsPerColor = steps / (this.colors.length - 1);
        return this.differences.map((difference) => {
            return new MathArray_1.default(...difference).divide(stopsPerColor);
        });
    }
    calculateStopsForIndex(baseIndex, steps, totalSteps) {
        if (!totalSteps) {
            totalSteps = steps;
        }
        const baseMatrix = new MathArray_1.default(...this.colors[baseIndex].color);
        let stops = [];
        const increments = this.calculateIncrements(totalSteps);
        for (let i = 0; i < steps; i++) {
            const multiplier = new MathArray_1.default(...[i + 1, i + 1, i + 1]);
            const increment = new MathArray_1.default(...increments[baseIndex]);
            const a = baseMatrix;
            const b = multiplier.multiply(increment);
            const stop = a.add(b);
            stops.push(stop);
        }
        return stops;
    }
    getGradient(totalSteps) {
        let stops = [];
        const iterations = this.colors.length - 1;
        const stopsPerColor = totalSteps / iterations;
        for (let i = 0; i < iterations; i++) {
            let newStops;
            if (i === 0) {
                newStops = this.calculateStopsForIndex(i, stopsPerColor, totalSteps);
            }
            else {
                newStops = this.calculateStopsForIndex(i, stopsPerColor, totalSteps);
                newStops.shift();
            }
            stops = stops.concat(newStops);
        }
        return stops.map((stop) => {
            return Color.hsv(stop);
        });
    }
    getStop(totalSteps, stop) {
        return this.getGradient(totalSteps)[stop];
    }
}
exports.default = NodeColorGradient;
module.exports = NodeColorGradient;
//# sourceMappingURL=index.js.map