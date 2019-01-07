var $$ = require("./index.js");

describe("BinaryString 模块", () => {
    it("new BinaryString", () => {
        const s = $$.BinaryString('Hello world!')
        const s1 = $$.BinaryString(s, 'UTF-16')
        expect(s.valueOf()).toBe('Hello world!')
        expect(s.valueOf()).toEqual(s.toString())
        expect(s.buffer.byteLength).toBe(12)
        expect(s1.buffer.byteLength).toBe(24)  
    })

    it("make from base64", () => {
        const s = $$.BinaryString.makeFromBase64('SGVsbG8gd29ybGQh');
        expect(s.valueOf()).toBe('Hello world!')
    })

    it("makeIndex && subview", () => {
        const s = $$.BinaryString.makeFromBase64("5Lit5paHIGVzcGHDsW9sIEVuZ2xpc2gg4KS54KS/4KSo4KWN4KSm4KWAINin2YTYudix2KjZitipIHBvcnR1Z3XDqnMg4Kas4Ka+4KaC4Kay4Ka+INGA0YPRgdGB0LrQuNC5IOaXpeacrOiqniDgqKrgqbDgqJzgqL7gqKzgqY==");
        const subview1 = s.subview(19,6);
        const idxStart = s.makeIndex(19);
        const idxEnd = s.makeIndex(6, idxStart);
        const subview2 = $$.BinaryString(s.rawData.subarray(idxStart, idxEnd), 'UTF-8');
        expect(subview1.valueOf()).toEqual(subview2.valueOf());
    })

    it("to base64", () => {
        const s = $$.BinaryString('\u6432\u6432\u6432\u6432')
        expect($$.BinaryString.makeFromBase64(s.toBase64()).valueOf()).toBe("搲搲搲搲");
    })

    it("subview", () => {
        const s1 = $$.BinaryString("Hello world!")
        const s2 = s1.subview(3,7);
        expect(s2.valueOf()).toBe("lo worl");
    })

    it("forEachCahr", () => {
        function myCallBack(charCode, characterOffset, rawOffset /*, rawDataArray */) {
            this[rawOffset] = String.fromCharCode(charCode);
        }
        const charArray = [];
        $$.BinaryString('\u4367\uD889\uDE54\u4343\u5431').forEachChar(myCallBack, charArray);
        expect(charArray.join('')).toBe("䍧𲙔䍃吱");
    })

    it("bytesToBase64 && base64ToBytes", () => {
        expect($$.BinaryString.bytesToBase64([72,101,108,108,111,32,119,111,114,108,100,33])).toBe("SGVsbG8gd29ybGQh"); 
        expect(String.fromCharCode.apply(null, $$.BinaryString.base64ToBytes('SGVsbG8gd29ybGQh'))).toBe("Hello world!")
    })

    it("loadUTF8CharCode", () => {
        const s = $$.BinaryString("Hello world!");
        expect($$.BinaryString.loadUTF8CharCode(s.rawData, 6)).toBe('w'.charCodeAt(0)) // 119
    })

    it('putUTF8CharCode', () => {
        var s = $$.BinaryString("Hello world!");
        $$.BinaryString.putUTF8CharCode(s.rawData, "_".charCodeAt(0), 5)
        expect(s.valueOf()).toBe("Hello_world!")
    })

    it('getUTF8CharLength', () => {
        expect($$.BinaryString.getUTF8CharLength("C".charCodeAt(0))).toBe(1)
        expect($$.BinaryString.getUTF8CharLength("⁈".charCodeAt(0))).toBe(3)
    })

    it("loadUTF16CharCode && putUTF16CharCode", () => {
        const s = $$.BinaryString("Hello world!", "UTF-16");
        expect($$.BinaryString.loadUTF16CharCode(s.rawData, 6)).toBe('w'.charCodeAt(0))
        $$.BinaryString.putUTF16CharCode(s.rawData, "_".charCodeAt(0), 5)
        expect(s.valueOf()).toBe("Hello_world!")
    })

    it("64ToUint6 && uint6ToB64", () => {
        expect($$.BinaryString.b64ToUint6("B".charCodeAt(0))).toBe(1);
        expect(String.fromCharCode($$.BinaryString.uint6ToB64(1))).toBe("B");
    })
})
