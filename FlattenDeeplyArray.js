/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n <= 0) {
        return arr;
    }
    const flattendArray = [];
    arr.forEach(function (item) {
        if (Array.isArray(item)) {
            flattendArray.push(...flat(item, n - 1));
        } else {
            flattendArray.push(item);
        }
    });
    return flattendArray;
};