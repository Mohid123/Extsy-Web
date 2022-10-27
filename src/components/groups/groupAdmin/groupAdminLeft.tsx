import ProfileInfo from "../../mainViewComponents/mainViewLeft/profileInfo";
import GroupAdminLeftOption from "./groupAdminLeftOption";

const GroupAdminLeft = () => {
    return ( 
        <div className="mainViewLeftProfileInfo ">   
        <ProfileInfo/>
        <br/>
        <GroupAdminLeftOption/> 
     </div>  
     );
}
 
export default GroupAdminLeft;