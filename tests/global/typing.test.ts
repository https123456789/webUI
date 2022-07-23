const { isA } = require("../../src/global/typing");

class DummyClass1 {}
class DummyClass2 extends DummyClass1 {}
class DummyClass3 {}

describe("isA", () => {
    let do1 = new DummyClass1;
    let do2 = new DummyClass2;
    let do3 = new DummyClass3;
    test("returns true if both inputs are of same type", () => {
        expect(isA(do1, DummyClass1)).toBeTruthy();
        expect(isA(do2, DummyClass2)).toBeTruthy();
        expect(isA(do2, DummyClass1)).toBeTruthy();
        expect(isA(do3, DummyClass3)).toBeTruthy();
    });
    test("returns false if both inputs are not of the same type", () => {
        expect(isA(do1, DummyClass2)).toBeFalsy();
        expect(isA(do2, DummyClass3)).toBeFalsy();
        expect(isA(do3, DummyClass1)).toBeFalsy();
    });
})