import { Badge } from "antd";
import { useState } from "react";

type Props={
    badge?: boolean;
    url:string;
    text:string;
    onClick:()=>void
}
const NavigateOption = ({badge,url,text,onClick}:Props) => {
    const [show, setShow] = useState(true);
    return ( 
        <span className="d-flex justify-content-between mt-2 ">
                      
        <span className=" propertiesTextStyle" onClick={onClick}><img src={url} className="me-3"/>{text}</span> 
   {badge &&           
   <Badge
        className="ms-3"
        count={show ? "new" : 0}
        style={{ backgroundColor: '#EE1D52' }}
      />}
       </span> 
     );
}
 
export default NavigateOption;
