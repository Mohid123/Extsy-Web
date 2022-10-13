import MainViewHeader from "../components/LandingPageHeader";
import MainViewLeftProfileInfo from "../components/mainViewComponents/mainViewLeftProfileInfo";
import MainViewMiddle from "../components/mainViewComponents/mainViewMiddle";
import MainViewRight from "../components/mainViewComponents/mainViewRight";

const Main = () => {
    return ( 
        <div className="main">
            <MainViewHeader/>
            <hr className="m-0"/>
            <div className="mainViewContent d-flex ">
            <div className="mainViewContent__left  d-flex justify-content-end p-5 sticky-top">
                <MainViewLeftProfileInfo/>
            </div>
            <div className="mainViewContent__middle d-flex justify-content-center
             ">
                <MainViewMiddle/>
            </div>
            <div className="mainViewContent__right d-flex justify-content-start p-5">
                <MainViewRight/>
            </div>
            </div>
        </div>
     );
}
 
export default Main;