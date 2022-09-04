// Write functions to test for each of the following.
const Intern = require("../lib/intern");

describe("Intern", () => {
  it("Should return the interns name.", () => {
    const intName = "Marshall";

    const result = new Intern(intName, "", "");
    console.log(result);
    expect(result.getName()).toEqual(intName);
  });
});
// getSchool()
describe("school", () => {
  it("Should return interns school.", () => {
    const school = "school";

    const result = new Intern("", "", "", school);
    console.log(school);
    expect(result.getSchool()).toEqual(school);
  });
});
// getRole()—overridden to return 'Intern'
describe("role", () => {
  it("Should return the interns school.", () => {
    // Test value

    const result = new Intern("", "", "");

    expect(result.getRole()).toEqual("Intern");
  });
});
