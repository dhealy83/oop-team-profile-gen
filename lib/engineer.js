const Employee = require("./employee");

class Engineers extends Employee {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.GitHub = GitHub;
    // const github = "@github.com";
  }
  getGitHub() {
    return this.GitHub;
  }
  getRole() {
    return "Engineers";
  }
}
module.exports = Engineers;
