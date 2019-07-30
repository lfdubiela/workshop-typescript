import {Component} from "./Component";
import {UserComponent} from "./User.Component";
import {UserModel as User} from "../models/User.model";

export class ListsUserComponent extends Component {

    render(users: User[]): HTMLElement {
        let content = this.dom.createElement("div");
        let title = this.createTitle();
        content.appendChild(title);

        users.forEach((user: User) => {
            let userComponent = new UserComponent();
            content.appendChild(userComponent.render({...user}));
        });

        return content;
    }

    private createTitle(): HTMLElement {
        const title = this.dom.createElement("h1");
        title.innerText = 'Dados dos usuarios';
        return title;
    }
}