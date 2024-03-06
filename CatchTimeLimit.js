class TimeLimitedCache {
    constructor() {
        this.cache = {};
        this.expireTimes = {};
    }

    set(key, value, duration) {
        const currentTime = Date.now();
        const expireTime = currentTime + duration;
        if (this.cache.hasOwnProperty(key) && this.expireTimes[key] > currentTime) {
            this.cache[key] = value;
            this.expireTimes[key] = expireTime;
            return true;
        }
        this.cache[key] = value;
        this.expireTimes[key] = expireTime;
        return false;
    }

    get(key) {
        const currentTime = Date.now();
        if (this.cache.hasOwnProperty(key) && this.expireTimes[key] > currentTime) {
            return this.cache[key];
        }
        return -1;
    }

    count() {
        const currentTime = Date.now();
        let count = 0;
        for (const key in this.cache) {
            if (this.cache.hasOwnProperty(key) && this.expireTimes[key] > currentTime) {
                count++;
            }
        }
        return count;
    }
}


/**

 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */