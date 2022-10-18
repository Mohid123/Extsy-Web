import AddRemoveMember from "../components/groups/AddRemoveMember/addRemoveMembersComp";
import GroupAdminLayout from "../components/groups/groupAdminLayout";
import GroupAdminLeft from "../components/groups/groupAdminLeft";
import GroupAdminMiddle from "../components/groups/groupAdminMiddle";
import GroupAdminRight from "../components/groups/groupAdminRight";
import GroupManageRequest from "../components/groups/ManageRequests/groupManageRequestComp";

import MainViewHeader from "../components/LandingPageHeader";


const GroupAdmin = () => {
    return (  
       <GroupAdminLayout>
        <GroupAdminMiddle/>
        </GroupAdminLayout>
       
    );
}
 
export default GroupAdmin;