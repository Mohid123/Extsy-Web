import {  Image } from "antd";
import PostCardLayout from './postCardLayout';
 type Props={
  img:string
  width:string
 }
const PostCardImage = ({img,width}:Props) => {
    
    return (
      <PostCardLayout>
        <img src={img}  style={{maxWidth:width, width:'100%'}}/>
      </PostCardLayout>
    );
}
 
export default PostCardImage;