import GroupMemberInfo from "./groupMembersInfo/groupMembersInfo";
type Props = {
    
    children?: JSX.Element;
  };
const  GroupAdminMiddleLayout= ({children}:Props) => {
    return (  
        <div className="pt-5">
        <div className='coverImg' ></div>
        <GroupMemberInfo/>
        <div className="pt-4">
        {children}
        </div>
         
       </div>
    );
}
 
export default GroupAdminMiddleLayout;