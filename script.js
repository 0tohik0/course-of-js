'use strict'

function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
}

DomElement.prototype.newElem = function () {
    let elem
    if (this.selector[0] === '.') {
        elem = document.createElement('div')
        elem.className = this.selector.slice(1)
    }
    if (this.selector[0] === '#') {
        elem = document.createElement('p')
        elem.id = this.selector.slice(1)
    }
    elem.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;`
    return elem
}

let obg1 = new DomElement('.block', 100, 200, 'blue', 12)
let obg2 = new DomElement('#best', 100, 200, 'red', 16)

document.body.appendChild(obg1.newElem())
document.body.appendChild(obg2.newElem())