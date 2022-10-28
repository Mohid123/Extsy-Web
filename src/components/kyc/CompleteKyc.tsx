import {useState,useEffect} from 'react';
import { Input,Button } from 'antd';
import PassportIcon from "../../assets/img/Passport.svg"
import AddressIcon from "../../assets/img/ID_Card.svg"
import ArrowIcon from "../../assets/img/IconArrow.svg"
import ButtonArrowIcon from "../../assets/img/ButtonIcon.svg"
import {
    RightOutlined
  } from '@ant-design/icons';
  import { useLocation } from 'react-router-dom'



import   "./index.scss"


const CompleteKyc = () => {
  const location = useLocation();
  function handleClick(){
console.log(location.pathname)
  }
    return (
        <div className='KycContainer '>
            <h1 className='fs_40 fw_600 mt-5 mb-0'>Complete KYC</h1>
            <p className='fs_18 fw_400 fc_grey '>Please enter your relevant information</p>
            <div>
            <h6 className=' fs_16 fw_500 w-50 '>Issuing country</h6>
            <Input placeholder="Country" />
            </div>
            <div>
            <h6 className=' fs_16 fw_500 w-50 mt-4'>First Name</h6>
            <Input placeholder="Country" />
            </div>
            <div>
            <h6 className=' fs_16 fw_500 w-50 mt-4'>Last Name</h6>
            <Input placeholder="Country" />
            </div>
            <h6 className=' fs_16 fw_500 w-50 mt-4'> Use a valid government-issued-document</h6>

            <p className='fs_14 fw_400 fc_grey'>Please check your provided phone number and enter the OTP code here to complete your profile sign up.</p>
            <div className='mt-4'>  
            <Input prefix={ <img src={AddressIcon} alt=""/> }  suffix={ <img src={ArrowIcon} alt="" className='pe-3'/>} />
            </div>
            <div className='mt-4'>
            <Input prefix={ <img src={PassportIcon} alt=""/> }  suffix={ <img src={ArrowIcon} alt="" className='pe-3'/>} />
            </div>
            <div className=' d-flex justify-content-end mt-5'>
            <Button className='me-4 previousButton px-4'>Previous</Button>
            <Button type="primary" className='px-2'onClick={()=>{handleClick()}}> Next</Button>
        </div>
        </div>
    )
}

export default CompleteKyc