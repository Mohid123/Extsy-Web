import StoryCard from "./storyCard";
import PostCardImage from "./postCardImage";
import PostCardText from "./PostCardText";
import PostCardVideo from "./postCardVideo";
import postCardImage from '../../assets/img/postCardImage.png'
import ShareContentComp from "./shareContentComp";
const MainViewMiddle = () => {
  return (
    <div className="mainViewMiddle  ">
      <div className="mainViewMiddle__mainViewStories  pt-2">
        <StoryCard />
      </div>
      <ShareContentComp />
      <div className="p-5">
        <PostCardImage img={postCardImage} />
        <br />
        <PostCardText />
        <br />
        <PostCardVideo />
      </div>
    </div>
  );
}
 
export default MainViewMiddle;