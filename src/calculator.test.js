import { calculator } from "./calculator";

test("calculator add function", () => {
    expect(calculator.add(12, 5)).toBe(17);
});

test("calculator subtract function", () => {
    expect(calculator.subtract(50, 34)).toBe(16);
});

test("calculator multiply function", () => {
    expect(calculator.multiply(3, 5)).toBe(15);
});

test("calculator divide function", () => {
    expect(calculator.divide(16, 4)).toBe(4);
});

test("calculator divide by 0", () => {
    expect(calculator.divide(5, 0)).toBe(null);
});
