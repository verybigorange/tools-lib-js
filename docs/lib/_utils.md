# utils
utils是一些工具方法

## throttle
`throttle`函数节流
##### 参数
* { Function } 需要节流的函数
* { Number } 节流时间，多久以后执行一次方法 单位ms
##### `Example`:
```js
    // 每隔3s才打印一次1 
    document.body.onclick = _t.throttle(() => {
        console.log(1);
    }, 3000);
```

## debounce
`debounce`防抖
##### 参数
* { Function } 需要防抖的函数
* { Number } 防抖时间 单位ms
##### `Example`:
```js
    // 1s的时间内不能重复触发，触发了会重新计时，用在动态搜索比较多
    const debounceFn = _t.debounce((val) => {
        console.log(val);
    }, 1000);

    document.body.onclick = ()=>{
        debounceFn('value')
    }
```

