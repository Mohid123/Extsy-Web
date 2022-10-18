import GroupAdminLeft from "../components/groups/groupAdminLeft";
import GroupAdminMiddle from "../components/groups/groupAdminMiddle";
import GroupAdminRight from "../components/groups/groupAdminRight";

import MainViewHeader from "../components/LandingPageHeader";


const GroupAdmin = () => {
    return (  
        <div className="main">
        <MainViewHeader/>
        <hr className="m-0"/>
        <div className="mainViewContent d-flex ">
        <div className="mainViewContent__left  d-flex justify-content-end p-5 sticky-top">
            <GroupAdminLeft/>
        </div>
        <div className="mainViewContent__middle d-flex justify-content-center
         ">
           <GroupAdminMiddle/>
        </div>
        <div className="mainViewContent__right d-flex justify-content-start p-5">
            <GroupAdminRight/>
        </div>
        </div>
    </div>
    );
}
 
export default GroupAdmin;