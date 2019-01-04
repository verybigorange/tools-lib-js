var $$ = require('./index.js');

describe("type模块", () => {
  it("isObject", () => {
    expect($$.isObject(111)).toBe(false);
    expect($$.isObject(function() {})).toBe(false);
    expect($$.isObject({})).toBe(true);
  });

  it("isArray", () => {
    expect($$.isArray([1,2,3])).toBe(true);
  });

  it("isString", () => {
    expect($$.isString("a")).toBe(true);
  });

  it("isNumber", () => {
    expect($$.isNumber(1)).toBe(true);
    expect($$.isNumber('1')).toBe(false);
  });

  it("isBoolean", () => {
    expect($$.isBoolean(0)).toBe(false);
    expect($$.isBoolean(true)).toBe(true);
  });

  it("isFunction", () => {
    expect($$.isFunction(function(){})).toBe(true);
  });

  it("isEmptyObject", () => {
    expect($$.isEmptyObject({})).toBe(true);
    expect($$.isEmptyObject({a:1})).toBe(false);
  });

  it("isNull", () => {
    expect($$.isNull(false)).toBe(false);
    expect($$.isNull(null)).toBe(true);
  });

  it("isUndefined", () => {
    expect($$.isUndefined(undefined)).toBe(true);
    expect($$.isUndefined("undefined")).toBe(false);
  });
});
