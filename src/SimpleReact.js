

class ElementWrapper {
    constructor(tag) {
        this.root = document.createElement(tag)
        this.props = Object.create(null)
        this.child = []
    }

    setAttribute(key, value) {
        this.root.setAttribute(key, value)
        // this.props[key] = value
    }

    appendChild(child) {
        this.root.appendChild(child.root)
        // this.child.push(child)
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content)
    }
}

export class Component {
    constructor() {
        this._root = null
        this.props = Object.create(null)
        this.children = []
    }

    setAttribute(key, value) {
        // this.root.setAttribute(key, value) // 直接挂载属性
        this.props[key] = value // 间接挂载属性
    }
    appendChild(child) {
        // this.root.appendChild(child.root)
        this.children.push(child)
    }
    get root() {
        if (!this._root) {
            this._root = this.render().root
        }
        return this._root
    }
}


export function createElement(tag, attr, ...children) {
    let element
    if (typeof tag === 'string') {
        element = new ElementWrapper(tag)
    } else {
        element = new tag()
    }

    if (attr) {
        for (const key in attr) {
            if (attr.hasOwnProperty(key)) {
                element.setAttribute(key, attr[key])
            }
        }
    }

    const inserChild = (children) => {
        children.forEach((item) => {
            if (Array.isArray(item)) {
                inserChild(item)
            } else if (typeof item === 'object') {
                element.appendChild(item)
            } else {
                element.appendChild(new TextWrapper(item))
            }
        })
    }
    inserChild(children)
    return element
}

export function render(com, root) {
    root.appendChild(com.root)
}