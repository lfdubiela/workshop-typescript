import {UserService} from "./User.service";
import {PostService} from "./Post.service";
import {UserModel} from "../models/User.model";
import {PostModel} from "../models/Post.model";

export class Facade {
    private userService: UserService;
    private postService: PostService;

    constructor() {
        this.userService = new UserService();
        this.postService = new PostService();
    }

    public async getAllUsers(): Promise<UserModel[]> {
        const users = await this.getUsers();
        const posts = await this.getPosts();

        const postsByUser = (user: UserModel) => {
            return posts.filter((post: PostModel) => user.id === post.userId)
        }

        return users.map((user: UserModel) => {
            return {...user, posts: postsByUser(user)};
        });
    }

    public async getAllPosts(): Promise<PostModel[]> {
        const users = await this.getUsers();
        const posts = await this.getPosts();

        const userByPost = (post: PostModel) => {
            return users.find((user: UserModel) => user.id === post.userId)
        }

        return posts.map((post: PostModel) => {
            return {...post, user: userByPost(post)};
        });
    }

    private async getUsers(): Promise<UserModel[]> {
        return await this.userService.getAll();
    }

    private async getPosts(): Promise<PostModel[]> {
        return await this.postService.getAll();
    }
}
