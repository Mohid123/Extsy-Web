import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Form,Input } from "antd";

import { useState } from "react";
import logo from "../../assets/img/ExtsyLogo.svg"
import apple from  "../../assets/img/apple.svg"
import google from "../../assets/img/google.svg"
import facebook from "../../assets/img/facebook.svg"
import WhiteButton from "../../components/WhiteButton";
import PrimaryButton from "../../components/PrimaryButton";
import '../../components/authComp/signIn/signIn.scss'


const SignIn = () => {
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');

    const setEmailval = (e: any) => {
      setEmail(e?.target?.value);
    }

    const setPassval = (e: any) => {
      setPassword(e?.target?.value);
    }
    return ( 
      <div className="signIn">
        <div className="signInContainer">
            <img src={logo} alt="logo"/>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
          <div className="formLabel text-start m-auto mb-2">Email</div>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input 
              prefix={<MailOutlined  className="site-form-item-icon" />} 
              type='email'
              placeholder="Email" 
              className="SignInInput"
              onChange={setEmailval}
              value={getEmail}
            />
          </Form.Item>
          <div className="formLabel text-start m-auto mb-2">Password</div>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              type="password"
              placeholder="Password"
              className="SignInInput"
              onChange={setPassval}
              value={getPassword}
            />
          </Form.Item>
          <div  className="formLabel text-end m-auto mb-2">
            <a className="forgetPass" href="abc.com">
              Forgot your password?
            </a>
          </div>
      
          <Form.Item>
            <PrimaryButton email={getEmail} password={getPassword} text="Log in" height="46px" width="300px"/>
          </Form.Item>
          </Form>
          <div className=" formLabel d-flex m-auto justify-content-center">
            <hr  className="w-25 me-2"/>OR<hr  className=" ms-2 w-25"/>
          </div>
          <WhiteButton url={facebook} text="Continue with Facebook" height="60px" width="20.938rem"  />
          <WhiteButton url={google} text="Continue with Google"  height="60px" width="20.938rem"/>

          <WhiteButton url={apple} text="Continue with Apple" height="60px" width="20.938rem"/>

          <p className="donotHaveAcc m-2">Don't have an account? <a href="abc.com">Sign up</a></p>
        </div>
        <div className="d-flex justify-content-center align-items-center signInFooter py-2">
          <p className="mx-4 mt-0 mb-0">About</p>
          <p className="mx-4 mt-0 mb-0">Language</p>
          <p className="mx-4 mt-0 mb-0">Privacy Policy</p>
          <p className="mx-4 mt-0 mb-0">Marketing</p>
        </div>
      </div>
    );
}
 
export default SignIn;