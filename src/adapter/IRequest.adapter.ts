export interface IRequestAdapter {
    request<T>(url: string): Promise<T>;
}