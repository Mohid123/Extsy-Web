import { UserOutlined,LockOutlined } from "@ant-design/icons";
import { Form,Input,Button } from "antd";
import Header from "../../components/Header";
import PrimaryButton from "../../components/PrimaryButton";
import WhiteButton from "../../components/WhiteButton";
const SignUpUsingEmail = () => {
    return ( 
        <div>
            <Header/>
        <hr className="p-0 mt-2 mb-0"/>
        <div className="d-flex">
            <div className="w-50 bg-info signUpSection">image</div>
            <div className="w-50 signUpSection2">
                <p className="signUpSection2__signUpPara">Explore the world to experience the nature of others!</p>
                <p className="signUpSection2__signUpPara2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus</p>
           
     
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
       <div className="formLabel text-start mb-2">Email</div>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="your Email" />
      </Form.Item>
      <div className="formLabel text-start  mb-2">your password</div>
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
<div  className="formLabel text-end  mb-4">
<a className="" href="">
          Forgot your password
        </a>
</div>
       
      

      <Form.Item>
      <PrimaryButton  text= "Sign up" height="56px" width="460px" background="#7C167D"/>
      </Form.Item>
    </Form>
    <WhiteButton url=""  text="  Sign up with Quick Links" height="56px" width="460px" background="#FFFFFF" />
      <p className="text-center mt-2" style={{width:"460px"}}>By signing up, you agree to the <a href="#">Terms of Service</a>and <a href="#">Privacy policy </a>including <a href="#">cookie use</a></p>
            </div>
        </div>
        </div>
     );
}
 
export default SignUpUsingEmail;