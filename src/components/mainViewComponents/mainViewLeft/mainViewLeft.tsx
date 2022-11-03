
import ProfileInfo from "./profileInfo";
import MainViewLeftOption from "./mainViewLeftOption";
import UpcomingEvents from "../../eventPosts/upcomingEvents/upcomingEvents";
import Groups from "./groups";
import { useLocation } from "react-router-dom";
const MainViewLeft = () => {
  const url = useLocation()
    return ( 
        <div className="mainViewLeftProfileInfo mx-2">   
           <ProfileInfo/>
           <br/>
           <MainViewLeftOption/> 
           <br/>
         {url.pathname === '/groups'? "" :<Groups />}
           <br/>
           <UpcomingEvents/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
        </div>
     );
}
 
export default MainViewLeft;