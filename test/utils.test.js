var $$ = require("./index.js");

describe("utils模块", () => {
  it("deepClone", () => {
    const obj = { a: 1, b: 2, c: [1, 2, 3] };
    const arr = [1, 2, [1, 2]];
    const cloneObj = $$.deepClone(obj);
    const cloneArr = $$.deepClone(arr);

    expect(obj === cloneObj).toBe(false);
    expect(obj.c === cloneObj.c).toBe(false);
    expect(arr === cloneArr).toBe(false);
    expect(arr[2] === cloneArr[2]).toBe(false);
  });

  it("observable", () => {
    const obj = { a: 1, b: 2 };
    const fn = jest.fn(() => true);
    const observer = $$.observable(obj).subscribe((newVal, key, value) => fn());
    observer.a = "a";
    observer.b = "b";
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
