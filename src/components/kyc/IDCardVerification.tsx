import {useState,useEffect} from 'react';
import   "./index.scss"
import ArrowCircle from "../../assets/img/arrow-right-circle.svg"

const IDCardVerification = () => {
return (
    <div className='KycContainer '>
    <h1 className='fs_40 fw_600 mt-5 mb-0'>ID Card Verification</h1>
    <p className='fs_18 fw_400 fc_grey '>Please enter your relevant information</p>
    <h6 className='fs-16 fw_500'>Front Side</h6>
    <div className='imageBox'></div>
    <h6 className='fs-16 fw_500'>Back Side</h6>
    <div className='imageBox'></div>
    <div className='noteDiv'>
        <div className='d-flex'>
        <img src={ArrowCircle} alt="" />
        <p className='fs-14 fw-400 text-wrap ms-2 mt-2'>
        Ensure that the photo and the name on your ID ( Passport, Driver’s license or ID card) are visible. Only .jpg .png and .jpeg images are supported.
        </p>
        </div>
    </div>
    </div>
)
}

export default IDCardVerification