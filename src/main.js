import { createElement, render, Component } from "./SimpleReact";

const sum = (a, b) => a + b

class CustomerCom extends Component {

    render(){
        return <div>
            我这里是有孩子的
            {this.children}
        </div>
    }
}


const com = (
<CustomerCom>
    <div colorBlue>
        解析jsx
        <h1>大标题<span>{sum(10, 56)}</span></h1>
        <h2>h2标题</h2>
        <svg version="1.1" baseProfile="full" width="512" height="512" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="red" />
        </svg>
    </div>
</CustomerCom>
)



render(com, document.body)