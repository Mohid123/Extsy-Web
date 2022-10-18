import {  Image } from "antd";
import PostCardLayout from './postCardLayout';
 type Props={
  img:string
 }
const PostCardImage = ({img}:Props) => {
    
    return (
      <PostCardLayout>
       

        <Image src={img} />
      
      </PostCardLayout>
    );
}
 
export default PostCardImage;