
import ProfileInfo from "./profileInfo";
import MainViewLeftOption from "./mainViewLeftOption";
import UpcomingEvents from "../../eventPosts/upcomingEvents/upcomingEvents";
import Groups from "./groups";
import { useLocation } from "react-router-dom";
const MainViewLeft = () => {
  const url = useLocation()
    return ( 
        <div className="mainViewLeftProfileInfo ">   
           <ProfileInfo/>
           <br/>
           <MainViewLeftOption/> 
           <br/>
         {url.pathname === '/groups'? "" :<Groups />}
           <br/>
           <UpcomingEvents/>
        </div>
     );
}
 
export default MainViewLeft;