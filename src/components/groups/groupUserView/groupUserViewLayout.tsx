import GroupUserViewLeft from "./groupUserViewLeft/groupUserViewLeft";
import GroupUserViewRight from "./groupUserViewRight/groupUserViewRight";

type Props = {
    
    children?: JSX.Element;
  };
const GroupUserViewLayout = ({children}:Props) => {
    return ( 
        <div className="main">
        <div className=" justify-content-between d-flex ">
        <div className=" ">
            <GroupUserViewLeft/>
        </div>
        <div className="
         ">
        {children}
        </div>
        <div className="">
            <GroupUserViewRight/>
        </div>
        </div>
    </div>
     );
}
 
export default GroupUserViewLayout;