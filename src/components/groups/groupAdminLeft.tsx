import ProfileInfo from "../mainViewComponents/profileInfo";
import GroupAdminLeftOption from "./groupAdminLeftOption";

const GroupAdminLeft = () => {
    return ( 
        <div className="mainViewLeftProfileInfo ">   
        <ProfileInfo/>
        <GroupAdminLeftOption/> 
     </div>  
     );
}
 
export default GroupAdminLeft;