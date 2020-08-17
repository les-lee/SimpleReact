import { createElement, render, Component } from "./SimpleReact";

const sum = (a, b) => a + b

class CustomerCom extends Component {

    render(){
        return <div>
            我这里是有孩子的
        </div>
    }
}


const com = (
<CustomerCom>
    <div colorBlue>
        解析jsx
        <h1>大标题<span>{sum(10, 56)}</span></h1>
        <h2>h2标题</h2>
    </div>
</CustomerCom>
)



render(com, document.body)