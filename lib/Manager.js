const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, offNum) {
    super(name, id, email);
    this.officeNumber = offNum;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
