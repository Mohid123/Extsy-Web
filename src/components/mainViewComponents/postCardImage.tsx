import {  Image } from "antd";
import PostCardLayout from './postCardLayout';
 type Props={
  img:string
  width:string
 }
const PostCardImage = ({img,width}:Props) => {
    
    return (
      <PostCardLayout>
        <Image src={img}  style={{width:width}}/>
      </PostCardLayout>
    );
}
 
export default PostCardImage;