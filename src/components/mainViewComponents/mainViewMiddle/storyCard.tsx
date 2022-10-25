
import { useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import AddStory from "../../stories/addStory"
import UserStory from "../../stories/userStory"
import addStoryIcon from "../../../assets/img/add story icon.png"
import './storyCard.scss'

type Props = {
  img: string;
  title: string;
}
const StoryCard = () => {
  const [addStory, setAddStory] = useState(false)
  const [userStory, setUserStory] = useState(false)
  
  // We will use React useRef hook to reference the wrapping div:
  const containerRef: any = useRef(null);
  // Now we pass the reference to the useDraggable hook:
  const { events } = useDraggable(containerRef);

  const someNumbers = [1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
function handleClick (){
  
setAddStory(!addStory)
}
  return (
    // add reference and events to the wrapping div
    <div className="container" {...events} ref={containerRef}>
        {addStory? (<AddStory/>) :userStory? (<UserStory/>) :(<></>)}
      <span className="me-2 userStory" onClick={handleClick}>
        
                      <img alt='rounded-img' className='circular-img-frndSuggestion ' style={{width:'4.063rem',height:"65px"}} src={'https://img.posterlounge.co.uk/images/l/1898617.jpg'}/>

       
        <p className="text-center container__userName">your story</p>
         <img src={addStoryIcon} className='storyIcon'/>
      </span>

      {

        someNumbers.map((i) => (
          <span className="me-2" onClick={()=>{setUserStory(!userStory)}}>

<img alt='rounded-img' className={ i <=2 ? 'circular-img-frndSuggestion container__storyAvatar':  'circular-img-frndSuggestion '}style={{width:'4.063rem',height:"65px"}} src={'https://img.posterlounge.co.uk/images/l/1898617.jpg'}/>

            <p className="text-center  container__userName">user</p>
          </span>

        ))
      }
     
     
    </div>
    
  );
}

export default StoryCard;