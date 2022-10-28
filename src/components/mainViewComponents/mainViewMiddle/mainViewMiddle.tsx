import StoryCard from "./storyCard";
import PostCardImage from "../postCard/postCardImage";
import PostCardText from "../postCard/PostCardText";
import PostCardVideo from "../postCard/postCardVideo";
import postCardImage from '../../../assets/img/postCardImage.png'
import ShareContentComp from "./shareContentComp";
import PostCardHyperLink from "../postCard/postCardHyperLink";
import Sponsor from "../../sponsorAd/sponsor";
import PostCardPolls from "../postCard/postCardPolls";
import PostCardOption from "../postCard/postCardOption";
const MainViewMiddle = () => {
  return (
    <div className="mainViewMiddle mt-5 ">
      <div className="p-5 pt-0">
        <div className="mainViewMiddle__mainViewStories  pt-2">
          <StoryCard />
        </div>
        <ShareContentComp />

        <br />
        <PostCardImage img={postCardImage} width="36.25rem" />
        <br />
        <Sponsor />
        <br />
        <PostCardPolls />
        <br />
        <PostCardOption/>
        <br/>
        <PostCardText />
        <br />
        <PostCardHyperLink />
        <br />
        <PostCardVideo />
      </div>
    </div>
  );
}
 
export default MainViewMiddle;