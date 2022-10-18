import { Badge} from "antd";
import   {useState} from 'react';
import play from "../../assets/img/Play.svg";
import addUser  from "../../assets/img/AddUser.svg"
import bookMark from "../../assets/img/Bookmark.svg"
import settings from "../../assets/img/Setting.svg"
import groupUser from "../../assets/img/user-group-solid.svg"
const MainViewLeftOption = () => {
    const [show, setShow] = useState(true);
    return ( 
       <>
         <div className="p-5">
                    <span className="d-flex justify-content-between ">
                      
                    <span className=" propertiesTextStyle"><img src={play} className="me-3 "/>Watch Now</span> 
                         <Badge
        className="ms-3"
        count={show ? "new" : 0}
        style={{ backgroundColor: '#EE1D52' }}
      />
                    </span>    
                    <span className="d-flex justify-content-between mt-2">
                      
                    <span className=" propertiesTextStyle"><img src={addUser} className="me-3"/>find someone</span> 
             
                  </span>  
                  <span className="d-flex justify-content-between mt-2">
                      
                  <span className=" propertiesTextStyle"><img src={bookMark} className="me-3"/>save posts</span> 
         
                  </span>  
                  <span className="d-flex justify-content-between mt-2 ">
                      
                  <span className=" propertiesTextStyle"><img src={settings} className="me-3"/>settings</span> 
       
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
       </>
     );
}
 
export default MainViewLeftOption;