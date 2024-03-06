/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const TimeoutPromise = new Promise((_,reject)=>{
             setTimeout(()=>reject("Time Limit Exceeded"),t)
        })
        try{
          const ans = await Promise.race([fn(...args),TimeoutPromise])
          return ans
        }catch (error){
               throw error
        }
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */