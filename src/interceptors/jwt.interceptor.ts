import axios, { AxiosRequestConfig } from 'axios';
import { getItem, StorageItem } from '../utils/local-storage.utils';

import { environment } from './../environments/environment';

export const jwtInterceptor = () => {
    axios.interceptors.request.use((request: AxiosRequestConfig<any> | any) => {
        const isLoggedIn = getItem(StorageItem.JwtToken)?.toString() || '';
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        const token = getItem(StorageItem.JwtToken)?.toString();

        if (isLoggedIn !== '' && isApiUrl) {
            request.headers.common["Authorization"] = `${token}`;
        }

        return request;
    })
}