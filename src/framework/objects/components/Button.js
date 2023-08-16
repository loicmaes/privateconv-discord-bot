const Component = require('./Component')
const { ButtonStyle, ButtonBuilder} = require('discord.js')

class ButtonOptions {
    constructor (label, icon, style, disabled) {
        this.label = label
        this.icon = icon
        this.style = style || ButtonStyle.Primary
        this.disabled = disabled || false
    }
}
class Button extends Component {
    constructor (id, options, callback, url) {
        super (id, callback)
        this.options = options
        this.url = url
    }

    build (placeholder) {
        const button = new ButtonBuilder()
            .setLabel(this.options.label)
            .setStyle(this.options.style)
            .setDisabled(this.options.disabled)

        if (this.url) button.setURL(this.url)
        else button.setCustomId(placeholder ? `${this.id}%${placeholder}` : this.id)

        if (this.options.icon) button.setEmoji(this.options.icon)
        return button
    }
}

module.exports = {
    ButtonOptions,
    Button
}
