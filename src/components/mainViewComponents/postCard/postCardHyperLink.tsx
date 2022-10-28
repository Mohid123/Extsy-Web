import PostCardLayout from './postCardLayout'
const PostCardHyperLink = () => {
    return ( 
        <PostCardLayout>
          <div className='hyperLinkCard'>
            <a className='hyperLinkCard__link' href='www.google.com'>www.google.com.pk</a>
          </div>
        </PostCardLayout>
     );
}
 
export default PostCardHyperLink;