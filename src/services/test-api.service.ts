//THIS FILE IS FOR EXAMPLE ONLY. DELETE IT WHEN API INTEGRATION STARTS
//THIS FILE IS FOR EXAMPLE ONLY. DELETE IT WHEN API INTEGRATION STARTS

import { ApiResponse } from '../models/response.model';
import { ApiService } from './api.service';

// export class TestAPI extends ApiService<any> {
    const apiservice = new ApiService();
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
                console.log('ERROR: ', res.errors[0]);
            }
        })
    }
// }
