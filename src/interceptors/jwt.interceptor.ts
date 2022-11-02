import axios, { AxiosRequestConfig } from 'axios';
import { getItem, StorageItem } from '../utils/local-storage.utils';

import { environment } from './../environments/environment';


export const jwtInterceptor = () => {
    axios.interceptors.request.use((request: AxiosRequestConfig) => {
        const isLoggedIn = getItem(StorageItem.User) || null;
        const isApiUrl = request?.url?.startsWith(environment.apiUrl);
        const token = getItem(StorageItem.JwtToken)?.toString();
        if (isLoggedIn && isApiUrl) {
            request.headers!.Authorization = token;
        }
        return request;
    })
}