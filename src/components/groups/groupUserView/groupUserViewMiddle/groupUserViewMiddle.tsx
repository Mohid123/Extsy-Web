import PostCardImage from "../../../mainViewComponents/postCard/postCardImage";
import GroupAdminMiddleLayout from "../../groupAdmin/groupAdminMiddleLayout";
import CardImage from '../../../../assets/img/postCardImage.png'
const GroupUserViewMiddle = () => {
    return (    <GroupAdminMiddleLayout>
      
        <PostCardImage  img={CardImage} width='37.375rem'/>
        
        </GroupAdminMiddleLayout> );
}
 
export default GroupUserViewMiddle;