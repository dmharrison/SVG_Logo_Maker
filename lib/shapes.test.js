const { Circle, Triangle, Square } = require("./shapes");

describe("Circle class", () => {
  it("should render a square with the given color,text, and text color", () => {
    const text = "DMH";
    const textColor = "white";
    const shape = new Circle(text, textColor);
    shape.setColor("blue");
    const renderedSVG = shape.render();
    expect(renderedSVG).toEqual(
      `<circle cx="100" cy="100" r="50" fill="blue" /><text x="100" y="100" text-anchor="middle" fill="white">DMH</text>`
    );
  });
});

describe("Square class", () => {
  it("should render a square with the given color,text, and text color", () => {
    const text = "DMH";
    const textColor = "white";
    const shape = new Square(text, textColor);
    shape.setColor("blue");
    const renderedSVG = shape.render();
    expect(renderedSVG).toEqual(
      `<rect x="50" y="50" width="100" height="100" fill="blue" /><text x="100" y="130" text-anchor="middle" fill="white">DMH</text>`
    );
  });
});

describe("Triangle class", () => {
  it("should render a triangle with the given color,text, and text color", () => {
    const text = "DMH";
    const textColor = "white";
    const shape = new Triangle(text, textColor);
    shape.setColor("blue");
    const renderedSVG = shape.render();
    expect(renderedSVG).toEqual(
      `<polygon points="100,50 150,150 50,150" fill="blue" /><text x="100" y="130" text-anchor="middle" fill="white">DMH</text>`
    );
  });
});
