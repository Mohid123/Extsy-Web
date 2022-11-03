import MainViewRight from "./mainViewRight/mainViewRight";
import MainViewLeftProfileInfo from "./mainViewLeft/mainViewLeft";
import MainViewHeader from "../LandingPageHeader";

type Props = {
    children?: JSX.Element;
}
const MainViewLayout = ({children}:Props) => {
    return ( 
        <div className="main">
         
        <div className="d-flex  justify-content-between align-items-start mt-5 position-fixed">
        
        <div className="viewLeft  custom-scrollbar-css">
            <MainViewLeftProfileInfo/>
        </div>
        <div className="viewMiddle mx-2 custom-scrollbar-css">
            {children}
            
        </div>
        <div className="viewRight custom-scrollbar-css ">
            <MainViewRight/>
        </div>
        </div>
    </div>
     );
}
 
export default MainViewLayout;