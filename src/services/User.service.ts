import {UserModel} from "../models/User.model";
import {RequestService} from './Request.service';
import {XMLHttpRequestAdapter} from "../adapter/XMLHttpRequest.adapter";

export class UserService {

    public async getAll(): Promise<UserModel[]> {
        return await (new RequestService(new XMLHttpRequestAdapter()))
            .request<UserModel[]>('https://jsonplaceholder.typicode.com/users');
    }
}
