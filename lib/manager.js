const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, Office_Number) {
    super(name, id, email);
    this.Office_Number = Office_Number;
  }
  getOfficeNumber() {
    return this.Office_Number;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
