class intern {
    constructor(name, email, id, school) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.school = school;

        if (typeof name !== "string" || name.length <= 0) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof email !== "string" || email.length <= 0) {
            throw new Error("Expected parameter 'email' to be a non-negative string");
        }

        if (typeof id !== "number" || isNaN(id) || id <= 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }

        if (typeof school !== "string" || school.length <= 0) {
            throw new Error("Expected parameter 'school' to be a non-negative string");
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
    getSchool() {
        console.log(`School: ${this.school}`);
    }
    getRole() {
        console.log(`Role: intern`);
    }
}

module.exports = intern;