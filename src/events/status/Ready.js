const Event = require('../../framework/objects/Event')
module.exports = new Event('ready', async (client) => {
    await client.presence.set({
        activities: [
            {
                name: 'you, dear users!',
                type: 3
            }
        ],
        status: 'dnd'
    })
    const devGuild = await client.guilds.cache.get(process.env.DEV_GUILD)
    await devGuild.commands.set(client.commands.map(cmd => cmd))
}, true)
