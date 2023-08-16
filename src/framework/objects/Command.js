module.exports = class Command {
    constructor (name, description, callback, options) {
        this.name = name
        this.description = description
        this.callback = callback
        this.options = options || []
    }
}
