import MainViewRight from "./mainViewRight/mainViewRight";
import MainViewLeftProfileInfo from "./mainViewLeft/mainViewLeft";
import MainViewHeader from "../LandingPageHeader";

type Props = {
    children?: JSX.Element;
}
const MainViewLayout = ({children}:Props) => {
    return ( 
        <div className="main">
         
        <div className="mainViewContent d-flex ">
        
        <div className="mainViewContent__left  d-flex justify-content-end p-3">
            <MainViewLeftProfileInfo/>
        </div>
        <div className="mainViewContent__middle d-flex justify-content-center
         ">
            {children}
            
        </div>
        <div className="mainViewContent__right d-flex justify-content-start p-3">
            <MainViewRight/>
        </div>
        </div>
    </div>
     );
}
 
export default MainViewLayout;