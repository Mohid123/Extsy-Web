import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import logo from "../assets/img/ExtsyLogo.svg"
import homeIcon from "../assets/img/Home.svg"
import bellIcon from "../assets/img/Notification.svg"
import manyPersonIcon from "../assets/img/many person.svg"
import profileIcon from "../assets/img/Profile.svg"
import { useHistory } from "react-router-dom";
const MainViewHeader = () => {
    const history = useHistory();
    // function handleClick(path) {
    //     history.push(path);
    //   }
    return (  
        <div className="mainViewHeader d-flex p-3 justify-content-between">
            <div className="mainViewHeader__left    "><img src={logo} style={{height:"25px", width:"106px"}} alt=""/></div>
            <div  className="mainViewHeader__middle "><img src={homeIcon} alt=""/><img src={manyPersonIcon} alt=""/><img src={bellIcon} alt=""/>
            <img src={profileIcon} alt=""  onClick={() => { history.push('/auth/userProfile') }}/></div>
            <div  className="mainViewHeader__right  "><Input size="small" placeholder="search" prefix={ <SearchOutlined/>} className="mainViewHeader__headerSearch" /></div>
        </div>
    );
}
 
export default MainViewHeader;