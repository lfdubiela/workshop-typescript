import {PostModel} from "../models/Post.model";
import {RequestService} from './Request.service';
import {FetchAdapter} from "../adapter/Fetch.adapter";

export class PostService {

    public async getAll(): Promise<PostModel[]> {
        return await (new RequestService(new FetchAdapter()))
            .request<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
    }
}