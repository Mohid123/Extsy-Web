
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

    private setHeaders(): any {
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

    private async handleResponse<TData>(response: any): Promise<ApiResponse<TData>> {
        const result = new ApiResponse<TData>();
        return response.then((res: any) => {
            if([200, 201, 204].includes(res.status)) {
                delete res.config
                delete res.request
                delete res.statusText
                res.status = true;
                delete result.headers
                Object.assign(result, res);
                return result;
            }
        })
        .catch((error: any) => {
            if(error) {
                if ([401, 403].includes(error.response.status)) {
                    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api. No need for error interceptor
                    // logout user function call
                }
                const result = new ApiResponse<TData>();
                if (
                    error instanceof ErrorEvent ||
                    error instanceof ProgressEvent
                ) {
                    result.errors.push({
                        code: ErrorCode.UnknownError,
                        text: 'Unknown error.'
                    });
                }
                else {
                    result.errors.push({
                        code: error.code,
                        text: error.response.statusText,
                        error: error.response.status
                    });
                }
                return result;
            }
        })
        // return result;
    }

    public async get(
        path: string,
        params?: any
    ): Promise<ApiResponse<T>> {
        const options: AxiosRequestConfig = {
            method: 'GET',
            params: params,
            headers: this.setHeaders()
        }
        return await this.handleResponse<T>(axios.get<ApiResponse<T>>(`${environment.apiUrl}${path}`, options))
    }

    public async post(
        path: string,
        body: Object = {}
    ): Promise<ApiResponse<T>> {
        const options: AxiosRequestConfig = {
            method: 'POST',
            headers: this.setHeaders()
        }
        return await this.handleResponse<T>(axios.post<ApiResponse<T>>(`${environment.apiUrl}${path}`, JSON.stringify(body), options))
    }

    public async put(
        path: string,
        body: Object = {}
    ): Promise<ApiResponse<T>> {
        const options: AxiosRequestConfig = {
            method: 'PUT',
            headers: this.setHeaders()
        }
        return await this.handleResponse<T>(axios.put<ApiResponse<T>>(`${environment.apiUrl}${path}`, JSON.stringify(body), options))
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
        return await this.handleResponse<T>(axios.delete<ApiResponse<T>>(`${environment.apiUrl}${path}`, options))
    }

}