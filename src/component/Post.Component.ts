import {Component} from "./Component";

export class PostComponent extends Component {
    render(props?: any): HTMLElement {
        if (typeof props === 'object') {
            const element = this.dom.createElement("p");
            element.innerHTML = `Titulo: ${props.title} | Conteudo: ${props.body}  | Autor: ${props.authorName}`;
            return element;
        }
    }
}