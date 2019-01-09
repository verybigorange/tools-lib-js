# BinaryString
通过ArrayBuffer实现的类String对象

## BinaryString
生成BinaryString数据对象

##### 参数
* {String | Array} input - 必须。输入值。
* {String} encoding - 可选。编码格式，默认为`UTF-8`,还支持`UTF-16`,`UTF-32`。
* {Number} offset - 可选。离字符串开始的距离（对截取数据用）。
* {Number} length - 可选。字符串长度。

##### `EXample`
```javascript
var s1 = $$.BinaryString("Hello world!");
alert(s1); // "Hello world!"
var s2 = $$.BinaryString("Hello world!", "UTF-16");
alert(s1.buffer.byteLength); // 12
alert(s2.buffer.byteLength); // 24
```
## makeFromBase64
通过Base64数据生成BinaryString对象

##### 参数
* {String} base64Input - 必须。base64字符串输入值。
* {String} encoding - 可选。编码格式，默认为`UTF-8`,还支持`UTF-16`,`UTF-32`。
* {Number} offset - 可选。离字符串开始的距离（对截取数据用）。
* {Number} length - 可选。字符串长度。

##### `EXample`
```javascript
var s = $$.BinaryString.makeFromBase64("SGVsbG8gd29ybGQh");
alert(s) // "Hello world!"
```

## makeIndex
获取对应长度位置的字符在编码单元中的索引位置。

##### 参数
* {Number} charactersLength - 可选。字符长度位置索引。如果没有传则会得到编码的字符长度。
* {Number} startFrom - 可选。重对应索引开始来计算charactersLength对应的长度，如果没传，从0开始计算。

##### `Example`
```javascript
var s = $$.BinaryString.makeFromBase64("5Lit5paHIGVzcGHDsW9sIEVuZ2xpc2gg4KS54KS/4KSo4KWN4KSm4KWAINin2YTYudix2KjZitipIHBvcnR1Z3XDqnMg4Kas4Ka+4KaC4Kay4Ka+INGA0YPRgdGB0LrQuNC5IOaXpeacrOiqniDgqKrgqbDgqJzgqL7gqKzgqY==");
// "中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬà"

alert(s);

var mySubview1 = s.subview(19, 6); // "हिन्दी"

// 通过Uint8Array得到 `हिन्दी``
var nHindiStart = s.makeIndex(19);
var nHindiEnd = s.makeIndex(6, nHindiStart);
var mySubview2 = $$.BinaryString(s.rawData.subarray(nHindiStart, nHindiEnd), "UTF-8");

alert(mySubview1.rawData.length); // 18
alert(mySubview2.rawData.length); // 18
```
