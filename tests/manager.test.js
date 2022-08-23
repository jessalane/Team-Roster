const manager = require("../assets/js/manager.js")

describe("employee", () => {
    describe('initialization', () => {
        it("should create an object with a name and age if provided valid arguments", () => {
            const Jane = new manager("intern", "Jane Doe", "email@domain.com", 1, 1);

            // Verify that the new object has the correct properties
            expect(Jane.name).toEqual("Jane Doe");
            expect(Jane.email).toEqual("email@domain.com");
            expect(Jane.id).toEqual(1);
            expect(Jane.officeNum).toEqual(1);
        });

        it("the email contains @", () => {
            const Jon = new manager("intern", "Jon Doe", "email@domain.com", 1, 1);
            expect(Jon.email).toContain("@");
        });

        it("should throw an error if not provided an id#", () => {
            const noID = () => new manager("intern", "Emily Doe", "email@domain.com", "", 1);

            // Verify that the correct error was thrown when the callback is executed
            expect(noID).toThrow();
        });

        it("should throw an error if not provided an office#", () => {
            const noOfficeNum = () => new manager("intern", "Emily Doe", "email@domain.com", 1, "");

           // Verify that the correct error was thrown when the callback is executed
            expect(noOfficeNum).toThrow();
        });


        it("should throw an error if parameter 'email' is blank", () => {
            const noEmail = () => new manager("intern", "Emily Doe", "" , 1, 1);

            // Verify that the correct error was thrown when the callback is executed
            expect(noEmail).toThrow();
        });

        it("should throw an error if 'name' is not a string", () => {
            const numName = () => new manager("intern", 3, "email@domain.com", 1, 1);

            expect(numName).toThrow();
        });

        it("should throw an error if 'id' is not a number", () => {
            const idString = () => new manager("intern", "Jade Doe", "email@domain.com", '1', 1);

            expect(idString).toThrow();
        });

        it("should throw an error if 'officeNum' is not a number", () => {
            const officeString = () => new manager("intern", "Jade Doe", "email@domain.com", 1, "1");

            expect(officeString).toThrow();
        });

        it("should throw an error if 'id' is less than 0", () => {
            const negID = () => new manager("intern", "Jane Doe", "email@domain.com", -1, 1);

            expect(negID).toThrow();
        });
    });
});