import MainViewRight from "./mainViewRight/mainViewRight";
import MainViewLeftProfileInfo from "./mainViewLeft/mainViewLeft";
import MainViewHeader from "../LandingPageHeader";

type Props = {
    children?: JSX.Element;
}
const MainViewLayout = ({children}:Props) => {
    return ( 
        <div className="main">
         
        <div className=" justify-content-between d-flex mt-5">
        
        <div className="viewLeft  ">
            <MainViewLeftProfileInfo/>
        </div>
        <div className="viewMiddle mx-2">
            {children}
            
        </div>
        <div className="viewRight ">
            <MainViewRight/>
        </div>
        </div>
    </div>
     );
}
 
export default MainViewLayout;