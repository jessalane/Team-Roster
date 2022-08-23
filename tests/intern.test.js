const intern = require("../assets/js/intern.js")

describe("employee", () => {
    describe('initialization', () => {
        it("should create an object with a name and age if provided valid arguments", () => {
            const Jane = new intern("intern", "Jane Doe", "email@domain.com", 1, "school");

            // Verify that the new object has the correct properties
            expect(Jane.name).toEqual("Jane Doe");
            expect(Jane.email).toEqual("email@domain.com");
            expect(Jane.id).toEqual(1);
        });

        it("the email contains @", () => {
            const Jon = new intern("intern", "Jon Doe", "email@domain.com", 1, "school");
            expect(Jon.email).toContain("@");
        });

        it("should throw an error if not provided an id#", () => {
            const noID = () => new intern("intern", "Emily Doe", "email@domain.com", "", "school");

            // Verify that the correct error was thrown when the callback is executed
            expect(noID).toThrow();
        });

        it("should throw an error if parameter 'email' is blank", () => {
            const noEmail = () => new intern("intern", "Emily Doe", "" , 1, "school");

            // Verify that the correct error was thrown when the callback is executed
            expect(noEmail).toThrow();
        });

        it("should throw an error if parameter 'school' is blank", () => {
            const noSchool = () => new intern("intern", "Emily Doe", "email@domain.com" , 1, "");

            // Verify that the correct error was thrown when the callback is executed
            expect(noSchool).toThrow();
        });

        it("should throw an error if 'name' is not a string", () => {
            const numName = () => new intern("intern", 3, "email@domain.com", 1, "school");

            expect(numName).toThrow();
        });

        it("should throw an error if 'school' is not a string", () => {
            const numSchool = () => new intern("intern", "Jane Doe", "email@domain.com", 1, 1);

            expect(numSchool).toThrow();
        });

        it("should throw an error if 'id' is not a number", () => {
            const idString = () => new intern("intern", "Jade Doe", "email@domain.com", '1');

            expect(idString).toThrow();
        });

        it("should throw an error if 'id' is less than 0", () => {
            const negID = () => new intern("intern", "Jane Doe", "email@domain.com", -1);

            expect(negID).toThrow();
        });
    });
});