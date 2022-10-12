import { Avatar, Badge } from "antd";
import  React, {useState} from 'react';
import play from "../../assets/img/Play.svg";
import addUser  from "../../assets/img/AddUser.svg"
import bookMark from "../../assets/img/Bookmark.svg"
import settings from "../../assets/img/Setting.svg"
import groupUser from "../../assets/img/user-group-solid.svg"
const MainViewLeftProfileInfo = () => {
    const [show, setShow] = useState(true);
    return ( 
        <div className="mainViewLeftProfileInfo ">
            <div className="mainViewLeftProfileInfo__mainContainer">
<div className="mainViewLeftProfileInfo__mainContainer__image" ></div>
<div className="d-flex mainViewLeftProfileInfo__mainContainer__profileAvatar">
    <Avatar size={40}>USER</Avatar>
 
<p className="m-0 p-0">
Ali raza <br/>@ali_raza
</p>
</div>

<div className="d-flex text-center mt-5 justify-content-around">
    <div className="">
        <p className="m-0 p-0 ">Following</p>
        <p className="m-0 p-0 fw-bold ">4k</p>
    </div>
    <div className="">
        <p  className="m-0 p-0 ">Followers</p>
        <p  className="m-0 p-0 fw-bold ">43k</p>
    </div>
</div>
            </div>
           
                <div className="p-5">
                    <span className="d-flex justify-content-start ">
                      
                        <img src={play} className="me-3"/> Watch Now 
                         <Badge
        className="ms-3"
        count={show ? "new" : 0}
        style={{ backgroundColor: '#EE1D52' }}
      />
                    </span>    
                    <span className="d-flex justify-content-start mt-2">
                      
                      <img src={addUser} className="me-3"/>find someone
             
                  </span>  
                  <span className="d-flex justify-content-start mt-2">
                      
                      <img src={bookMark} className="me-3"/>Saved posts
         
                  </span>  
                  <span className="d-flex justify-content-start mt-2 ">
                      
                      <img src={settings} className="me-3"/>Settings
       
                 </span>  
                    </div>
                  <div className="px-5">Groups</div>
                  <div  className="p-5 pt-4">
                  <span className="d-flex justify-content-start ">
                      
                      <img src={groupUser} className="me-3"/> Group 1
     
                  </span>
                  <span className="d-flex justify-content-start mt-2">
                      
                      <img src={groupUser} className="me-3"/> Group 1
                      <Badge
        className="ms-5"
        count={show ? 109 : 0}
        style={{ backgroundColor: '#EE1D52' }}
      />
                  </span>
                  </div>

    
           
            
        </div>
     );
}
 
export default MainViewLeftProfileInfo;