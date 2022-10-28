import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Card, Divider, Avatar, Badge } from "antd";
import logo from "../assets/img/ExtsyLogo.svg"
import HomeIcon from "../assets/img/HomeIcon.svg"
import NFT from "../assets/img/NFT.svg"
import homeManyPersonIcon from "../assets/img/homeManyPersonIcon.svg"
import p2pHeader from "../assets/img/p2pHeader.svg"
import avatar from "../assets/img/96.svg"
import ellipse from "../assets/img/Ellipse 7.svg"
import bellIcon from "../assets/img/Notification.svg"
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
     const [isActive, setIsActive]= useState(false);
     const [show, setShow] = useState(true);
    return (
      <div className="mainViewHeader shadow ">
        <div className="headerCentral d-flex py-3 px-0 justify-content-between align-items-center">
          <div className="mainViewHeader__left    ">
            <img
              src={logo}
              style={{ height: "25px", width: "106px", cursor: "pointer" }}
              alt=""
              onClick={() => navigate("/")}
            />
          </div>
          <div className="mainViewHeader__middle  bg-info">
            <div className=" text-center">
            <img src={HomeIcon} alt="" />
            <p className="m-0 p-0 headerIconText">HOME</p>
            </div>
            <div className=" text-center">
            <img src={homeManyPersonIcon} alt="" />
            <p className="m-0 p-0 headerIconText">Explore</p>
            </div>
            <div className=" text-center ">
            <img src={NFT} alt="" onClick={handleClick} />
            <p className="m-0 p-0 headerIconText">Marketplace</p>
            </div>
            <div className=" text-center ">
            <img
            className=""
              src={p2pHeader}
              alt=""
              onClick={() => {
                navigate("/auth/userProfile");
              }}
            />
              <p className="m-0 p-0 headerIconText">P2P</p>
            </div>
          </div>
          <div className="mainViewHeader__right d-flex align-items-center">
            {/* search */}
            <div className={`input-box ${ isActive ? "open" :""}`}>
  <input type="text" placeholder="Search..." />
  <span className={`${ isActive ? "icon":"iconCSS"}`} onClick={()=>setIsActive(!isActive)}>
    {/* <i className="uil uil-search search-icon" /> */}
    <SearchOutlined style={{ fontSize: '23px' }}  className=" search-icon"/>
  </span>
  <CloseOutlined style={{ fontSize: '12px' }}  className="uil uil-times close-icon"  onClick={()=>setIsActive(!isActive)}/>
  {/* <i className="uil uil-times close-icon"  onClick={()=>setIsActive(!isActive)}/> */}
</div>
            {/* search */}
            <Badge dot={show}  className='buyerSellerBadge  me-3'>
              <img src={bellIcon} className="" />
            </Badge>
            <img alt='rounded-img' className='circular-img-buyerSeller' src={'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'}/>
          </div>
          {notifications ? (
            <Card className="notificationsCard" style={{ width: 393 }}>
              <div className="d-flex justify-content-between">
                <h5>Notifications</h5>
                <div className="d-flex mt-1">
                  <h6 className="mr-5">Mark as read</h6>
                  <h6 className="ml-4" style={{ marginLeft: "30px" }}>
                    See all
                  </h6>
                </div>
              </div>
              <h6 className="mt-2">Today</h6>
              <div className="d-flex innerDiv ">
                <img
                  src={avatar}
                  alt=""
                  style={{
                    width: "39px",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
                <div>
                  <div className="d-flex justify-content-between ">
                    {" "}
                    <h6 className="mt-2">Jason Roy</h6>
                    <div className="d-flex justify-content-between mr-2">
                      <img src={ellipse} alt="" style={{ width: "5px" }} />
                      <img
                        src={ellipse}
                        alt=""
                        style={{
                          width: "5px",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                      />
                      <img src={ellipse} alt="" style={{ width: "5px" }} />
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit...
                  </p>
                  <p>Today, 9:25 pm</p>
                </div>
              </div>
              <h6 className="mt-2">Earlier</h6>
              <div className="d-flex ">
                <img
                  src={avatar}
                  alt=""
                  style={{
                    width: "39px",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
                <div>
                  <div className="d-flex justify-content-between ">
                    {" "}
                    <h6 className="mt-2">Jason Roy</h6>
                    <div className="d-flex justify-content-between">
                      <img src={ellipse} alt="" style={{ width: "5px" }} />
                      <img
                        src={ellipse}
                        alt=""
                        style={{
                          width: "5px",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                      />
                      <img src={ellipse} alt="" style={{ width: "5px" }} />
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit...
                  </p>
                  <p>Today, 9:25 pm</p>
                </div>
              </div>
            </Card>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
}

export default MainViewHeader;