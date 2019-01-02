# List
基于Facebook的immutable库的列表的操作方法,如果方法中返回的是list对象则支持链式操作。

## of
`of` 将数组包装，返回List对象
##### 参数
* { Array } 数据源
##### `Example`:
```js
   $$.of([1,2,3,4]) // immutable的List对象
```

## toArray
`toArray` 将列表浅拷贝返回原生数组
##### `Example`:
```js
    $$.of([1,2,3]).toArray() // [1,2,3] 
```


## toJS
`toJS` 将列表深拷贝返回原生数组
##### `Example`:
```js
    $$.of([1,2,3]).toJS() // [1,2,3] 
```


## count
`count` 获取列表长度
##### `Example`:
```js
   $$.of([1,2,3]).count()  // 3
```


## get
`get` 获取列表中某个元素
##### 参数
* { Number } 索引
##### `Example`:
```js
    $$.of([1,2,3]).get(0) // 1
```


## set
`set` 设置列表中某个元素
##### 参数
* { Number } 索引
##### `Example`:
```js
    $$.of([1,2,3]).set(0,'a').toArray() // ['a',2,3]
```



## pop
`pop` 删除列表中最后一个元素
##### `Example`:
```js
    $$.of([1,2,3]).pop().toArray() // [1,2]
```



## delete
`delete` 删除某个位置的元素
##### 参数
* { Number } 索引
##### `Example`:
```js
   $$.of([1,2,3]).delete(1).toArray() // [1,3]
```



## shift
`shift` 向列表头部删除一个元素
##### `Example`:
```js
    $$.of([1,2,3]).shift().toArray() // [2,3]
```


## push
`push` 向列表尾部增加一个元素
##### 参数
* { any } 待增加的元素
##### `Example`:
```js
    $$.of([1,2,3]).push(4).toArray() // [1,2,3,4] 
```


## insert
`insert` 向列表中某个位置插入元素
##### 参数
* { Number }  索引
* { any } 待增加的元素
##### `Example`:
```js
    $$.of([1,2,3]).insert(1,'a').toArray() // [1,'a',2,3]
```


## unshift
`unshift` 向列表头部增加一个元素
##### 参数
* { any } 待增加的元素
##### `Example`:
```js
    $$.of([1,2,3]).unshift(4).toArray() // [4,1,2,3] 
```

## splice
`splice` 向/从数组中添加/删除项目
##### 参数
* { Number } index   必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
* { Number } howmany 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
* item1, ..., itemX	 可选。向数组添加的新项目。
##### `Example`:
```js
    $$.of([4,2,3]).splice(1,1,'a','b').toArray() // [4, "a", "b", 3]
```

## reverse
`reverse` 反转列表

##### `Example`:
```js
    $$.of([1,2,3]).reverse().toArray() // [3,2,1] 
```


## sort
`sort` 列表排序

##### `Example`:
```js
    $$.of([3,2,1]).sort().toArray()  // [1,2,3] 
    $$.of([4,2,3]).sort(function(a,b){return b-a}).toArray()  // [4,3,2]
    $$.of([4,2,3]).sort(function(a,b){return a-b}).toArray()  // [2,3,4]
```


## clear
`clear` 清空列表

##### `Example`:
```js
    $$.of([3,2,1]).clear().toArray()  // [] 
```

## includes
`includes` 列表中是否含有某个元素
##### 参数
* { any } 元素
##### `Example`:
```js
    $$.of([1,2,3]).includes('a') // false
    $$.of([1,2,3]).includes(1) // true
```

## join
`join` 将列表变成字符串
##### 参数
* { String } 分隔符
##### `Example`:
```js
    $$.of([4,2,3]).join() // 4,3,2
    $$.of([4,2,3]).join('.') // 4.3.2
```


## slice
`slice` 切片
##### 参数
* { String } 分隔符
##### `Example`:
```js
    $$.of([4,2,3]).slice().toArray() // [4,3,2]
    $$.of([4,2,3]).slice(1).toArray() // [3,2]
```


## forEach
`forEach` 迭代列表中每个元素
##### 参数
* { Function }
##### `Example`:
```js
    $$.of([4,2,3]).forEach(v => console.log(v))
    // 4
    // 2
    // 3
```


## filter
`filter` 
##### 参数
* { Function }
##### `Example`:
```js
    $$.of([4,2,3]).filter(v => v % 2 === 0).toArray()  // [4,2]
```

## map
`map` 
##### 参数
* { Function }
##### `Example`:
```js
    $$.of([1,2,3]).map(v => v * 2).toArray()  // [2,4,6]
```

## every
`every` 
##### 参数
* { Function }
##### `Example`:
```js
    $$.of([1,2,3]).every(v => v > 0) // true
    $$.of([1,2,3]).every(v => v > 2) // false
```

## some
`some` 
##### 参数
* { Function }
##### `Example`:
```js
    $$.of([1,2,3]).some(v => v > 2) // true
    $$.of([1,2,3]).some(v => v > 4) // false
```

## reduce
`reduce`  对列表中的每个元素执行一个由您提供的reducer函数(从左到右)，将其结果汇总为单个返回值。
##### 参数
* { Function } callback
  - accumulator 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue
  - currentValue 数组中正在处理的元素。
  - currentIndex 数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则为1
  - array 调用reduce()的数组
* initialValue 初始值（可选）
##### `Example`:
```js
    $$.of([1,2,3]).reduce((sum,item) => sum + item , 2) // 8
```

## reduceRight
`reduceRight` 对列表中的每个元素执行一个由您提供的reducer函数(从右到左)，将其结果汇总为单个返回值。
##### 参数
* { Function } callback
  - accumulator 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue
  - currentValue 数组中正在处理的元素。
  - currentIndex 数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则为1
  - array 调用reduce()的数组
* initialValue 初始值（可选）
##### `Example`:
```js
    $$.of([1,2,3]).reduceRight((sum,item) => sum + item , 2) // 8
```