class SVG {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  setText(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }
  setShape(shape) {
    this.shape = shape;
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  render() {
    if (!this.shape) {
      throw new Error("Shape not set");
    }
    return `
    <svg width="300" height="200">
      ${this.shape.render()}
    </svg>
  `;
  }
}
module.exports = SVG;
