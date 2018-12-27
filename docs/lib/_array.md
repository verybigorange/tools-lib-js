# array
array中主要是一些数组的操作方法，这些方法都是immutable的。

## pop
`pop` 删除数组中一个或者多个元素，返回删除后的新数组
##### 参数
* { Array } 数组  (required)
* { Number \| Array } 待删除的元素索引，不传删除最后一个元素
##### `Example`:
```js
_t.pop([1,2,3],1) // [1,3]
_t.pop([1,2,3]) //[1,2]
_t.pop([1,2,3],[1,2]) // [1]   
```

