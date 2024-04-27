const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");
const { join } = require("path");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "enter text for the logo. (Must not be more than 3 characters.)",
          validate: (text) =>
            text.length <= 3 ||
            "The message must not contain more than 3 characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter a text color",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a shape color",
        },
      ])
      .then(({ text, textColor, shapeType, shapeColor }) => {
        let shape;
        switch (shapeType) {
          case "circle":
            shape = new Circle(text, textColor, shapeType, shapeColor);
            break;

          case "square":
            shape = new Square(text, textColor, shapeType, shapeColor);
            break;

          case "triangle":
            shape = new Triangle(text, textColor, shapeType, shapeColor);
            break;
        }

        const svg = new SVG(text, textColor, shapeType);
        svg.setText(text, textColor);
        svg.setShape(shape);
        const fileName = `${shapeType}_Logo.svg`;
        const filePath = join(__dirname, "..", "examples", fileName);
        return writeFile(filePath, svg.render());
      })
      .then(() => console.log("Logo.svg file create successfully"))
      .catch((err) => console.error("Error", err));
  }
}
module.exports = CLI;
