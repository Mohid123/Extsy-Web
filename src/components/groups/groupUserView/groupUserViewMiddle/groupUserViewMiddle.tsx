import PostCardImage from "../../../mainViewComponents/postCardImage";
import GroupAdminMiddleLayout from "../../groupAdmin/groupAdminMiddleLayout";
import CardImage from '../../../../assets/img/postCardImage.png'
const GroupUserViewMiddle = () => {
    return (    <GroupAdminMiddleLayout>
        <PostCardImage  img={CardImage}/>
        
        </GroupAdminMiddleLayout> );
}
 
export default GroupUserViewMiddle;