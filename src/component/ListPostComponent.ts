import {Component} from "./Component";
import {PostComponent} from "./Post.Component";
import {PostModel as Post} from "../models/Post.model";

export class ListsPostComponent extends Component {

    render(posts: Post[]): HTMLElement {
        let content = this.dom.createElement("div");
        let title = this.createTitle();
        content.appendChild(title);

        posts.forEach((post: Post) => {
            let postComponent = new PostComponent();
            content.appendChild(postComponent.render({...post}));
        });

        return content;
    }

    private createTitle(): HTMLElement {
        const title = this.dom.createElement("h1");
        title.innerText = 'Dados dos posts';
        return title;
    }
}