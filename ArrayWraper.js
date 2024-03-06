/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {
    constructor(arrays) {
        this.arrays = arrays;
        this.sum = arrays.reduce((acc, cur) => acc + cur, 0);
    }

    valueOf() {
        return this.sum;
    }

    toString() {
        return `[${this.arrays.join(',')}]`;
    }
}





/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */