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
    return `<circle cx="100" cy="100" r="50" fill="${this.shapeColor}" /><text x="100" y="100" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeType, shapeColor) {
    super(text, textColor, shapeType, shapeColor);
  }

  render() {
    return `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" /><text x="100" y="130" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeType, shapeColor) {
    super(text, textColor, shapeType, shapeColor);
  }

  render() {
    return `<polygon points="100,50 150,150 50,150" fill="${this.shapeColor}" /><text x="100" y="130" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = { Circle, Triangle, Square };
