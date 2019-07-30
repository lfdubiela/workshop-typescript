export class DomAdapter {
    protected dom: Document;
    protected elements: HTMLElement[];
    protected static instance: DomAdapter;

    private constructor() {
        this.dom = document;
        this.elements = [];
    }

    static getInstance(): DomAdapter {
        if (!DomAdapter.instance) {
            DomAdapter.instance = new DomAdapter();
        }

        return DomAdapter.instance;
    }

    public createElement(
        tag: string,
        options: ElementCreationOptions = null
    ): HTMLElement {
        const element = this.dom.createElement(tag, options);
        this.elements.push(element);
        return element;
    }

    public queryAll(selector: string): NodeListOf<Element> {
        return this.dom.querySelectorAll(selector);
    }

    public query(selector: string): Element {
        return this.dom.querySelector(selector);
    }

    public callAlert(message: string): void {
        alert(message);
    }
}