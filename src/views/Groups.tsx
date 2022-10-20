import GroupComp from "../components/groups/group/GroupMiddleView";
import MainViewHeader from "../components/LandingPageHeader";
import MainViewLeftProfileInfo from "../components/mainViewComponents/mainViewLeft/mainViewLeft";
import MainViewMiddle from "../components/mainViewComponents/mainViewMiddle/mainViewMiddle";
import MainViewRight from "../components/mainViewComponents/mainViewRight/mainViewRight";

const Groups = () => {
    return ( 
        <div className="main">
            <div className="mainViewContent d-flex ">
            <div className="mainViewContent__left  d-flex justify-content-end p-5">
                <MainViewLeftProfileInfo/>
            </div>
            <div className="mainViewContent__middle d-flex justify-content-center pt-5
             ">
                <GroupComp/>
            </div>
            <div className="mainViewContent__right d-flex justify-content-start p-5">
                <MainViewRight/>
            </div>
            </div>
        </div>
     );
}
 
export default Groups;