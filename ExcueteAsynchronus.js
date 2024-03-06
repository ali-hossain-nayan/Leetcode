/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve,reject)=>{
        let ans = []
        let completed = 0

        if(functions.length===0){
            resolve(ans)
            return;

        }
        for(let i=0;i<functions.length;i++){
            functions[i]()
                .then((data)=>{
                    ans[i]=data
                    completed++
                    if(completed===functions.length){
                        resolve(ans)
                    }
                  
                })
                 .catch((error)=>{
                     reject(error)
                 }) 

        }

    })
};

/**
function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        
        if (functions.length === 0) {
            resolve(results);
            return;
        }
        
        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then(value => {
                    results[i] = value;
                    completed++;
                    if (completed === functions.length) {
                        resolve(results);
                    }
                })
                .catch(reason => {
                    reject(reason);
                });
        }
    });
}



 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */