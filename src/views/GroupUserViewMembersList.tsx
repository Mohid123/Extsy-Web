import GroupUserViewLayout from "../components/groups/groupUserView/groupUserViewLayout";
import ViewMemberComp from "../components/groups/groupUserView/groupUserViewLeft/viewMembers/viewMemberComp";

const GroupUserViewMembersList = () => {
    return ( 
        <GroupUserViewLayout>
            <ViewMemberComp/>
        </GroupUserViewLayout>
     );
}
 
export default GroupUserViewMembersList;