import MainViewHeader from "../../LandingPageHeader";
import GroupAdminLeft from "./groupAdminLeft";
import GroupAdminRight from "./groupAdminRight";

type Props = {
    
    children?: JSX.Element;
  };
const GroupAdminLayout = ({children}:Props) => {
 
    return ( 
        <div className="main">
        <div className="mainViewContent d-flex ">
        <div className="mainViewContent__left  d-flex justify-content-end p-5 sticky-top">
            <GroupAdminLeft/>
        </div>
        <div className="mainViewContent__middle d-flex justify-content-center
         ">
        {children}
        </div>
        <div className="mainViewContent__right d-flex justify-content-start p-5">
            <GroupAdminRight/>
        </div>
        </div>
    </div>
    );
}
 
export default GroupAdminLayout;