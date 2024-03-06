class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        const eventCallbacks = this.events.get(eventName) || [];
        const subscription = { callback };

        this.events.set(eventName, [...eventCallbacks, subscription]);

        return {
            unsubscribe: () => {
                const eventCallbacks = this.events.get(eventName) || [];
                const index = eventCallbacks.indexOf(subscription);
                if (index !== -1) {
                    eventCallbacks.splice(index, 1);
                }
                return undefined;
            },
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const eventCallbacks = this.events.get(eventName) || [];
        return eventCallbacks.map(subscription => subscription.callback(...args));
    }
}
