import {IRequestAdapter} from '../adapter/IRequest.adapter';

export class RequestService {
    adapter: IRequestAdapter;

    constructor (adapter: IRequestAdapter) {
        this.adapter = adapter;
    }

    public async request<T>(url: string): Promise<T> {
        return this.adapter.request(url);
    }
}