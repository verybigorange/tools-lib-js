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


## $$shift
`$$shift` 向数组头部删除一个元素
##### `Example`:
```js
    $$.of([1,2,3]).$$shift() // [2,3] 
```


## $$push
`$$push` 向数组尾部增加一个元素
##### 参数
* { any } 待增加的元素
##### `Example`:
```js
    $$.of([1,2,3]).$$push(4) // [1,2,3,4] 
```


## $$unshift
`$$unshift` 向数组头部增加一个元素
##### 参数
* { any } 待增加的元素
##### `Example`:
```js
    $$.of([1,2,3]).$$unshift(4) // [4,1,2,3] 
```

## $$reverse
`$$reverse` 反转数组

##### `Example`:
```js
    $$.of([1,2,3]).$$reverse() // [3,2,1] 
```

## $$splice
`$$splice` 向/从数组中添加/删除项目
##### 参数
* { Number } index   必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
* { Number } howmany 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
* item1, ..., itemX	 可选。向数组添加的新项目。
##### `Example`:
```js
    $$.of([1,2,3]).$$splice(0,1,'a','b') // ["a", "b", 2, 3]
```

## $$sort
`$$sort` 反转数组

##### `Example`:
```js
    $$.of([3,2,1]).$$sort() // [1,2,3] 
    $$.of([4,2,3]).$$sort(function(a,b){return b-a}) // [4,3,2]
    $$.of([4,2,3]).$$sort(function(a,b){return a-b}) // [2,3,4]
```