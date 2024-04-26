class Shapes {
  constructor(text, textColor, shape, fillColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.fillColor = fillColor;
  }
}

class Circle extends Shapes {
  constructor() {
    super(text, textColor, shape, fillColor);
  }
  render() {
    return `<circle cx="100" cy="100" r="50" fill="${this.fillColor}" />
                <text x="100" y="100" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}
