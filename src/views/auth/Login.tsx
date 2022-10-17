import { UserOutlined,LockOutlined } from "@ant-design/icons";
import { Form,Input,Button } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import logo from "../../assets/img/ExtsyLogo.svg"
import apple from  "../../assets/img/apple.svg"
import google from "../../assets/img/google.svg"
import facebook from "../../assets/img/facebook.svg"
import WhiteButton from "../../components/WhiteButton";
import PrimaryButton from "../../components/PrimaryButton";
const Login = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    
    const onFinish = (values: any) => {
        console.log('Finish:', values);
      };
    return ( 
        <div className="login">
            <div className="loginContainer">
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
        
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"  className="loginSignUpInput"/>
      </Form.Item>
      <div className="formLabel text-start m-auto  mb-2">your password</div>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          className="loginSignUpInput"
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
    <WhiteButton url={facebook} text="Continue with Facebook" height="60px" width="335px"  />
    <WhiteButton url={google} text="Continue with Google"  height="60px" width="335px"/>

<WhiteButton url={apple} text="Continue with Apple" height="60px" width="335px"/>

        <p className="mt-5">Don't have an account? <a href="#">Sign up</a></p>
            </div>
        </div>
     );
}
 
export default Login;