import GroupMemberInfo from "./groupMembersInfo";
type Props = {
    
    children?: JSX.Element;
  };
const  GroupAdminMiddleLayout= ({children}:Props) => {
    return (  
        <div className="pt-5">
        <div className='coverImg' ></div>

        <GroupMemberInfo/>
          {children}
       </div>
    );
}
 
export default GroupAdminMiddleLayout;