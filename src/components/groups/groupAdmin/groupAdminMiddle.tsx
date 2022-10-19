import PostCardImage from "../../mainViewComponents/postCardImage";
import CardImage from '../../../assets/img/postCardImage.png'

import GroupAdminMiddleLayout from "./groupAdminMiddleLayout";
const GroupAdminMiddle = () => {
    return ( 
    
        <GroupAdminMiddleLayout>
          <div className="p-5">
          <PostCardImage  img={CardImage} />
          </div>
       </GroupAdminMiddleLayout>
    
       
     );
}
 
export default GroupAdminMiddle;