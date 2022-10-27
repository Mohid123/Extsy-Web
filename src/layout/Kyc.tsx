import {  Layout, Menu } from 'antd';
import {useState,useEffect} from 'react';
import CompleteKyc from "../components/kyc/CompleteKyc";
import Logo from "../assets/img/logo.svg"
import CircleGreen from "../assets/img/circleGreen.svg"
import Security from "../assets/img/Security-svg.svg"
import Arrow from "../assets/img/ArrowRight.svg"

const { Header, Content, Footer, Sider } = Layout;
const MainLayout = ({children}:any) => {
  const [IdCard, setIdCard] = useState(false)
  const [passport, setPassport] = useState(true)
    return ( 
    <div className="container" style={{backgroundColor:'red'}}>
         <Layout >
        <Sider width='400' style={{backgroundColor:'white'}} >
         
      <img src={Logo} alt="" className='ms-5 mt-4' />
      <div className='siderText'> 
      <div className='d-flex'>
        <img src={CircleGreen} alt="" />
        <h6 className='fs-16 fw_600 fc_grey2 ms-3 mb-1 '>Personal Details</h6>
      </div>
{IdCard? ( <div>
      <div className='d-flex ps-1 mt-5'>
        <h6 className='fs-16 fw_600 fc_grey2 ms-4 mb-1 me-3'>ID Card Verification</h6>
        {IdCard?( <img src={Arrow} alt="" />):(<></>)}
       
      </div>
      <div className='d-flex ps-1 mt-5'>
        <h6 className='fs-16 fw_600 fc_grey2 ms-4 mb-1 me-3'>Passport Verification</h6>
        {passport?( <img src={Arrow} alt="" />):(<></>)}
      </div>
      </div>):(<></>)}
     
      <div className='d-flex mt-5'>
        <img src={CircleGreen} alt="" />
        <h6 className='fs-16 fw_400 fc_grey2 ms-3 mb-1 '>Image Upload</h6>
      </div>
      <div className='d-flex mt-5'>
        <img src={CircleGreen} alt="" />
        <h6 className='fs-16 fw_400 fc_grey2 ms-3 mb-1 '>Account Details</h6>
      </div>
      </div>
      <img src={Security} alt="" className='siderBottomImage'/>
        </Sider>
        <Content style={{backgroundColor:  '#FCFBFC' , minHeight:'100vh' }} >{children}</Content>
      </Layout>
       
    </div> 
    );
}
 
export default MainLayout;