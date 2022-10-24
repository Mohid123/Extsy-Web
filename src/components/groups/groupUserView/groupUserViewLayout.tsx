import GroupUserViewLeft from "./groupUserViewLeft/groupUserViewLeft";
import GroupUserViewRight from "./groupUserViewRight/groupUserViewRight";

type Props = {
    
    children?: JSX.Element;
  };
const GroupUserViewLayout = ({children}:Props) => {
    return ( 
        <div className="main">
        <div className="mainViewContent d-flex ">
        <div className="mainViewContent__left  d-flex justify-content-end p-5">
            <GroupUserViewLeft/>
        </div>
        <div className="mainViewContent__middle d-flex justify-content-center
         ">
        {children}
        </div>
        <div className="mainViewContent__right d-flex justify-content-start p-5">
            <GroupUserViewRight/>
        </div>
        </div>
    </div>
     );
}
 
export default GroupUserViewLayout;