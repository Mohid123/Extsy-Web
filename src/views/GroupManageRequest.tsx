import GroupAdminLayout from "../components/groups/groupAdmin/groupAdminLayout";
import GroupManageRequestComp from "../components/groups/groupAdmin/ManageRequests/groupManageRequestComp";

const GroupManageRequest = () => {
    return ( 
        <GroupAdminLayout>
        <GroupManageRequestComp/>
        </GroupAdminLayout>
     );
}
 
export default GroupManageRequest;