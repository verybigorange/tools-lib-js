# exp
常用的正则判断。@return {boolean}

## isPhone
`isPhone` 是否是手机号
##### `Example`:
```js
    $$.isPhone('17723319392')  // true
```

## isIDCard
`isIDCard` 15位或者18位的身份证号
##### `Example`:
```js
    $$.isIDCard('51018319930420001X')   // true
```

## isEmail
`isEmail` 邮箱号
##### `Example`:
```js
    $$.isEmail('449732828@qq.com')  // true
```

## isTel
`isTel` 国内固定电话
##### `Example`:
```js
    $$.isTel('028-88770277')  // true
    $$.isTel('88770277')  // true
```

## isPostal
`isPostal` 邮政编码
##### `Example`:
```js
    $$.isPostal('611530')   // true
```
