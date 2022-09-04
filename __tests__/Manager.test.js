const Manager = require("../lib/manager.js");

describe("Manager", () => {
  it("Should return the managers office number.", () => {
    // Test value
    const officeNumber = "OF001";

    const result = new Manager("", "", "", officeNumber);
    console.log(result);
    expect(result.getOfficeNumber()).toBe(officeNumber);
  });
});
describe("role", () => {
  it("Should return the manager role.", () => {
    // Test value

    const result = new Manager("", "", "");

    expect(result.getRole()).toEqual("Manager");
  });
});
