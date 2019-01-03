# Map
immutable的Map操作方法,如果方法中返回的是$$Map对象则支持链式操作。

## of
`of` 将数组包装，返回$$Map对象
##### 参数
* { Object } 数据源
##### `Example`:
```js
   $$.of({a:1,b:2,c:3}) // immutable的Map对象
```

## size
`size` 获取Map的长度
##### `Example`:
```js
   $$.of({a:1,b:2,c:3}).size // 3
```

## $$toObject
`$$toObject` 将Map浅拷贝返回原生对象
##### `Example`:
```js
    $$.of({a:1.b:2}).$$toObject() // {a:1.b:2}
```


## $$toJS
`$$toJS` 将Map深拷贝返回原生对象
##### `Example`:
```js
    $$.of({a:1.b:2}).$$toJS() // {a:1.b:2}
```


## $$get
`count` 获取Map中的某个值
##### 参数
* { String } key
##### `Example`:
```js
   {a:1,b:2,c:3}).$$get('b') // 2
```

## $$set
`count` 设置Map中的某个值
##### 参数
* { String } key
* { Any } value
##### `Example`:
```js
   $$.of({a:1,b:2}).$$set('a',0).$$toObject() // {a:0.b:2}
```


## $$delete
`$$delete` 删除Map中的某个属性
##### 参数
* { String } key
##### `Example`:
```js
   $$.of({a:1,b:2,c:3}).$$delete('a').$$toObject() // {b:2，c:3}
```

## $$deleteAll
`$$delete` 删除Map中的多个属性
##### 参数
* { Array<String> } keys
##### `Example`:
```js
   $$.of({a:1,b:2,c:3}).$$deleteAll(['a','b']).$$toObject() // {c:3}
```


## $$clear
`$$clear` 清空Map

##### `Example`:
```js
    $$.of({a:1,b:2,c:3}).$$clear().$$toObject() // {}
```


## $$merge
`$$merge` 合并
##### 参数
* { Object } 合并源
##### `Example`:
```js
  $$.of({a:1,b:2,c:3}).$$merge({c:4,d:5}).$$toObject() // {a: 1, b: 2, c: 4, d: 5}
```

## $$map
`$$map` 
##### 参数
* { Function }
##### `Example`:
```js
   $$.of({a:1,b:2,c:3}).$$map(v => v*2).$$toObject() // {a: 2, b: 4, c: 6}
```


## $$filter
`$$filter` 过滤
##### 参数
* { Function }
##### `Example`:
```js
   $$.of({a:1,b:2,c:3}).$$filter(v => v>1).$$toObject() // {b: 2, c: 3}
```

## $$forEach
`$$forEach` 迭代Map中每个元素(有副作用)
##### 参数
* { Function }
##### `Example`:
```js
   $$.of({a:1,b:2,c:3}).$$forEach((item,key) => console.log(item,key))
   // 1 "a"
   // 2 "b"
   // 3 "c"
```


## $$mapKeys
`$$mapKeys` 遍历Map的key值
##### 参数
* { Function }
##### `Example`:
```js
  $$.of({a:1,b:2,c:3}).$$mapKeys(item=>console.log(item))
  // a
  // b
  // c
```

## $$has
`$$has` 是否含有某个属性
##### 参数
* { String }
##### `Example`:
```js
  $$.of({a:1,b:2,c:3}).$$has('a') // true
  $$.of({a:1,b:2,c:3}).$$has('d') // false
```