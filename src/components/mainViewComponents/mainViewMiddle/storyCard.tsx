
import { useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import AddStory from "../../stories/addStory"
import UserStory from "../../stories/userStory"
import addStoryIcon from "../../../assets/img/add story icon.png"
import {  Card, Divider,  Button, Row, Col, Modal } from "antd";
import './storyCard.scss'

// type Props = {
//   img: string;
//   title: string;
// }
const StoryCard = () => {
  const [addStory, setAddStory] = useState(false)
  const [userStory, setUserStory] = useState(false)
  
  const containerRef: any = useRef(null);
  const { events } = useDraggable(containerRef);

  const someNumbers = [1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
function handleClick (){
setAddStory(!addStory)
setUserStory(false)
}
const handleCancel = () => {
  setUserStory(false);
};
  return (
    <div className="storyContainer" {...events} ref={containerRef}>
        {addStory? (<AddStory/>) :userStory? (
       <Modal open={userStory} onCancel={handleCancel}> <UserStory/> </Modal>) :(<></>)}
      <span className="me-2 userStory " onClick={handleClick}>
        
                      <img alt='rounded-img' className='circular-img-frndSuggestion cursor ' style={{width:'4.063rem',height:"65px"}} src={'https://img.posterlounge.co.uk/images/l/1898617.jpg'}/>

       
        <p className="text-center container__userName ">your story</p>
         <img src={addStoryIcon} className='storyIcon cursor' alt=""  onClick={handleClick}/>
      </span>

      {

        someNumbers.map((i) => (
          <span className="me-2 " onClick={()=>{setUserStory(!userStory);setAddStory(false)}}>

<img alt='rounded-img' className={ i <=2 ? 'circular-img-frndSuggestion container__storyAvatar cursor':  'circular-img-frndSuggestion cursor '}style={{width:'4.063rem',height:"65px"}} src={'https://img.posterlounge.co.uk/images/l/1898617.jpg'}/>

            <p className="text-center  container__userName">user</p>
          </span>

        ))
      }
     
     
    </div>
    
  );
}

export default StoryCard;