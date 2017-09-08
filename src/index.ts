import * as Color from 'color';

import MathArray from './MathArray';

class NodeColorGradient {

  colors: Color[];
  differences: number[];

  constructor(colors: Array<number[]>) {
    this.colors = colors.map((step: number[]) => {
      return Color.rgb(step).hsv();
    });

    this.differences = this.calculateDifferences();
  }

  private calculateDifferences() {
    return Array.from(Array(this.colors.length - 1)).map((color, intervalIndex) => {
      return this.colors[intervalIndex].color.map((val, index) => {
        return this.colors[intervalIndex + 1].color[index] - val;
      });
    });
  }

  private calculateIncrements(steps: number){
    const stopsPerColor = steps / (this.colors.length - 1);
    return this.differences.map((difference) => {
      return new MathArray(...difference).divide(stopsPerColor);
    });
  }

  private calculateStopsForIndex(baseIndex: number, steps: number, totalSteps?: number){
    if(!totalSteps){
      totalSteps = steps;
    }
    const baseMatrix = new MathArray(...this.colors[baseIndex].color);
    let stops : Array<number[]> = [];
    const increments = this.calculateIncrements(totalSteps);
    for (let i = 0; i < steps; i++) {
      const multiplier = new MathArray(...[i+1,i+1,i+1]);
      const increment = new MathArray(...increments[baseIndex]);
      const a = baseMatrix;
      const b = multiplier.multiply(increment);
      const stop = a.add(b);
      stops.push(stop);
    }
    return stops;
  }

  public getGradient(totalSteps: number) : Array<Color> {
    let stops : Array<number[]> = [];
    const iterations = this.colors.length - 1;
    const stopsPerColor = totalSteps / iterations;
    for (let i = 0; i < iterations; i++) {
      let newStops;
      if(i === 0){
        newStops = this.calculateStopsForIndex(i, stopsPerColor, totalSteps);
      } else {
        newStops = this.calculateStopsForIndex(i, stopsPerColor, totalSteps);
        newStops.shift();
      }
      stops = stops.concat(newStops);
    }
    return stops.map((stop) => {
      return Color.hsv(stop)
    });
  }

  public getStop(totalSteps: number, stop: number) : Color {
    return this.getGradient(totalSteps)[stop];
  }

}
export default NodeColorGradient

module.exports = NodeColorGradient;
