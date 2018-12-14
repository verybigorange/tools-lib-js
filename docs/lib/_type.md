# type
type中主要是一些类型判断的方法。@return {boolean}

## isObject
`isObject`判断是否是object对象
##### `Example`:
```js
_t.isObject({a: 1})   // true
```

## isArray
`isArray`判断是否是数组
##### `Example`:
```js
_t.isArray([])   // true
```

## isString
`isString`判断是否是字符串
##### `Example`:
```js
_t.isString('abc')  // true
_t.isString(1)   // false
```

## isNumber
`isNumber`判断是否是数字
##### `Example`:
```js
_t.isNumber('abc')  // false
_t.isNumber(1)   // true
```

## isBoolean
`isBoolean`判断是否是布尔值
##### `Example`:
```js
_t.isBoolean('true')  // false
_t.isBoolean(true)   // true
```

## isFunction
`isFunction`判断是否是方法
##### `Example`:
```js
let a = 1
let b = () => { }
_t.isFunction(a)  // false
_t.isFunction(b)   // true
```



## isEmptyObject
`isEmptyObject`判断对象是否是空对象
#### `Example`:
```js
let obj = {
  a: 1,
  b: 2
}
let obj1 = {}
_t.isEmptyObject(obj)   // false
_t.isEmptyObject(obj1)   // true
```

## isNull
`isNull`判断是否是null
##### `Example`:
```js
_t.isNull('hello')  // false
_t.isNull(null)   // true
```

## isUndefined
`isUndefined`判断是否是undefined
##### `Example`:
```js
_t.isUndefined('undefined')  // false
_t.isUndefined(undefined)   // true
```