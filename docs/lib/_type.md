# type
type中主要是一些类型判断的方法。@return {boolean}

## isObject
`isObject` 判断是否是object对象
##### `Example`:
```js
$$.isObject({a: 1})   // true
```

## isArray
`isArray` 判断是否是数组
##### `Example`:
```js
$$.isArray([])   // true
```

## isString
`isString` 判断是否是字符串
##### `Example`:
```js
$$.isString('abc')  // true
$$.isString(1)   // false
```

## isNumber
`isNumber` 判断是否是数字
##### `Example`:
```js
$$.isNumber('abc')  // false
$$.isNumber(1)   // true
```

## isBoolean
`isBoolean` 判断是否是布尔值
##### `Example`:
```js
$$.isBoolean('true')  // false
$$.isBoolean(true)   // true
```

## isFunction
`isFunction` 判断是否是方法
##### `Example`:
```js
let a = 1
let b = () => { }
$$.isFunction(a)  // false
$$.isFunction(b)   // true
```



## isEmptyObject
`isEmptyObject` 判断对象是否是空对象
#### `Example`:
```js
let obj = {
  a: 1,
  b: 2
}
let obj1 = {}
$$.isEmptyObject(obj)   // false
$$.isEmptyObject(obj1)   // true
```

## isNull
`isNull` 判断是否是null
##### `Example`:
```js
$$.isNull('hello')  // false
$$.isNull(null)   // true
```

## isUndefined
`isUndefined` 判断是否是undefined
##### `Example`:
```js
$$.isUndefined('undefined')  // false
$$.isUndefined(undefined)   // true
```