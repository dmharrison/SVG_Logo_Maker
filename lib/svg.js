class SVG {
  constructor(text, textColor, shapeType) {
    this.text = text;
    this.textColor = textColor;
    this.shapeType = shapeType;
  }
  setText(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }
  setShape(Shape) {
    this.shape = shape;
  }
  render() {
    if (!this.shape) {
      throw new Error("Shape not set");
    }
    return `
    <svg width="200" height="200">
      ${this.shape.render()}
    </svg>
  `;
  }
}
module.exports = SVG;
