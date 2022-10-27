import { UserOutlined,LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form,Input, Select } from "antd";
import PrimaryButton from "../../components/PrimaryButton";
import WhiteButton from "../../components/WhiteButton";
import logo from "../../assets/img/ExtsyLogo.svg"
import '../../components/authComp/signUp/signUp.scss'
import LeftCoverImageComp from "../../components/authComp/signUpWithSocialLink/signUpComp";
import { Option } from "antd/lib/mentions";
import { useState } from "react";
import OTPModal from "../../components/authComp/signUp/OTPModal";
const SignUp = () => {
  const [modalOpen, setModalOpen] = useState(false);
    return (
      <div className="signUp">
          <div className="text-center signUp__header pb-2">
          <img className="ms-5 mt-3" src={logo} height="25" width="106" />
        </div>
  
        <div className="d-flex  justify-content-center">
         <LeftCoverImageComp/>
          <div className="w-50 signUpSection2">
           

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <div className="formLabel text-start mb-2">Name</div>
              <Form.Item
                name="text"
                rules={[
                  { required: true, message: "Please input your Name!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="your name"
                  className="signUpInput"
                />
                 </Form.Item>
              <div className="formLabel text-start mb-2">Email</div>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  prefix={<MailOutlined  className="site-form-item-icon" />}
                  placeholder="your Email"
                  className="signUpInput"
                />
              </Form.Item>
              <div className="formLabel  text-start  mb-2">Password</div>
              <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          type="password"
          placeholder="Password"
          className="signUpInput"
        />
      </Form.Item>
      <div className="formLabel text-start mb-2">Enter your Phone Number</div>
      <Form.Item>
      <Input.Group compact>
        <div className="d-flex" style={{width:"28.75rem"}}>
        
          <Select defaultValue="US" className="countiesDropDown">
        <Option value="Option1">Option1</Option>
        <Option value="Option2">Option2</Option>
      </Select>
          
      
      <Input
        // style={{
        //   width: '50%',
        // }}
        className="phoneNoInput"
        placeholder="+1 (555) 000-0000"
        // defaultValue="+1 (555) 000-0000"
      />
      <Button onClick={()=> setModalOpen(true)} className='sendOTPBtn'>Send OTP</Button>
      </div>
    </Input.Group>
      </Form.Item>

              {/* <Form.Item> */}
              {/* <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}
              {/* </Form.Item> */}
              {/* <div className="text-end  mb-4"  style={{width:"28.75rem"}}>
                <a className="" href="">
                  Forgot your password
                </a>
              </div> */}

              
               
              
            </Form>
            <PrimaryButton text="Create account" height="56px" width="460px" />
            <WhiteButton
              url=""
              text="Use Social Links"
              height="56px"
              width="460px"
            />
            <p className="text-center mt-2 linkText" style={{ width: "460px" }}>
              By signing up, you agree to the <a href="#" className="linkUnderLine">Terms of Service </a>
               and <a href="#"  className="linkUnderLine">Privacy policy </a>including{" "}
              <a href="#"  className="linkUnderLine">cookie use</a>
            </p>
          </div>
        </div>
        <OTPModal 
        visible={modalOpen}
        onOk={()=>setModalOpen(false)}
        onCancel={()=>setModalOpen(false)}
        />
      </div>
    );
}
 
export default SignUp;