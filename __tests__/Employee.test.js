// write function to test for the following.
const Employee = require("../lib/employee");

describe("Employee", () => {
  it("Should return the employee name.", () => {
    const empName = "David";

    const result = new Employee(empName, "", "");
    console.log(result);
    expect(result.getName()).toBe(empName);
  });
});

// * `getId()`
describe("id", () => {
  it("Should return the employee Id.", () => {
    // Test value
    const empId = "001";

    const result = new Employee("", empId, "");

    expect(result.getId()).toEqual(empId);
  });
});

// * `getEmail()`
describe("email", () => {
  it("Should return the employee email.", () => {
    // Test value
    const empEmail = "david@gmail.com";

    const result = new Employee("", "", empEmail);

    expect(result.getEmail()).toEqual(empEmail);
  });
});
// * `getRole()`&mdash;returns `'Employee'`
describe("role", () => {
  it("Should return the employee role.", () => {
    // Test value

    const result = new Employee("", "", "");

    expect(result.getRole()).toEqual("Employee");
  });
});
