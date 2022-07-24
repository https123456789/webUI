import errors from "../../src/errors/errors";

const tfn = () => {

}

describe("Errors", () => {
    test("WrongTypeError", () => {
        let e = new errors.WrongTypeError(tfn, Array, Function);
        expect(`${tfn} only accepts instances of type ${Array}. Recived object  of class ${Function.constructor.name}` == e.message).toBeTruthy();
    });
});