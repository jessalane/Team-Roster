class manager {
    constructor(role, name, email, id, officeNum) {
        this.role = role;
        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNum = officeNum;

        if (typeof name !== "string" || name.length <= 0) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof email !== "string" || email.length <= 0) {
            throw new Error("Expected parameter 'email' to be a non-negative string");
        }

        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }

        if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum <= 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }

        else {
            return this;
        }

    }

    getName() {
        console.log(`Name: ${this.name}`);
    }
    getId() {
        console.log(`ID#: ${this.id}`);
    }
    getEmail() {
        console.log(`Email: ${this.email}`);
    }
    getRole() {
        console.log(`Role: ${this.role}`);
    }
}

module.exports = manager;