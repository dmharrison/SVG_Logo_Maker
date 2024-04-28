const SVG = require("./svg");
describe("SVG class", () => {
  it("should render SVG markup with the provided text, text color, shape color, and shape", () => {
    const tempShape = {
      render: () =>
        `<circle cx="100" cy="100" r="50" fill="blue" /><text x="100" y="100" text-anchor="middle" fill="white">DMH</text>`,
    };

    const svg = new SVG("DMH", "white", "blue");
    svg.setShape(tempShape);

    // Render the SVG markup
    const renderedSVG = svg.render();

    // Expected SVG markup based on provided data
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="50" fill="blue" /><text x="100" y="100" text-anchor="middle" fill="white">DMH</text></svg>`;
    // Assert that the rendered SVG markup matches the expected markup
    expect(renderedSVG).toEqual(expectedSVG);
  });

  it("should throw an error if shape is not set", () => {
    const svg = new SVG("hello", "white", "blue");

    // Calling render without setting the shape should throw an error
    expect(() => {
      svg.render();
    }).toThrow("Shape not set");
  });
});
