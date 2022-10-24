import ProfileInfo from "../../../mainViewComponents/mainViewLeft/profileInfo";
import GroupUserViewLeftOption from "./groupUserViewLeftOption";

const GroupUserViewLeft = () => {
    return ( 
        <div className="mainViewLeftProfileInfo ">   
        <ProfileInfo/>
       <GroupUserViewLeftOption/>
     </div> 
        );
}
 
export default GroupUserViewLeft;