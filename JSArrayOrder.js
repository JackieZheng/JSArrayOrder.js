/************************************************************
 * JSArrayOrder.js
 * 0.1
 * JackieZheng 
 ************************************************************/

function compare(a, b, orderArray, isReverse) {
    let c = orderArray[0];
    if (orderArray.length > 1 && (a[c] || a) === (b[c] || b)) {
        return compare(a, b, orderArray.slice(1), isReverse);
    } else {
        return (a[c] || a) === (b[c] || b) ? 0 : ((isReverse ? (a[c] || a) > (b[c] || b) : (a[c] || a) < (b[c] || b)) ? -1 : 1);
    }
}
/**
 * orderArray 指定排序属性，优先级依先后顺序 eg：["name", "num", "time"]
 * isReverse 是否倒序，默认 false
 */
Array.prototype.orderBy = (Array.prototype.orderBy = function (orderArray, isReverse) {
    if (typeof (orderArray) === 'boolean' || typeof (orderArray) === "undefined") {
        isReverse = orderArray;
        orderArray = '';
    }
    if (typeof (orderArray) === 'string') {
        let str = orderArray;
        orderArray = [];
        orderArray.push(str);
    }
    return this.sort((a, b) => {
        return compare(a, b, orderArray, isReverse)
    })
})


