import { OutgoingHttpHeaders } from "http2";
import { ApiResponse, ErrorCode } from "../models/response.model";
import { AxiosRequestConfig } from 'axios';
import { environment } from './../environments/environment';
import axios from 'axios';
import { getItem, StorageItem } from "../utils/local-storage.utils";


const headersConfig = {
    'LOCALE': 'en',
    'Accept': 'application/json',
    'access-control-allow-origin': '*'
  };

export class ApiService<T> {

    // constructor(protected axiosService: typeof axios) {}

    private setHeaders(): OutgoingHttpHeaders {
        const header = {
          ...headersConfig,
          'Content-Type': 'application/json',
        };
        return header;
    }

    get JwtToken(): string {
        return getItem(StorageItem.JwtToken)?.toString() || '';
    }

    private objectToQueryString(obj: any): string {
        const str = [];
        for (const p in obj)
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
          }
        return str.join('&');
    }

    private async handleResponse<TData>(response: any): Promise<any> {
        return await response.text().then((text: string) => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if ([401, 403].includes(response.status) && this.JwtToken) {
                    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api. No need for error interceptor
                    // logout user function call
                }
    
                const error = (data && data.message) || response.statusText;
                if(error) {
                    const result = new ApiResponse<TData>();
                    if (
                        response instanceof ErrorEvent ||
                        response instanceof ProgressEvent
                    ) {
                        result.errors.push({
                            code: ErrorCode.UnknownError,
                            text: 'Unknown error.'
                        });
                    }
                    else {
                        result.errors.push({
                            code: response.statusText,
                            text: data.message,
                            error: error
                        });
                    }
                    return Promise.reject(result);
                }
            }
            return data;
        });
    }

    public async get(
        path: string,
        params?: any
    ): Promise<ApiResponse<T>> {
        const options: AxiosRequestConfig = {
            method: 'GET',
            params: this.objectToQueryString(params),
            headers: this.setHeaders()
        }
        return await this.handleResponse(axios.get<ApiResponse<T>>(`${environment.apiUrl}${path}`, options))
    }

    public async post(
        path: string,
        body: Object = {}
    ): Promise<ApiResponse<T>> {
        const options: AxiosRequestConfig = {
            method: 'POST',
            headers: this.setHeaders()
        }
        return await this.handleResponse(axios.post<ApiResponse<T>>(`${environment.apiUrl}${path}`, JSON.stringify(body), options))
    }

    public async put(
        path: string,
        body: Object = {}
    ): Promise<ApiResponse<T>> {
        const options: AxiosRequestConfig = {
            method: 'PUT',
            headers: this.setHeaders()
        }
        return await this.handleResponse(axios.put<ApiResponse<T>>(`${environment.apiUrl}${path}`, JSON.stringify(body), options))
    }

    public async delete(
        path: string,
        body: Object = {}
    ): Promise<ApiResponse<T>> {
        const options: AxiosRequestConfig = {
            method: 'DELETE',
            headers: this.setHeaders(),
            data: JSON.stringify(body)
        }
        return await this.handleResponse(axios.delete<ApiResponse<T>>(`${environment.apiUrl}${path}`, options))
    }

}