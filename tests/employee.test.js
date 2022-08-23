const employee = require("../assets/js/employee.js")

describe("employee", () => {
    describe('initialization', () => {
        it("should create an object with a name and age if provided valid arguments", () => {
            const Jane = new employee("employee", "Jane Doe", "email@domain.com", 1);

            // Verify that the new object has the correct properties
            expect(Jane.name).toEqual("Jane Doe");
            expect(Jane.email).toEqual("email@domain.com");
            expect(Jane.id).toEqual(1);
        });

        it("the email contains @", () => {
            const Jon = new employee("employee", "Jon Doe", "email@domain.com", 1);
            expect(Jon.email).toContain("@");
        });

        it("should throw an error if not provided an id#", () => {
            const noID = () => new employee("employee", "Emily Doe", "email@domain.com");

            // Verify that the correct error was thrown when the callback is executed
            expect(noID).toThrow();
        });

        it("should throw an error if parameter 'email' is blank", () => {
            const noEmail = () => new employee("employee", "Emily Doe", "" , 1);

            // Verify that the correct error was thrown when the callback is executed
            expect(noEmail).toThrow();
        });

        it("should throw an error if 'name' is not a string", () => {
            const numName = () => new employee("employee", 3, "email@domain.com", 1);

            expect(numName).toThrow();
        });

        it("should throw an error if 'id' is not a number", () => {
            const idString = () => new employee("employee", "Jade Doe", "email@domain.com", '1');

            expect(idString).toThrow();
        });

        it("should throw an error if 'id' is less than 0", () => {
            const negID = () => new employee("employee", "Jane Doe", "email@domain.com", -1);

            expect(negID).toThrow();
        });
    });
});