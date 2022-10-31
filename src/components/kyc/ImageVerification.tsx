import {useState,useEffect} from 'react';
import ArrowCircle from "../../assets/img/arrow-right-circle.svg"
import CircleGreen from "../../assets/img/circleGreen.svg"
import CircleRed from "../../assets/img/circleRed.svg"

import { Button } from 'antd';
import   "./index.scss"


const ImageVerification = () => {
    return (
        <div className='KycContainer '>
        <h1 className='fs_40 fw_600 mt-5 mb-0'>Image Verification</h1>
        <p className='fs_18 fw_400 fc_grey '>Please enter your relevant information</p>
        <h6 className='fs-16 fw_500 mt-2'>Upload Image</h6>
        <div className='imageBox'></div>
       
        
        <div className='noteDiv2 mt-4'>
            <div className='d-flex mt-1 ms-2'>
            <img src={CircleGreen} alt="" />
            <p className='fs-14 fw-400 fc_cyan3 text-wrap ms-2  mb-0'>
            Upload an image of yourself with a neutral expression
            </p>
            </div>
            <div className='d-flex mt-2 ms-2'>
            <img src={CircleGreen} alt="" />
            <p className='fs-14 fw-400 fc_cyan3 text-wrap ms-2 mb-0'>
            Make sure your whole face is visible, centered and your eyes are open
            </p>
            </div>
            <div className='d-flex mt-2 ms-2'>
            <img src={CircleRed} alt="" />
            <p className='fs-14 fw-400 fc_cyan3 text-wrap ms-2  mb-0'>
            Do not crop your image or use any screenshot
            </p>
            </div>
            <div className='d-flex mt-2 ms-2'>
            <img src={CircleRed} alt="" />
            <p className='fs-14 fw-400 fc_cyan3 text-wrap ms-2  mb-0'>
            Do not hide or alter parts of your face
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

export default ImageVerification