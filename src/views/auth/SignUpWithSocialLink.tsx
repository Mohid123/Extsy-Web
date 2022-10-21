import { Button } from "antd";

import apple from  "../../assets/img/apple.svg"
import google from "../../assets/img/google.svg"
import facebook from "../../assets/img/facebook.svg"

import WhiteButton from "../../components/WhiteButton";
import PrimaryButton from "../../components/PrimaryButton";
import logo from "../../assets/img/ExtsyLogo.svg"
import image from '../../assets/img/signInPageImage.svg'
import '../../components/authComp/signUpWithSocialLink/signUpwithSocialLink.scss'
const SignUpWithSocailLink = () => {
    return (
      <div className="signUp">
        <div className="text-center signUp__header pb-2">
          <img className="ms-5 mt-3" src={logo} height="25" width="106" />
        </div>
        {/* <hr className="p-0 mt-2 mb-0 signUp__header" /> */}
        <div className="d-flex justify-content-center">
          <div className=" signUpSection ">
            <div className="left-cover-image">
            <img src={image} alt="coverimg"/>
          <p className="signUpSection__signUpPara mb-0 ">
              Explore the world to experience the nature of others!
            </p>
            <hr style={{ width:'36.063rem' ,marginTop:'0rem', paddingTop:'0'}
            }/>
            <p className="signUpSection__signUpPara2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              lobortis maximus
            </p>
            </div>
          </div>
          <div className=" signUpSection2 ">
        
            {/* <Button  className="signUpBtn mt-4">
        <img src={facebook}  className="me-3"/>  Continue with Facebook
        </Button> */}
            <WhiteButton
              url={facebook}
              text="Continue with Facebook"
              height='4.063rem'
              width="28.625rem"
            />

            <WhiteButton
              url={google}
              text="Continue with Google"
              height='4.063rem'
              width="28.625rem"
            />

            <WhiteButton
              url={apple}
              text="Continue with Apple"
              height='4.063rem'
              width="28.625rem"
            />

            <div className="formLabelSignUp d-flex justify-content-center  mt-3">
              <hr className="w-25 me-2" />
              OR
              <hr className=" ms-2 w-25" />
            </div>
            {/* <div className="d-flex justify-content-center ">
              {" "} */}
              <PrimaryButton
                text="Sign up with email"
                height="3.5rem"
                width="28.75rem"
              />
            {/* </div> */}

            {/* <Button type="primary" htmlType="submit" className="signUp-form-button">
         Sign up
        </Button> */}
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
 
export default SignUpWithSocailLink;