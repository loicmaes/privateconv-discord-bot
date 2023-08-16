const loadFiles = require('./FileHandler')

module.exports = (client) => {
    const commands = loadFiles('./src/commands', true)

    if (commands.length === 0) return console.log('No commands to load!')

    commands.forEach(file => {
        const command = require(`../../commands/${file}`)

        if (!command.name || !command.callback) return
        client.commands.set(command.name, command)
    })
}
