// Write functions to test for each of the following.
const Engineers = require("../lib/engineer");

describe("Employee", () => {
  it("Should return the engineers name.", () => {
    const engName = "Steven";

    const result = new Engineers(engName, "", "");
    console.log(result);
    expect(result.getName()).toEqual(engName);
  });
});

// * `getGithub()`
describe("github", () => {
  it("Should return the engineers GitHub address.", () => {
    const github = "github.com";

    const result = new Engineers("", "", "", github);
    console.log(result);
    expect(result.getGitHub()).toEqual(github);
  });
});

// * `getRole()`&mdash;overridden to return `'Engineer'`
describe("role", () => {
  it("Should return the engineers role.", () => {
    // Test value

    const result = new Engineers("", "", "");

    expect(result.getRole()).toEqual("Engineers");
  });
});
