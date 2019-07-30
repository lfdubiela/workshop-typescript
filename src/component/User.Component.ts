import {Component} from "./Component";

export class UserComponent extends Component{
    render(props?: any) {
        if (typeof props === 'object') {
            const element = this.dom.createElement("p");
            element.innerHTML = `Name: ${props.name} | Email: ${props.email} | Posts: ${props.postsLength}`;
            return element;
        }
    }
}