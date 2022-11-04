import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthCredentials, loginUser } from "../store/reducers/profileSlice";
import {useEffect} from 'react'

type ButtonProp={
    text:string;
    height:string
    width:string;
    email?: string | any,
    password?: string | any
}

const PrimaryButton = ({text, height, width, email, password}: ButtonProp) => {
    const dispatch = useDispatch<any>();
    const logInStatus = useSelector((state: any) => state?.profile?.status);
    let navigate = useNavigate(); 
    const logIn = () => {
        const payload: AuthCredentials = {
          email: email,
          password: password
        }
        dispatch(loginUser(payload))
      }

      useEffect(()=>{
        if(logInStatus === 'succeeded') {
            navigate('/')
        }
      },[logInStatus])

    return ( 
        <Button  htmlType="submit" className="primaryButton px-2"  style={{height:height,width:width}} 
        onClick={logIn}
        >{text} </Button>
     );
}
 
export default PrimaryButton;