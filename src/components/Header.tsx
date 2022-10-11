import { Button } from "antd";
import logo from "../assets/img/ExtsyLogo.svg"
const Header = () => {
    return ( 
        <div  className="d-flex justify-content-between"><img className="ms-5 mt-3" src={logo} height="25" width="106"/><Button  className="me-5 mt-3 px-4" >login</Button></div>

     );
}
 
export default Header;