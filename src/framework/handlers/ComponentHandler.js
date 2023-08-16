const { Button } = require('../objects/components/Button')
const { Modal } = require('../objects/components/Modal')
const { Menu } = require('../objects/components/Menu')

module.exports = client => {
    const components = require('./FileHandler')('./src/components/', true)

    if (components.length === 0) return console.log('No components to load!')

    components.forEach(file => {
        const component = require(`../../components/${file}`)
        if (!component) return

        if (component instanceof Button) return client.buttons.set(component.id, component)
        if (component instanceof Modal) return client.modals.set(component.id, component)
        if (component instanceof Menu) return client.menus.set(component.id, component)
    })
}
