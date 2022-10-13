import { Avatar, Badge, Image } from "antd";
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
<Avatar
      src={
        <Image
          src="https://joeschmoe.io/api/v1/random"
          style={{
            width: 36,
          }}
        /> }
        />
 
<p className="m-0 mt-2 p-1 textStyle ">
Ali raza <br/><span className="textStyle__textStyleSmall">@ali_raza</span> 
</p>
</div>

<div className="d-flex text-center mt-5 justify-content-around">
    <div className="">
        <p className="m-0 p-0 textStyle__following ">Following</p>
        <p className="m-0 p-0 fw-bold textStyle ">4k</p>
    </div>
    <div className="">
        <p  className="m-0 p-0 textStyle__following ">Followers</p>
        <p  className="m-0 p-0 fw-bold textStyle">43k</p>
    </div>
</div>
            </div>
           
                <div className="p-5">
                    <span className="d-flex justify-content-start ">
                      
                        <img src={play} className="me-3 "/> <span className=" propertiesTextStyle">Watch Now</span> 
                         <Badge
        className="ms-3"
        count={show ? "new" : 0}
        style={{ backgroundColor: '#EE1D52' }}
      />
                    </span>    
                    <span className="d-flex justify-content-start mt-2">
                      
                      <img src={addUser} className="me-3"/><span className=" propertiesTextStyle">find someone</span> 
             
                  </span>  
                  <span className="d-flex justify-content-start mt-2">
                      
                      <img src={bookMark} className="me-3"/><span className=" propertiesTextStyle">save posts</span> 
         
                  </span>  
                  <span className="d-flex justify-content-start mt-2 ">
                      
                      <img src={settings} className="me-3"/><span className=" propertiesTextStyle">settings</span> 
       
                 </span>  
                    </div>
                  <div className="px-5  propertiesTextStyle__group">Groups</div>
                  <div  className="p-5 pt-4">
                  <span className="d-flex justify-content-start ">
                      
                      <img src={groupUser} className="me-3 "/><span className="propertiesTextStyle">Group 1</span> 
     
                  </span>
                  <span className="d-flex justify-content-start mt-2">
                      
                      <img src={groupUser} className="me-3"/> <span className="propertiesTextStyle">Group 1</span> 
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