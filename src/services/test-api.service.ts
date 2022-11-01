//THIS FILE IS FOR EXAMPLE ONLY. DELETE IT WHEN API INTEGRATION STARTS
//THIS FILE IS FOR EXAMPLE ONLY. DELETE IT WHEN API INTEGRATION STARTS

import { ApiResponse } from '../models/response.model';
import { SignInResponse } from '../models/sign-in-response.model';
// import { setItem, StorageItem } from '../utils/local-storage.utils';
import { ApiService } from './api.service';

    const apiservice = new ApiService();

    // GET REQ
    export const getDeals = () => {
        const params: any = {
            offset: 0,
            limit: 10
        }
        apiservice.get(`/users/getPendingUsers`, params).then((res: ApiResponse<any>) => {
            if(!res.hasErrors()) {
                console.log(res)
            }
            else {
                console.table(res.errors[0]);
                // for error in toast use res.errors[0].text to show message
            }
        })
    }

    // POST REQ
    export const login = (payload: any) => {
        apiservice.post(`/auth/login`, payload).then((res: ApiResponse<SignInResponse | any>) => {
            if(!res.hasErrors()) {
                console.log(res)
                // setItem(StorageItem.User, res?.data?.user || null);
                // setItem(StorageItem.JwtToken, res?.data?.token || null);
            }
            else {
                console.table(res.errors[0])
            }
        })
    }

