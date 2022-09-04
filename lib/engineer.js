const Employee = require("./employee");

class Engineers extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    // const github = "@github.com";
  }
  getGitHub() {
    return this.github;
  }
  getRole() {
    return "Engineers";
  }
}
module.exports = Engineers;
