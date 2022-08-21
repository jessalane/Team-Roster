class engineer {
    constructor(name, email, id, gitName) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.gitName = gitName;

        if (typeof name !== "string" || name.length <= 0) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof email !== "string" || email.length <= 0) {
            throw new Error("Expected parameter 'email' to be a non-negative string");
        }

        if (typeof id !== "number" || isNaN(id) || id <= 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }

        if (typeof gitName !== "string" || gitName.length <= 0) {
            throw new Error("Expected parameter 'gitName' to be a non-negative string");
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
    getGitHub() {
        console.log(`GitHub: ${this.gitName}`);
        console.log(`GitHubLink: https://github.com/${this.gitName}`)
    }
    getRole() {
        console.log(`Role: engineer`);
    }
}

module.exports = engineer;