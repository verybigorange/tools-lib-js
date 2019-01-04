var $$ = require("./index.js");

describe("Exp模块", () => {
  it("isEmail", () => {
    expect($$.isEmail("111")).toBe(false);
    expect($$.isEmail("449732828@qq.com")).toBe(true);
  });

  it("isPhone", () => {
    expect($$.isPhone("88770277")).toBe(false);
    expect($$.isPhone("17723319394")).toBe(true);
  });

  it("isIDCard", () => {
    // 18位
    expect($$.isIDCard("51018319930420001X")).toBe(true);
    // 15位
    expect($$.isIDCard("510183199304200")).toBe(true);
    expect($$.isIDCard("51018319930")).toBe(false);
  });

  it("isTel", () => {
    expect($$.isTel("88770277")).toBe(true);
    expect($$.isTel("028-88770277")).toBe(true);
  });

  it("isPostal", () => {
    expect($$.isPostal("611530")).toBe(true);
  });
});
