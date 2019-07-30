import {IRequestAdapter} from "./IRequest.adapter";

export class FetchAdapter implements IRequestAdapter {

    public async request<T>(url: string): Promise <T> {
        const response = await fetch(url);
        return (await response.json()) as T;
    }
}