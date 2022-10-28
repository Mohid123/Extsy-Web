import {useState,useEffect} from 'react';
import   "./index.scss"
import ArrowCircle from "../../assets/img/arrow-right-circle.svg"
import { Button } from 'antd';
const IDCardVerification = () => {
return (
    <div className='KycContainer '>
    <h1 className='fs_40 fw_600 mt-5 mb-0'>ID Card Verification</h1>
    <p className='fs_18 fw_400 fc_grey '>Please enter your relevant information</p>
    <h6 className='fs-16 fw_500 mt-2'>Front Side</h6>
    <div className='imageBox'></div>
    <h6 className='fs-16 fw_500 mt-5'>Back Side</h6>
    <div className='imageBox'></div>
    <div className='noteDiv mt-4'>
        <div className='d-flex'>
        <img src={ArrowCircle} alt="" />
        <p className='fs-14 fw-400 text-wrap ms-2 mt-2'>
        Ensure that the photo and the name on your ID ( Passport, Driver’s license or ID card) are visible. Only .jpg .png and .jpeg images are supported.
        </p>
        </div>
    </div>
    <div className=' d-flex justify-content-end mt-5'>
            <Button className='me-4 previousButton px-4'>Previous</Button>
            <Button
          type="primary"
         className='px-2' >
       Next
        </Button>
        </div>
    </div>
)
}

export default IDCardVerification