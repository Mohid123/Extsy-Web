import { Button } from "antd";

type ButtonProp={
    url:string;
    text:string;
}

const WhiteButton = ({url,text}:ButtonProp) => {
    console.log(url)
    return ( 
        <Button  className="signUpBtn mt-4">
        <img src={url}  className="me-3"/> {text}
        </Button>
     );
}
 
export default WhiteButton;