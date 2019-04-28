# utils
utils是一些工具方法

## throttle
`throttle` 函数节流
##### 参数
* { Function } 需要节流的函数
* { Number } 节流时间，多久以后执行一次方法 单位ms
##### `Example`:
```js
    // 每隔3s才打印一次1 
    document.body.onclick = $$.throttle(() => {
        console.log(1);
    }, 3000);
```

## debounce
`debounce` 防抖
##### 参数
* { Function } 需要防抖的函数
* { Number } 防抖时间 单位ms
##### `Example`:
```js
    // 1s的时间内不能重复触发，触发了会重新计时，用在动态搜索比较多
    const debounceFn = $$.debounce((val) => {
        console.log(val);
    }, 1000);

    document.body.onclick = ()=>{
        debounceFn('value')
    }
```

## deepClone
`deepClone` 深拷贝
##### 参数
* { Array \| Object } 被拷贝的值
##### 返回值
* { Array \| Object } 拷后的值
##### `Example`:
```js
    let obj = {a:1,b:2,c:[1,2,3]};
    let arr = [1,2,3];
    let cloneObj = $$.deepClone(obj);
    let cloneArr = $$.deepClone(arr);
    obj === cloneObj;       // false
    obj.c === cloneObj.c;   // false
    arr === cloneArr;       // false
```

## observable
`observable` 生成观察者（内部Proxy方式进行监听）
##### 参数
* { Array \| Object } 原始数据
##### 返回值
* { Array \| Object } 原始数据的副本，观察者 @prop subscribe 订阅通知 @arg(新值,修改的key,修改的value)，每次对观察者修改都会触发subscribe
##### `Example`:
```js
   let obj = {a:1,b:2}
   let observer = $$.observable(obj).subscribe((newVal,key,value) => console.log(newVal,key,value))

    observer.a = 2
    observer.b = 3
    console.log(obj)

    //  打印结果 
    //  {a:2,b:2} 'a' 2
    //  {a:2,b:3} 'b' 3
    //  {a:1,b:2}
```

## dateFormat
`dateFormat` 日期格式化
##### 参数
* { Date } 时间，时间对象。
* { String } 格式，默认"yyyy-MM-dd hh\:mm\:ss'"
##### 返回值
* { String } 格式化后的时间 
##### `Example`:
```js
   $$.dateFormat(new Date()) // 2019-01-08 10:10:19
   $$.dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss') // 2019-01-08 10:10:19
   $$.dateFormat(new Date(),'yyyy-MM-dd') // 2019-01-08
```


## deviceIsMobile
`deviceIsMobile` 当前设备是否是手机
##### 返回值
* { Boolean } 
##### `Example`:
```js
   $$.deviceIsMobile() // false
```

## deviceIsAndroid
`deviceIsAndroid` 当前设备是否是android
##### 返回值
* { Boolean } 
##### `Example`:
```js
   $$.deviceIsAndroid() // false
```

## deviceIsIOS
`deviceIsIOS` 当前设备是否是IOS
##### 返回值
* { Boolean } 
##### `Example`:
```js
   $$.deviceIsIOS() // false
```

## once
`once` 让函数只执行一次
##### 参数
* { Function } 待执行的函数
##### 返回值
* { Function } 包装过的函数
##### `Example`:
```js
    const wrapFn = $$.once(function(){
            console.log(1)
         });
    wrapFn()
    wrapFn()   
    wrapFn()

    // 1
```

## delay
`delay` 延时执行函数
##### 参数
* { Function } 待执行的函数
* { Number } 默认1000毫秒，单位`ms`
##### `Example`:
```js
   $$.delay(()=> console.log(1) ,1000)  // 1秒后打印1
```

## curry
`curry` 函数柯里化
##### 参数
* { Function } 需要柯里化的函数
##### 返回值
* { Function } 柯里化函数
##### `Example`:
```js
    const fn = function(a, b, c) {
      return [a, b, c];
    };
    const curried = $$.curry(fn);
    curried(1)(2)(3)    // [1, 2, 3]
    curried(1, 2)(3)    // [1, 2, 3]
    curried(1, 2, 3)    // [1, 2, 3]
```

## setCookie
`setCookie` 设置cookie
##### 参数
* { String } key
* { value } key
* { Time } 过期时间（非必传），单位ms，默认7天
##### `Example`:
```js
   // 设置一个3天的cookie
   $$.setCookie('token','abc',60 * 60 * 24 * 1000 * 3)
```

## getCookie
`getCookie` 获取cookie
##### 参数
* { String } （非必传，不传获取所有cookie）key
##### 返回值
* { String \| Object } 匹配到的值
##### `Example`:
```js
    $$.getCookie('token') // 'abc'
    $$.getCookie() // {token:'abc',phone:'13880111111'}
```

## removeCookie
`removeCookie` 删除cookie
##### 参数
* { String } （非必传，不传删除所有cookie）key
##### `Example`:
```js
    $$.removeCookie('token')
    $$.removeCookie()
```

## unique
`unique` 数组去重
##### 参数
* { Array }
##### 返回值
* { Array }
##### `Example`:
```js
   $$.unique([1,2,2,3,3,3,4]) // [1,2,3,4]
```

## flatten
`flatten` 数组扁平化
##### 参数
* { Array } 待扁平的数组
* { Number } 层级，默认1
##### 返回值
* { Array } 扁平后的数组
##### `Example`:
```js
  $$.flatten([1, [2, [3, [4]], 5]]) // [1, 2, [3, [4]], 5]
  $$.flatten([1, [2, [3, [4]], 5]], 2)  // [1, 2, 3, [4], 5]
  $$.flatten([1, [2, [3, [4]], 5]], 3)  // [1, 2, 3, 4, 5]
```