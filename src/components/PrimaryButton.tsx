import { Button } from "antd";

type ButtonProp={
    text:string;
    height:string
    width:string;
    background:string
}
const PrimaryButton = ({text,height,width,background}:ButtonProp) => {
    return ( 
        <Button  htmlType="submit" className="primaryButton"  style={{height:height,width:width,background:background}}>
       {text}
      </Button>
     );
}
 
export default PrimaryButton;