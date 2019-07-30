import {IRequestAdapter} from "./IRequest.adapter";

export class XMLHttpRequestAdapter implements IRequestAdapter {

    public async request<T>(url: string): Promise<T> {
        let request = new XMLHttpRequest();
        return new Promise<T>((resolve, reject) => {
            request.onreadystatechange = () => {
                if (request.readyState !== 4) return;
                if (request.status >= 200 && request.status < 300) {
                    const response = JSON.parse(request.responseText);
                    resolve(response as T)
                } else {
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });
                }
            };

            request.open('GET', url, true);
            request.send();
        });
    }
}