const Event = require('../../framework/objects/Event')
const { EmbedBuilder } = require('discord.js')

module.exports = new Event('voiceStateUpdate', async (client, oldState, newState) => {
  if (!newState.channel) return
  const members = newState.channel.members.map((k, v) => k)
  if (members.length !== 1) return

  const channel = await oldState.guild.channels.cache.find(c => c.isTextBased() && c.id === process.env.MENTION_CHANNEL)
  if (!channel) return
  channel.send({
    content: '@everyone',
    embeds: [
        new EmbedBuilder()
            .setColor(client.color)
            .setDescription(`<@${newState.id}> a lancé un appel ! :tada:`)
            .setFooter({
              text: 'Appel lancé'
            })
            .setTimestamp()
    ]
  })
}, false)
