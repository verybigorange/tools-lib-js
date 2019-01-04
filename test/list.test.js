var $$ = require("./index.js");
var diff = require("jest-diff");

describe("List模块", () => {
  it("$$toArray", () => {
    const arr = [1, 2, { a: 3 }];
    const copyarr = $$.of(arr).$$toArray();

    expect(copyarr).toEqual([1, 2, { a: 3 }]);

    copyarr[0] = 0;
    expect(copyarr).toEqual([0, 2, { a: 3 }]);
    expect(arr).toEqual([1, 2, { a: 3 }]);

    copyarr[2].a = "a";
    expect(copyarr).toEqual([0, 2, { a: "a" }]);
    expect(arr).toEqual([1, 2, { a: "a" }]);
  });

  it("$$toJS", () => {
    const arr = [1, 2, { a: 3 }];
    const copyarr = $$.of(arr).$$toJS();

    expect(copyarr).toEqual([1, 2, { a: 3 }]);

    copyarr[0] = 0;
    expect(copyarr).toEqual([0, 2, { a: 3 }]);
    expect(arr).toEqual([1, 2, { a: 3 }]);

    copyarr[2].a = "a";
    expect(copyarr).toEqual([0, 2, { a: "a" }]);
    expect(arr).toEqual([1, 2, { a: 3 }]);
  });

  it("$$get", () => {
    const val = $$.of([1, 2, 3]).$$get(1);
    expect(val).toBe(2);
  });

  it("$$set", () => {
    const val = $$.of([1, 2, 3])
      .$$set(1, "a")
      .$$toArray();
    expect(val).toEqual([1, "a", 3]);
  });

  it("$$pop", () => {
    const val = $$.of([1, 2, 3])
      .$$pop()
      .$$toArray();
    expect(val).toEqual([1, 2]);
  });

  it("$$delete", () => {
    const val = $$.of([1, 2, 3])
      .$$delete(1)
      .$$toArray();
    expect(val).toEqual([1, 3]);
  });

  it("$$shift", () => {
    const val = $$.of([1, 2, 3])
      .$$shift()
      .$$toArray();
    expect(val).toEqual([2, 3]);
  });

  it("$$push", () => {
    const val = $$.of([1, 2, 3])
      .$$push(4)
      .$$toArray();
    expect(val).toEqual([1, 2, 3, 4]);
  });

  it("$$insert", () => {
    const val = $$.of([1, 2, 3])
      .$$insert(1, 4)
      .$$toArray();
    expect(val).toEqual([1, 4, 2, 3]);
  });

  it("$$unshift", () => {
    const val = $$.of([1, 2, 3])
      .$$unshift(4)
      .$$toArray();
    expect(val).toEqual([4, 1, 2, 3]);
  });

  it("$$splice", () => {
    const val = $$.of([1, 2, 3])
      .$$splice(1, 1, "a", "b")
      .$$toArray();
    expect(val).toEqual([1, "a", "b", 3]);
  });

  it("$$reverse", () => {
    const val = $$.of([1, 2, 3])
      .$$reverse()
      .$$toArray();
    expect(val).toEqual([3, 2, 1]);
  });

  it("$$sort", () => {
    const val1 = $$.of([2, 1, 3])
      .$$sort()
      .$$toArray();
    const val2 = $$.of([2, 1, 3])
      .$$sort(function(a, b) {
        return b - a;
      })
      .$$toArray();
    const val3 = $$.of([2, 1, 3])
      .$$sort(function(a, b) {
        return a - b;
      })
      .$$toArray();
    expect(val1).toEqual([1, 2, 3]);
    expect(val2).toEqual([3, 2, 1]);
    expect(val3).toEqual([1, 2, 3]);
  });

  it("$$clear", () => {
    const val = $$.of([1, 2, 3])
      .$$clear()
      .$$toArray();
    expect(val).toEqual([]);
  });

  it("$$includes", () => {
    const val = $$.of([1, 2, 3]).$$includes(2);
    expect(val).toBe(true);
    expect($$.of([1, 2, 3]).$$includes(4)).toBe(false);
  });

  it("$$join", () => {
    expect($$.of([1, 2, 3]).$$join()).toBe("1,2,3");
    expect($$.of([1, 2, 3]).$$join(".")).toBe("1.2.3");
  });

  it("$$slice", () => {
    expect(
      $$.of([1, 2, 3])
        .$$slice()
        .$$toArray()
    ).toEqual([1, 2, 3]);
    expect(
      $$.of([1, 2, 3])
        .$$slice(1, 2)
        .$$toArray()
    ).toEqual([2]);
  });

  it("$$filter", () => {
    expect(
      $$.of([4, 2, 3])
        .$$filter(v => v % 2 === 0)
        .$$toArray()
    ).toEqual([4, 2]);
  });

  it("$$map", () => {
    expect(
      $$.of([1, 2, 3])
        .$$map(v => v * 2)
        .$$toArray()
    ).toEqual([2, 4, 6]);
  });

  it("$$every", () => {
    expect($$.of([1, 2, 3]).$$every(v => v > 0)).toBe(true);
    expect($$.of([1, 2, 3]).$$every(v => v > 2)).toBe(false);
  });

  it("$$some", () => {
    expect($$.of([1, 2, 3]).$$some(v => v > 2)).toBe(true);
    expect($$.of([1, 2, 3]).$$some(v => v > 4)).toBe(false);
  });

  it("$$reduce", () => {
    expect($$.of([1, 2, 3]).$$reduce((sum, item) => sum + item, 2)).toBe(8);
  });

  it("$$reduceRight", () => {
    expect($$.of([1, 2, 3]).$$reduceRight((sum, item) => sum + item, 2)).toBe(8);
  });
});
