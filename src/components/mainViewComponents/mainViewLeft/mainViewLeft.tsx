
import ProfileInfo from "./profileInfo";
import MainViewLeftOption from "./mainViewLeftOption";
import UpcomingEvents from "../../eventPosts/upcomingEvents/upcomingEvents";
const MainViewLeft = () => {

    return ( 
        <div className="mainViewLeftProfileInfo ">   
           <ProfileInfo/>
           <br/>
           <MainViewLeftOption/> 
           <br/>
           <UpcomingEvents/>
        </div>
     );
}
 
export default MainViewLeft;