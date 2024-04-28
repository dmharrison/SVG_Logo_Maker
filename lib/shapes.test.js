const { Circle, Triangle, Square } = require("./shapes");

describe("Circle ", () => {
  it("should render a square with the given color,text, and text color", () => {
    const text = "DMH";
    const textColor = "white";
    const shape = new Circle(text, textColor);
    shape.setColor("blue");
    const renderedSVG = shape.render();
    expect(renderedSVG).toEqual(
      `<circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="110" text-anchor="middle" fill="white">DMH</text>`
    );
  });
});

describe("Square ", () => {
  it("should render a square with the given color,text, and text color", () => {
    const text = "DMH";
    const textColor = "white";
    const shape = new Square(text, textColor);
    shape.setColor("blue");
    const renderedSVG = shape.render();
    expect(renderedSVG).toEqual(
      `<rect x="50" y="50" width="200" height="200" fill="blue" /><text x="150" y="130" text-anchor="middle" fill="white">DMH</text>`
    );
  });
});

describe("Triangle ", () => {
  it("should render a triangle with the given color,text, and text color", () => {
    const text = "DMH";
    const textColor = "white";
    const shape = new Triangle(text, textColor);
    shape.setColor("blue");
    const renderedSVG = shape.render();
    expect(renderedSVG).toEqual(
      `<polygon points="150,18 244,182 56,182" fill="blue" /><text x="150" y="120" text-anchor="middle" fill="white">DMH</text>`
    );
  });
});
