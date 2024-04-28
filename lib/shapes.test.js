const { Circle, Triangle, Square } = require("./shapes");

describe("Circle class", () => {
  it("should render a square with the given color", () => {
    const shape = new Circle();
    shape.setColor("blue");
    const renderedSVG = shape.render();
    expect(renderedSVG).toEqual(
      `<circle cx="100" cy="100" r="50" fill="blue" />`
    );
  });
});

describe("Square class", () => {
  it("should render a square with the given color", () => {
    const shape = new Square();
    shape.setColor("blue");
    const renderedSVG = shape.render();
    expect(renderedSVG).toEqual(
      `<rect x="50" y="50" width="100" height="100" fill="blue" />`
    );
  });
});

describe("Triangle class", () => {
  it("should render a triangle with the given color", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    const renderedSVG = shape.render();
    expect(renderedSVG).toEqual(
      '<polygon points="150,18 244,182 56,182" fill="blue" />'
    );
  });
});
