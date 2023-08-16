const Component = require('./Component')
const { SelectMenuBuilder, SelectMenuOptionBuilder } = require('discord.js')

class MenuOptions {
    constructor (placeholder, disabled, min_values, max_values) {
        this.placeholder = placeholder
        this.disabled = disabled || false
        this.min_values = min_values ? (min_values === max_values ? undefined : Math.min(min_values, max_values)) : undefined
        this.max_values = max_values ? (max_values === min_values ? undefined : Math.max(min_values, max_values)) : undefined
    }
}
class MenuField {
    constructor (value, label, description, icon, isDefault) {
        this.value = value
        this.label = label
        this.description = description
        this.icon = icon
        this.isDefault = isDefault || false
    }

    build () {
        return new SelectMenuOptionBuilder()
            .setLabel(this.label)
            .setValue(this.value)
            .setEmoji(this.icon)
            .setDefault(this.isDefault)
            .setDescription(this.description)
    }
}
class Menu extends Component {
    constructor (id, fields, options, callback) {
        super (id, callback)
        this.fields = fields
        this.options = options
    }

    build (placeholder) {
        const menu = new SelectMenuBuilder()
            .setCustomId(placeholder ? `${this.id}%${placeholder}` : this.id)
            .setDisabled(this.options.disabled)
            .setOptions(this.fields)
        if (this.options.min_values) menu.setMinValues(this.options.min_values)
        if (this.options.max_values) menu.setMaxValues(this.options.max_values)

        return menu
    }
}

module.exports = {
    MenuOptions,
    MenuField,
    Menu
}
