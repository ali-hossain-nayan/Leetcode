/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filterArray = []
    for (let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filterArray.push(arr[i])
        }
    }
    return filterArray
    // let output = [];
    // for (let i=0; i<arr.length; i++){
    //     if(fn(arr[i], i)){
    //         output.push(arr[i])
    //     }
    // }
    // return output
};