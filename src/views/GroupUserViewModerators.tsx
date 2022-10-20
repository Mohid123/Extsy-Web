import GroupUserViewLayout from "../components/groups/groupUserView/groupUserViewLayout";
import ViewModeratorsComp from "../components/groups/groupUserView/groupUserViewLeft/viewModerators/viewModeratorsComp";

const GroupUserViewModerators = () => {
    return ( 
        <GroupUserViewLayout>
            <ViewModeratorsComp/>
        </GroupUserViewLayout>
     );
}
 
export default GroupUserViewModerators;