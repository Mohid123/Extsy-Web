import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Card, Badge } from "antd";
import logo from "../assets/img/ExtsyLogo.svg"
// import HomeIcon from "../assets/img/HomeIcon.svg"
// import NFT from "../assets/img/NFT.svg"
// import homeManyPersonIcon from "../assets/img/homeManyPersonIcon.svg"
// import p2pHeader from "../assets/img/p2pHeader.svg"
import avatar from "../assets/img/96.svg"
import ellipse from "../assets/img/Ellipse 7.svg"
import bellIcon from "../assets/img/Notification.svg"
import Home from "../assets/img/Frame 48095748.svg"
import P2P from "../assets/img/Frame 48095751.svg"
import Explore from "../assets/img/Frame 48095752.svg"
import MarketPlace from "../assets/img/Frame 48095754.svg"
import ExploreInactive from "../assets/img/Frame 48095749.svg"
import MarketPlaceInactive from "../assets/img/Frame 48095750.svg"
import HomeInactive from "../assets/img/Frame 48095753.png"
import P2pInactive from "../assets/img/Frame P2p.svg"
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
     const [home, setHome] = useState(true);
     const [explore, setExplore] = useState(false);
     const [marketPlace, setMarketPlace] = useState(false);
     const [p2p, setP2p] = useState(false);
    return (
      <div className="mainViewHeader shadow ">
        <div className="headerCentral d-flex py-3 px-0 justify-content-between align-items-center">
          <div className="mainViewHeader__left    ">
            <img
              src={logo}
              style={{ height: "25px", width: "106px", cursor: "pointer" }}
              alt=""
             
              onClick={() => { navigate("/"); setHome(true);setExplore(false);setMarketPlace(false);setP2p(false)}}
            />
          </div>
          <div className="mainViewHeader__middle  ">
            <div className=" text-center cursor"  onClick={() => {
                {navigate("/"); setHome(true);setExplore(false);setMarketPlace(false);setP2p(false)}
              }}>
                {home?( <img src={Home} alt="" />):( <img src={HomeInactive} alt="" />)}
           
           
            </div>
            <div className=" text-center cursor"  onClick={() => {
                {navigate("/user/exploreUser"); setHome(false);setExplore(true);setMarketPlace(false);setP2p(false)}
              }}>
              {explore?( <img src={Explore} alt="" />):(<img src={ExploreInactive} alt="" />)}
            
           
            {/* <p className="m-0 p-0 headerIconText">Explore</p> */}
            </div>
            <div className=" text-center cursor "  onClick={() => {
                {navigate("/nft/marketplace"); setHome(false);setExplore(false);setMarketPlace(true);setP2p(false)}
              }}>
                {marketPlace?( <img src={MarketPlace} alt="" />):(  <img src={MarketPlaceInactive} alt=""  />)}
          
           
            {/* <p className="m-0 p-0 headerIconText">Marketplace</p> */}
            </div>
            <div className=" text-center cursor " onClick={() => {
               { navigate("/p2pbuyer"); setHome(false);setExplore(false);setMarketPlace(false);setP2p(true)}
              }}>
              {p2p?( <img src={P2P} alt="" />):( <img
            className=""
              src={P2pInactive}
              alt=""
             
            />)}
           
            
              {/* <p className="m-0 p-0 headerIconText">P2P</p> */}
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
            <Badge dot={show}  className='buyerSellerBadge  me-3 cursor'>
              <img src={bellIcon} className="" onClick={() => {
               handleClick();
              }} alt=''/>
            </Badge>
            <img alt='rounded-img' className='circular-img-buyerSeller cursor' src={'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'}  onClick={() => {
                navigate("/user/userProfile");
              }}/>
          </div>
          {notifications? ( <Card  className="notificationsCard"
                style={{ width: 393 }} >
                    <div className="d-flex justify-content-between">
                        <h5 className="notifications__header">Notifications</h5>
                        <div className="d-flex mt-1">
                            <h6 className="mr-5 notifications__header2">Mark as read</h6>

                        </div>
                    </div>
                    <h6 className="mt-2 notifications__today">Today</h6>
                    <div className="d-flex innerDiv2 ">
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