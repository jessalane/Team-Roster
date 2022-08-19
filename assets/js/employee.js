function employee(name, email, id) {
    if (typeof name !== "string" || name.length <= 0) {
        throw new Error("Expected parameter 'name' to be a non-empty string");
    }

    if (typeof email !== "string" || email.length <= 0) {
        throw new Error("Expected parameter 'email' to be a non-negative string");
    }

    if (typeof id !== "number" || isNaN(id) || id <= 0) {
        throw new Error("Expected parameter 'id' to be a non-negative number");
    }

    this.name = name;
    this.email = email;
    this.id = id;
}

// getName() {
//     console.log(`Name: ${this.name}`);
// }
// getId() {
//     console.log(`ID#: ${this.id}`);
// }
// getEmail() {
//     console.log(`Email: ${this.email}`);
// }
// getRole() {
//     console.log(`Role: employee`);
// }

module.exports = employee;