import React from 'react';
import {Player} from 'video-react'
import PostCardLayout from "./postCardLayout";

const PostCardVideo = () => {
    return ( 
        <PostCardLayout>
               <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
        </PostCardLayout>
     );
}
 
export default PostCardVideo;