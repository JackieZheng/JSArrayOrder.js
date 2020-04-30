# JSArrayOrder.js
JS Array 进行多条件 指定顺序排序
```
//测试例子
var arr = [{
    name: 'b',
    num: 2,
    time: '2015-06-08 13:44:18'
}, {
    name: 'b',
    num: 3,
    time: '2015-06-08 13:44:18'
}, {
    name: 'a',
    num: 4,
    time: '2015-06-07 13:40:18'
}, {
    name: 'a',
    num: 4,
    time: '2015-06-08 13:44:18'
}, {
    name: 'c',
    num: 6,
    time: '2015-06-07 13:40:18'
}, ];


//单项默认排序
arr.orderBy("num"); 
//结果
(5) [{…}, {…}, {…}, {…}, {…}]
0: {name: "b", num: 2, time: "2015-06-08 13:44:18"}
1: {name: "b", num: 3, time: "2015-06-08 13:44:18"}
2: {name: "a", num: 4, time: "2015-06-08 13:44:18"}
3: {name: "a", num: 4, time: "2015-06-07 13:40:18"}
4: {name: "c", num: 6, time: "2015-06-07 13:40:18"}
length: 5
__proto__: Array(0)

//单项反向排序
arr.orderBy("num",true);  
//结果
(5) [{…}, {…}, {…}, {…}, {…}]
0: {name: "c", num: 6, time: "2015-06-07 13:40:18"}
1: {name: "a", num: 4, time: "2015-06-08 13:44:18"}
2: {name: "a", num: 4, time: "2015-06-07 13:40:18"}
3: {name: "b", num: 3, time: "2015-06-08 13:44:18"}
4: {name: "b", num: 2, time: "2015-06-08 13:44:18"}
length: 5
__proto__: Array(0)
 


//多项默认排序
arr.orderBy(["name", "num", "time"]); 
//结果
(5) [{…}, {…}, {…}, {…}, {…}]
0: {name: "a", num: 4, time: "2015-06-07 13:40:18"}
1: {name: "a", num: 4, time: "2015-06-08 13:44:18"}
2: {name: "b", num: 2, time: "2015-06-08 13:44:18"}
3: {name: "b", num: 3, time: "2015-06-08 13:44:18"}
4: {name: "c", num: 6, time: "2015-06-07 13:40:18"}
length: 5
__proto__: Array(0)

//多项反向排序
arr.orderBy(["name", "num", "time"], true);
//结果
(5) [{…}, {…}, {…}, {…}, {…}]
0: {name: "c", num: 6, time: "2015-06-07 13:40:18"}
1: {name: "b", num: 3, time: "2015-06-08 13:44:18"}
2: {name: "b", num: 2, time: "2015-06-08 13:44:18"}
3: {name: "a", num: 4, time: "2015-06-08 13:44:18"}
4: {name: "a", num: 4, time: "2015-06-07 13:40:18"}
length: 5
__proto__: Array(0)
 

//简单默认排序
["b","c","a"].orderBy()
//结果
(3) ["a", "b", "c"]
0: "a"
1: "b"
2: "c"
length: 3
__proto__: Array(0)

//简单反向排序
["b","c","a"].orderBy(true)
//结果
(3) ["c", "b", "a"]
0: "c"
1: "b"
2: "a"
length: 3
__proto__: Array(0)

//简单默认排序
[11,2,1,6,5,10,56].orderBy()
//结果
(7) [1, 2, 5, 6, 10, 11, 56]
0: 1
1: 2
2: 5
3: 6
4: 10
5: 11
6: 56
length: 7
__proto__: Array(0)


//简单反向排序
[11,2,1,6,5,10,56].orderBy(true)
//结果
(7) [56, 11, 10, 6, 5, 2, 1]
0: 56
1: 11
2: 10
3: 6
4: 5
5: 2
6: 1
length: 7
__proto__: Array(0)
```
