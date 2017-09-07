const NodeColorGradient = require('../dist/index');

let gradient = new NodeColorGradient([
  [63, 116, 212],
  [60, 125, 199],
  [55, 136, 228],
  [78, 161, 216],
  [83, 175, 202],
  [96, 202, 197],
  [127, 225, 221],
  [167, 239, 236],
  [203, 248, 247],
  [255, 255, 255],
  [253, 245, 234],
  [251, 231, 204],
  [246, 208, 158],
  [243, 179, 99],
  [240, 159, 96],
  [240, 141, 89],
  [239, 128, 88],
  [238, 115, 73],
  [237, 98, 59],
  [235, 62, 37]
]);

let strings = gradient.getGradient(100).map((col) => {
  return col.hsv().string();
});

console.log(strings);
