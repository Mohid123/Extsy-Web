import PostCardImage from "../../../mainViewComponents/postCard/postCardImage";
import GroupAdminMiddleLayout from "../../groupAdmin/groupAdminMiddleLayout";
import CardImage from '../../../../assets/img/postCardImage.png'
const GroupUserViewMiddle = () => {
    return (
      <GroupAdminMiddleLayout>
        <div className="  manageRequestShadow" style={{ padding: "15px 38px" }}>
          <PostCardImage img={CardImage} width="34.375rem" />
        </div>
      </GroupAdminMiddleLayout>
    );
}
 
export default GroupUserViewMiddle;