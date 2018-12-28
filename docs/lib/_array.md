# array
数组的操作方法，这些方法都是immutable的。

## of
`of` 将数组包装，返回新的数组，新数组可以使用原生数组的方法和库的方法。
##### 参数
* { Array } 数据源
##### `Example`:
```js
    const $$arr = $$.of([1,2,3,4]) // [1,2,3,4]
    $$arr instanceof Array // true
```

## $$pop
`$$pop` 删除数组中一个或者多个元素，返回删除后的新数组
##### 参数
* { Number \| Array } 待删除的元素索引，不传删除最后一个元素
##### `Example`:
```js
    $$.of([1,2,3,4]).map(item => item*2).$$pop(0).$$pop([0,1]) // [8] 
```

