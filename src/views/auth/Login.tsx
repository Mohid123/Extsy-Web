import { UserOutlined,LockOutlined } from "@ant-design/icons";
import { Form,Input,Button } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import logo from "../../assets/img/ExtsyLogo.svg"
import apple from  "../../assets/img/apple.svg"
import google from "../../assets/img/google.svg"
import facebook from "../../assets/img/facebook.svg"
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
        
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
    <div className=" formLabel d-flex m-auto justify-content-center">
    <hr  className="w-25 me-2"/>OR<hr  className=" ms-2 w-25"/>
    </div>
    <Button  className="loginBtn mt-4">
        <img src={facebook}  className="me-3"/>  Continue with Facebook
        </Button>
        
        <Button  className="loginBtn mt-4">
        <img src={google}  className="me-3"/>   Continue with Google
        </Button>
        
        <Button  className="loginBtn mt-4">
        <img src={apple} className="me-3"/>   Continue with Apple
        </Button>
        <p className="mt-5">Don't have an account? <a href="#">Sign up</a></p>
            </div>
        </div>
     );
}
 
export default Login;