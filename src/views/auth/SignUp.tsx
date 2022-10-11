import { Button } from "antd";

import apple from  "../../assets/img/apple.svg"
import google from "../../assets/img/google.svg"
import facebook from "../../assets/img/facebook.svg"
import Header from "../../components/Header";
import WhiteButton from "../../components/WhiteButton";
const SignUp = () => {
    return ( 
        <div>
<Header/>
        <hr className="p-0 mt-2 mb-0"/>
        <div className="d-flex">
            <div className="w-50 bg-info signUpSection">image</div>
            <div className="w-50 signUpSection2">
                <p className="signUpPara">Explore the world to experience the nature of others!</p>
                <p className="signUpPara2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus</p>
                {/* <Button  className="signUpBtn mt-4">
        <img src={facebook}  className="me-3"/>  Continue with Facebook
        </Button> */}
        <WhiteButton url="../assets/img/facebook.svg" text=" Continue with Facebook"/>
        
        <WhiteButton url="../../assets/img/google.svg" text=" Continue with Google"/>

        <WhiteButton url="../../assets/img/apple.svg" text="Continue with Apple"/>

        <div className="formLabelSignUp d-flex justify-content-center  mt-3">
    <hr  className="w-25 me-2"/>OR<hr  className=" ms-2 w-25"/>
    </div>
    <Button type="primary" htmlType="submit" className="signUp-form-button">
         Sign up
        </Button>
        <div className="d-flex justify-content-between signUpFooter">
            <p>About</p>
            <p>Language</p>
            <p>Privacy Policy</p>
            <p>Marketing</p>
        </div>
            </div>
        </div>
        </div>
     );
}
 
export default SignUp;