module.exports = class Event {
    constructor (name, callback, once) {
        this.name = name
        this.callback = callback
        this.once = once || false
    }
}
