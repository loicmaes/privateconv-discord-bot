const fs = require('fs')

function loadFiles (path, subFiles) {
    const files = []

    fs.readdirSync(path).forEach(file => {
        const subDir = `${path}/${file}`
        if (subFiles && isDirectory(subDir)) loadFiles(subDir, true).forEach(f => files.push(`${file}/${f}`))
        else if (isJSFile(file)) files.push(file)
    })

    return files
}

function isDirectory (path) {
    return fs.lstatSync(path).isDirectory()
}

function isJSFile (path) {
    return path.endsWith('.js')
}

module.exports = loadFiles
