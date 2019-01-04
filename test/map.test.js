var $$ = require("./index.js");
var diff = require("jest-diff");

describe("Map模块", () => {
  it("$$toObject", () => {
    const obj = { a: 1, b: 2, c: { cc: "3" } };
    const copyobj = $$.of(obj).$$toObject();

    expect(copyobj).toEqual({ a: 1, b: 2, c: { cc: "3" } });

    copyobj.a = "a";
    copyobj.c.cc = "cc";
    expect(copyobj).toEqual({ a: "a", b: 2, c: { cc: "cc" } });
    expect(obj).toEqual({ a: 1, b: 2, c: { cc: "cc" } });
  });

  it("$$toJS", () => {
    const obj = { a: 1, b: 2, c: { cc: "3" } };
    const copyobj = $$.of(obj).$$toJS();

    expect(copyobj).toEqual({ a: 1, b: 2, c: { cc: "3" } });

    copyobj.a = "a";
    copyobj.c.cc = "cc";
    expect(copyobj).toEqual({ a: "a", b: 2, c: { cc: "cc" } });
    expect(obj).toEqual({ a: 1, b: 2, c: { cc: "3" } });
  });

  it("size", () => {
    expect($$.of({ a: 1, b: 2, c: 3 }).size).toBe(3);
  });

  it("$$get", () => {
    expect($$.of({ a: 1, b: 2, c: 3 }).$$get("b")).toBe(2);
  });

  it("$$set", () => {
    expect(
      $$.of({ a: 1, b: 2 })
        .$$set("a", 0)
        .$$toObject()
    ).toEqual({ a: 0, b: 2 });
  });

  it("$$delete", () => {
    expect(
      $$.of({ a: 1, b: 2, c: 3 })
        .$$delete("a")
        .$$toObject()
    ).toEqual({ b: 2, c: 3 });
  });

  it("$$deleteAll", () => {
    expect(
      $$.of({ a: 1, b: 2, c: 3 })
        .$$deleteAll(["a", "b"])
        .$$toObject()
    ).toEqual({ c: 3 });
  });

  it("$$clear", () => {
    expect(
      $$.of({ a: 1, b: 2, c: 3 })
        .$$clear()
        .$$toObject()
    ).toEqual({});
  });

  it("$$merge", () => {
    expect(
      $$.of({ a: 1, b: 2, c: 3 })
        .$$merge({ c: 4, d: 5 })
        .$$toObject()
    ).toEqual({ a: 1, b: 2, c: 4, d: 5 });
  });

  it("$$map", () => {
    expect(
      $$.of({ a: 1, b: 2, c: 3 })
        .$$map(v => v * 2)
        .$$toObject()
    ).toEqual({ a: 2, b: 4, c: 6 });
  });

  it("$$filter", () => {
    expect(
      $$.of({ a: 1, b: 2, c: 3 })
        .$$filter(v => v > 1)
        .$$toObject()
    ).toEqual({ b: 2, c: 3 });
  });

  it("$$has", () => {
    expect($$.of({ a: 1, b: 2, c: 3 }).$$has("a")).toBe(true);
    expect($$.of({ a: 1, b: 2, c: 3 }).$$has("d")).toBe(false);
  });
});
