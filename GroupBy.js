/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const groupArray = {}

    this.forEach((list)=>{
        const key = fn(list)
        if(groupArray[key]){
            groupArray[key].push(list)
        }else{
            groupArray[key]=[list]
        }
    })
    return groupArray
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */