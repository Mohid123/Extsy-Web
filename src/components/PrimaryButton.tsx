import { Button } from "antd";

type ButtonProp={
    text:string;
    height:string
    width:string;
  
    // onClick:()=>{}
}
const PrimaryButton = ({text,height,width}:ButtonProp) => {

    return ( 
        <Button  htmlType="submit" className="primaryButton px-2"  style={{height:height,width:width}} 
        // onClick={onClick}
        >{text} </Button>
     );
}
 
export default PrimaryButton;