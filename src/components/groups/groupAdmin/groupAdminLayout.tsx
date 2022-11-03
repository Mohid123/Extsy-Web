import MainViewHeader from "../../LandingPageHeader";
import GroupAdminLeft from "./groupAdminLeft";
import GroupAdminRight from "./groupAdminRight";

type Props = {
    
    children?: JSX.Element;
  };
const GroupAdminLayout = ({children}:Props) => {
 
    return ( 
        <div className="main">
        <div className="  justify-content-between d-flex ">
        <div className="  d-flex justify-content-end p-5">
            <GroupAdminLeft/>
        </div>
        <div className=" d-flex justify-content-center">
        {children}
        </div>
        <div className="   d-flex justify-content-start p-5">
            <GroupAdminRight/>
        </div>
        </div>
    </div>
    );
}
 
export default GroupAdminLayout;