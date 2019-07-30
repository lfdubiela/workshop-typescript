import {DomAdapter} from "../adapter/Dom.adapter";

export abstract class Component {
    protected dom: DomAdapter;

    constructor() {
        this.dom = DomAdapter.getInstance();
    }

    abstract render(props?: any): HTMLElement;
}