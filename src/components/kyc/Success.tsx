import {useState,useEffect} from 'react';
import CheckMark from "../../assets/img/KYC - Check mark.svg"
import { Button } from 'antd';
import   "./index.scss"


const Success = () => {
    return (
        <div>
            <div className='success__image'>
            <img src={CheckMark} alt="" />
            </div>
            <div className='success mx-auto'>
            <h6 className='fs_18 fw_500 text-center'>Documents Uploaded</h6>
            <p className='fs_14 fw_400 text-wrap text-center'>
            You have succesfully uploaded required information, the verification process can take up-to 2 working days. We will let you know once we’ve verified everything.
            </p>
            <div className=' d-flex justify-content-center mt-5'>
            <Button className='me-4 previousButton px-5'>Go back</Button>
            <Button
          type="primary"
         className='px-5' >
       Done
        </Button>
        </div>
            </div>
        </div>
    )
}

export default Success