
import userShield from "../../../assets/img/user-shield-solid.svg";
import addUser  from "../../../assets/img/AddUser.svg"
import userGroup from "../../../assets/img/userGroup.svg"
import settings from "../../../assets/img/Setting.svg"
const  GroupAdminLeftOption= () => {
    return (  
        <>
        <div className="p-5">
            <p>Manage Group</p>
                    <span className="d-flex justify-content-between ">
                      
                    <span className=" propertiesTextStyle"><img src={addUser} className="me-3 "/>Manage Requests</span> 
      
                    </span>    
                    <span className="d-flex justify-content-between mt-2">
                      
                    <span className=" propertiesTextStyle"><img src={userGroup} className="me-3"/>Add/Remove Members</span> 
             
                  </span>  
                  <span className="d-flex justify-content-between mt-2">
                      
                  <span className=" propertiesTextStyle"><img src={userShield} className="me-3"/>Make Moderator</span> 
         
                  </span>  
                  <span className="d-flex justify-content-between mt-2 ">
                      
                  <span className=" propertiesTextStyle"><img src={settings} className="me-3"/>Group settings</span> 
       
                 </span>  
                    </div>
        </>
    );
}
 
export default GroupAdminLeftOption ;