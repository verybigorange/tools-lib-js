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
* { Data } 时间
* { String } 格式，默认"yyyy-MM-dd hh\:mm\:ss'"
##### 返回值
* { String } 格式化后的时间 
##### `Example`:
```js
   $$.dateFormat(new Date()) // 2019-01-08 10:10:19
   $$.dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss') // 2019-01-08 10:10:19
   $$.dateFormat(new Date(),yyyy-MM-dd) // 2019-01-08
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
* { Function }
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