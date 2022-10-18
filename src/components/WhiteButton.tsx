import { Button } from "antd";

type ButtonProp={
    url:string;
    text:string;
    height:string
    width:string;

}

const WhiteButton = ({url,text,height,width}:ButtonProp) => {
    console.log(url)
    return ( 
        <Button  className="whiteBtn mt-4" style={{height:height,width:width}}>
      {url? <img src={url}  className="me-3"/>:"" }{text}
        </Button>
     );
}
 
export default WhiteButton;