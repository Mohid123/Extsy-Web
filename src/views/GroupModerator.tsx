import GroupAdminLayout from "../components/groups/groupAdmin/groupAdminLayout";
import GroupModeratorComp from "../components/groups/groupAdmin/groupModerator/groupModeratorComp";

const GroupModerator = () => {
    return ( 
        <GroupAdminLayout>
        <GroupModeratorComp/>
        </GroupAdminLayout>
     );
}
 
export default GroupModerator;