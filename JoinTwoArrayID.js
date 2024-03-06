/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2)
    const map = new Map()
    mergedArray.forEach((item)=>{
        if(map.has(item.id)){
            Object.assign(map.get(item.id),item)
        }else{
            map.set(item.id,{...item})
        }
    })

    const outputArray = Array.from(map.values()).sort((x,y)=>x.id - y.id)
    return outputArray;
};