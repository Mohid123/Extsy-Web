import {  Image } from "antd";
import postCardImage from '../../assets/img/postCardImage.png'
import PostCardLayout from './postCardLayout';
const PostCardImage = () => {
    
    return (
      <PostCardLayout>
       

        <Image src={postCardImage} />
      
      </PostCardLayout>
    );
}
 
export default PostCardImage;