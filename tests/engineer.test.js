const engineer = require("../assets/js/engineer.js")

describe("employee", () => {
    describe('initialization', () => {
        it("should create an object with a name and age if provided valid arguments", () => {
            const Jane = new engineer("Jane Doe", "email@domain.com", 1, "gitName");

            // Verify that the new object has the correct properties
            expect(Jane.name).toEqual("Jane Doe");
            expect(Jane.email).toEqual("email@domain.com");
            expect(Jane.id).toEqual(1);
        });

        it("the email contains @", () => {
            const Jon = new engineer("Jon Doe", "email@domain.com", 1, "gitName");
            expect(Jon.email).toContain("@");
        });

        it("should throw an error if not provided an id#", () => {
            const noID = () => new engineer("Emily Doe", "email@domain.com", "", "gitName");

            // Verify that the correct error was thrown when the callback is executed
            expect(noID).toThrow();
        });

        it("should throw an error if parameter 'email' is blank", () => {
            const noEmail = () => new engineer("Emily Doe", "" , 1, "gitName");

            // Verify that the correct error was thrown when the callback is executed
            expect(noEmail).toThrow();
        });

        it("should throw an error if 'name' is not a string", () => {
            const numName = () => new engineer(3, "email@domain.com", 1, "gitName");

            expect(numName).toThrow();
        });

        it("should throw an error if 'gitName' is not a string", () => {
            const gitNum = () => new engineer("Jane Doe", "email@domain.com", 1, 1);

            expect(gitNum).toThrow();
        });

        it("should throw an error if parameter 'email' is blank", () => {
            const noGit = () => new engineer("Emily Doe", "email@domain.com" , 1, "");

            // Verify that the correct error was thrown when the callback is executed
            expect(noGit).toThrow();
        });

        it("should throw an error if 'id' is not a number", () => {
            const idString = () => new engineer("Jade Doe", "email@domain.com", "1", "gitName");

            expect(idString).toThrow();
        });

        it("should throw an error if 'id' is less than 0", () => {
            const negID = () => new engineer("Jane Doe", "email@domain.com", -1, "gitName");

            expect(negID).toThrow();
        });
    });
});