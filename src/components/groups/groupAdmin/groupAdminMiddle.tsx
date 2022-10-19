import PostCardImage from "../../mainViewComponents/postCardImage";
import CardImage from '../../../assets/img/postCardImage.png'

import GroupAdminMiddleLayout from "./groupAdminMiddleLayout";
const GroupAdminMiddle = () => {
    return ( 
    
        <GroupAdminMiddleLayout>
       <PostCardImage  img={CardImage}/>
       
       </GroupAdminMiddleLayout>
    
       
     );
}
 
export default GroupAdminMiddle;