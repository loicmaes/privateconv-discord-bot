const Discord = require('discord.js')

module.exports = class Client extends Discord.Client {
    constructor (token, color) {
        super ({ intents: 32767 })

        // Credentials
        this.token = token
        // Settings
        this.color = color || "#343434"
        // Commands collection
        this.commands = new Discord.Collection()
        // Components collections
        this.modals = new Discord.Collection()
        this.buttons = new Discord.Collection()
        this.menus = new Discord.Collection()
    }

    start () {
        require('../handlers/CommandHandler')(this)
        require('../handlers/EventHandler')(this)
        require('../handlers/ComponentHandler')(this)

        if (!this.token) {
            console.error('ERROR: No token provided!')
            return
        }
        this.login(this.token).then(_ => console.log(`----\nLogged in as ${this.user.tag}`))
    }
}
