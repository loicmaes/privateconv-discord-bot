const loadFiles = require('./FileHandler')

module.exports = (client) => {
    const events = loadFiles('./src/events', true)

    if (events.length === 0) return console.log('No events to load!')

    events.forEach(file => {
        const event = require(`../../events/${file}`)
        if (!event.name || !event.callback) return

        if (event.once) client.once(event.name, event.callback.bind(null, client))
        else client.on(event.name, event.callback.bind(null, client))
    })
}
