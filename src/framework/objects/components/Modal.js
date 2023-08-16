const Component = require('./Component')
const { ActionRowBuilder, TextInputBuilder, ModalBuilder} = require('discord.js')

class ModalOptions {
    constructor (title, fields) {
        this.title = title
        this.fields = []
        if (fields) fields.forEach(field => this.fields.push(new ActionRowBuilder({
            components: [
                field.build()
            ]
        })))
    }
}
class Modal extends Component {
    constructor (id, options, callback) {
        super(id, callback)
        this.options = options
    }

    build (placeholder) {
        return new ModalBuilder()
            .setCustomId(placeholder ? `${this.id}%${placeholder}` : this.id)
            .setTitle(this.options.title)
            .setComponents(this.options.fields)
    }
}
class TextFieldOptions {
    constructor (style, min_length, max_length, required) {
        this.style = style
        this.min_length = min_length ? (min_length === max_length ? undefined : Math.min(min_length, max_length)) : undefined
        this.max_length = max_length ? (max_length === min_length ? undefined : Math.max(min_length, max_length)) : undefined
        this.required = required || false
    }
}
class TextField {
    constructor (id, label, options) {
        this.id = id
        this.label = label
        this.options = options
    }

    build () {
        const input = new TextInputBuilder()
            .setCustomId(this.id)
            .setLabel(this.label)
            .setStyle(this.options.style)
            .setRequired(this.options.required)
        if (this.options.min_length) input.setMinLength(this.options.min_length)
        if (this.options.max_length) input.setMaxLength(this.options.max_length)

        return input
    }
}

module.exports = {
    ModalOptions,
    Modal,
    TextFieldOptions,
    TextField
}
