import StoryCard from "./storyCard";
import PostCardImage from "../postCard/postCardImage";
import PostCardText from "../postCard/PostCardText";
import PostCardVideo from "../postCard/postCardVideo";
import postCardImage from '../../../assets/img/postCardImage.png'
import ShareContentComp from "./shareContentComp";
import PostCardHyperLink from "../postCard/postCardHyperLink";
const MainViewMiddle = () => {
  return (
    <div className="mainViewMiddle mt-5 ">
      <div className="mainViewMiddle__mainViewStories  pt-2">
        <StoryCard />
      </div>
      <ShareContentComp />
      <div className="p-5">
        <PostCardImage img={postCardImage} width='34.375rem'/>
        <br />
        <PostCardText />
        <br />
        <PostCardHyperLink/>
        <br/>
        <PostCardVideo />
      </div>
    </div>
  );
}
 
export default MainViewMiddle;