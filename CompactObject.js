/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(value => Boolean(value)).map(compactObject);
    } else if (typeof obj === 'object' && obj !== null) {
        const compacted = {};
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key) && Boolean(obj[key])) {
                compacted[key] = compactObject(obj[key]);
            }
        }
        return compacted;
    } else {
        return obj;
    }
};