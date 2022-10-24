import { UserOutlined,LockOutlined } from "@ant-design/icons";
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
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    
    const onFinish = (values: any) => {
        console.log('Finish:', values);
      };
    return ( 
        <div className="signIn">
            <div className="signInContainer">
              <img src={logo} alt="logo"/>
            <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
       <div className="formLabel text-start m-auto  mb-2">username</div>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"  className="SignInInput"/>
      </Form.Item>
      <div className="formLabel text-start m-auto  mb-2">your password</div>
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
        />
      </Form.Item>
     
      {/* <Form.Item> */}
        {/* <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}
{/* </Form.Item> */}
<div  className="formLabel text-end m-auto mb-2">
<a className="" href="">
          Forgot your password
        </a>
</div>
       
      

      <Form.Item>
        <PrimaryButton  text="Log in" height="46px" width="300px" />
      </Form.Item>
    </Form>
    <div className=" formLabel d-flex m-auto justify-content-center">
    <hr  className="w-25 me-2"/>OR<hr  className=" ms-2 w-25"/>
    </div>
    <WhiteButton url={facebook} text="Continue with Facebook" height="60px" width="20.938rem"  />
    <WhiteButton url={google} text="Continue with Google"  height="60px" width="20.938rem"/>

<WhiteButton url={apple} text="Continue with Apple" height="60px" width="20.938rem"/>

        <p className="mt-5">Don't have an account? <a href="#">Sign up</a></p>
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