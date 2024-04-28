class Shape {
  constructor(text, textColor, shapeType, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeType = shapeType;
    this.shapeColor = shapeColor;
  }
  setColor(color) {
    this.shapeColor = color;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeType, shapeColor) {
    super(text, textColor, shapeType, shapeColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="110" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeType, shapeColor) {
    super(text, textColor, shapeType, shapeColor);
  }

  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" /><text x="150" y="130" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeType, shapeColor) {
    super(text, textColor, shapeType, shapeColor);
  }

  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.shapeColor}" /><text x="150" y="120" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = { Circle, Triangle, Square };
