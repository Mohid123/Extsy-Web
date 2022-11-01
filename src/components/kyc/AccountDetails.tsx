import {useState,useEffect} from 'react';
import { Input,Button } from 'antd';
import ArrowCircle from "../../assets/img/arrow-right-circle.svg"
import { useNavigate } from "react-router-dom";

import   "./index.scss"


const AccountDetails = () => {
    const navigate = useNavigate()
    return (
        <div className='KycContainer '>
        <h1 className='fs_40 fw_600 mt-5 mb-0'> Account Details</h1>
        <div className='accountDetails mt-5'>
            <div className='d-flex mt-1'>
<img src={ArrowCircle} alt="" />
<p className='fs_15 fw_700 ms-2 mb-0 '>Tip!</p>
</div>
<p className='text-wrap fs_12 fw_500 fc_cyan2 ms-4 mt-2'>Please provide your required bank account details in which you want to receive payments.</p>
        </div>
        <div className='accountDetails__innerDiv'>
        <h6 className=' fs_18 fw_500 w-40 mt-5 '>IBAN Number</h6>
            <Input placeholder="e.g, AL35202111090000000001234567" />
            <h6 className=' fs_18 fw_500 w-50  mt-4'>Account Holder Name</h6>
            <Input placeholder="Placeholder" />
            <h6 className=' fs_18 fw_500 w-50 mt-4'>Bank Name</h6>
            <Input placeholder="Placeholder" />
            <h6 className=' fs_18 fw_500 w-50 mt-4'>Branch Code</h6>
            <Input placeholder="0407" />
            <div className=' d-flex justify-content-end mt-5'>
            <Button className='me-4 previousButton px-4'>Previous</Button>
            <Button
          type="primary"
         className='px-2' onClick={() => { navigate("/kyc/success")}}>
       Next
        </Button>
        </div>
            </div>
            
        </div>
        
    )
}

export default AccountDetails