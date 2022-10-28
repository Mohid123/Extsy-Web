import { SearchOutlined } from "@ant-design/icons";
import { Input, Card, Divider, Avatar } from "antd";
import logo from "../assets/img/ExtsyLogo.svg"
import homeIcon from "../assets/img/Home.svg"
import bellIcon from "../assets/img/Notification.svg"
import manyPersonIcon from "../assets/img/many person.svg"
import profileIcon from "../assets/img/Profile.svg"
import avatar from "../assets/img/96.svg"
import ellipse from "../assets/img/Ellipse 7.svg"
import "../layout/layout.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const MainViewHeader = () => {
      const [notifications, setNotifications] = useState(false)
      const navigate = useNavigate()
    function handleClick() {
        setNotifications(!notifications)
             //history.push(path);
      }
    // function handleClick(path) {
    //     history.push(path);
    //   }
    return (  

        <div className="mainViewHeader shadow">
                    <div className="headerCentral d-flex py-3 px-0 justify-content-around">
            <div className="mainViewHeader__left    "><img src={logo} style={{ height: "25px", width: "106px", cursor:"pointer"}} alt=""  onClick={()=> navigate('/')} /></div>
            <div className="mainViewHeader__middle "><img src={homeIcon} alt="" onClick={() => { navigate('/') }}/><img src={manyPersonIcon} alt="" onClick={() => { navigate('/user/exploreUser') }}/><img src={bellIcon} alt="" onClick={handleClick}/>
                <img src={profileIcon} alt="" onClick={() => { navigate('/user/userProfile') }} /></div>
            <div className="mainViewHeader__right  "><Input size="small" placeholder="search" prefix={<SearchOutlined />} className="mainViewHeader__headerSearch" /></div>
            {notifications? ( <Card  className="notificationsCard"
                style={{ width: 393 }} >
                    <div className="d-flex justify-content-between">
                        <h5 className="notifications__header">Notifications</h5>
                        <div className="d-flex mt-1">
                            <h6 className="mr-5 notifications__header2">Mark as read</h6>

                        </div>
                    </div>
                    <h6 className="mt-2 notifications__today">Today</h6>
                    <div className="d-flex innerDiv ">
                        <img src={avatar} alt="" style={{width:'39px',marginRight:'10px',marginLeft:'10px'}}/>
                        <div>
                            <div className="d-flex justify-content-between "> <h6 className="mt-2  notifications__name">Jason Roy</h6>
                            <div className="d-flex justify-content-between mr-2"> 
                            <img src={ellipse} alt="" style={{width:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px',marginLeft:'5px',marginRight:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px'}}/></div>
                            </div> 
                       
                        <p className="notifications__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit...</p>
                        <p className="notifications__dateTime">Today, 9:25 pm</p>
                       
                        </div>
                    </div>
                    <h6 className="mt-2">Earlier</h6>
                    <div className="d-flex ">
                        <img src={avatar} alt="" style={{width:'39px',marginRight:'10px',marginLeft:'10px'}}/>
                        <div>
                            <div className="d-flex justify-content-between "> <h6 className="mt-2 notifications__name">Jason Roy</h6>
                            <div className="d-flex justify-content-between"> 
                            <img src={ellipse} alt="" style={{width:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px',marginLeft:'5px',marginRight:'5px'}}/>
                            <img src={ellipse} alt=""  style={{width:'5px'}}/></div>
                            </div> 
                       
                        <p className="notifications__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit...</p>
                        <p className="notifications__dateTime">Today, 9:25 pm</p>
                       
                        </div>
                    </div>
                    <div className="text-center">
                        <h6 className="notifications__seeAll" onClick={() => { navigate('/pushNotifications'); handleClick() }}>See All</h6>
                    </div>

            </Card>)
            :(<></>)}
          
 </div>
        </div>
    );
}

export default MainViewHeader;