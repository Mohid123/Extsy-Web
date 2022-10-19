import AddRemoveMember from "../components/groups/groupAdmin/AddRemoveMember/addRemoveMembersComp";
import GroupAdminLayout from "../components/groups/groupAdmin/groupAdminLayout";
import GroupAdminLeft from "../components/groups/groupAdmin/groupAdminLeft";
import GroupAdminMiddle from "../components/groups/groupAdmin/groupAdminMiddle";
import GroupAdminRight from "../components/groups/groupAdmin/groupAdminRight";
import GroupManageRequest from "../components/groups/groupAdmin/ManageRequests/groupManageRequestComp";

import MainViewHeader from "../components/LandingPageHeader";


const GroupAdmin = () => {
    return (  
       <GroupAdminLayout>
        <GroupAdminMiddle/>
        </GroupAdminLayout>
       
    );
}
 
export default GroupAdmin;