class Shapes {
  constructor(text, textColor, shape, fillColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.fillColor = fillColor;
  }
}

class Circle extends Shapes {
  constructor(text, textColor, shape, fillColor) {
    super(text, textColor, shape, fillColor);
  }
  render() {
    return `<circle cx="100" cy="100" r="50" fill="${this.fillColor}" />
                <text x="100" y="100" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shape, fillColor) {
    super(text, textColor, shape, fillColor);
  }

  render() {
    return `<rect x="50" y="50" width="100" height="100" fill="${this.fillColor}" />
              <text x="100" y="130" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<polygon points="100,50 150,150 50,150" fill="${this.fillColor}" />
              <text x="100" y="130" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = { Circle, Triangle, Square };
