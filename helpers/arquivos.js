const fs = require('fs');
const path = require('path');

function caminho(dir){
    const listDir = path.join(__dirname, dir)
    fs.readdirSync(listDir).forEach(file => {
    require(path.join(listDir, file));
})}

module.exports = caminho;