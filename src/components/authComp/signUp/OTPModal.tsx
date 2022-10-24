import { Button, Modal } from "antd";
import OTPIcon from '../../../assets/img/OTPIcon.svg'
import OtpInput from "react-otp-input";

const OTPModal = (props:any) => {
    // const { phoneNumber, otpCode } = useSelector((state) => state.registerFormData);
    // const handleChange = (e) => {
	// 	dispatch(setOtpCode(e))
	//   }
    
    return ( 
        <Modal
        title={<img src={OTPIcon} alt="otpIcon"/>}
        centered
        {...props}
      
        className="p-1"
        width={684}
        // visible={modalOpen}
        // onOk={() => setModal2Open(false)}
        // onCancel={() => setModal2Open(false)}
      >
      <div className="" style={{width:'42.75rem !important', marginLeft:"2rem",marginRight:"2rem"}}>
      <h5>OTP Verification</h5>
        <p>Code is send to xxxxxxx</p>
        <p>Verification Code</p>
        <OtpInput
        // value={otpCode}
        // onChange={handleChange}
        numInputs={6}
        inputStyle={{
            height: '64px',
            width: '64px',
            border: '1px solid #BF63C5',
            borderRadius: '8px',
            marginRight: '5px',
        }}
        focusStyle={{
            border: '1px solid #BF63C5 !important',
        }}
        />
        <p className="mb-0 pb-0">Time:<span>1:00</span></p>
        <span>Didn't get a code?<a href="#"> Click to resend</a></span>
        <div className="d-flex justify-content-center  mt-3">
        <Button  className="whiteBtn mb-3" style={{height:'44px',width:"19.125rem" }}>
      Cancel
        </Button>
        <Button  className="primaryButton ms-2" style={{height:'44px',width:"19.125rem" }}>
        Verifty</Button>
        </div>
        </div>  
      </Modal>
     );
}
 
export default OTPModal;