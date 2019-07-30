import Favicon from "./assets/favicon.ico";
import {Facade} from "./services/Facade";
import {ListsUserComponent} from "./component/ListUserComponent";
import {ListsPostComponent} from "./component/ListPostComponent";
import {DomAdapter} from "./adapter/Dom.adapter";

(function setFavicon() {
    const favicon: HTMLLinkElement = document.createElement("link");

    favicon.type = "image/x-icon";
    favicon.rel = "shortcut icon";
    favicon.href = Favicon;

    const facade = new Facade();
    const dom = DomAdapter.getInstance();

    Promise.all([facade.getAllUsers(), facade.getAllPosts()]).then((result: any[]) => {
        const [users , posts] = result;

        const listUserComponent = new ListsUserComponent();
        const listUser = listUserComponent.render(users);
        document.body.appendChild(listUser);

        let listPostComponent = new ListsPostComponent();
        const listPost = listPostComponent.render(posts)
        document.body.appendChild(listPost);
    });

    document.getElementsByTagName("head")[0].appendChild(favicon);
})();

