import { PlusOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import { useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import AddStory from "../../stories/addStory"
import UserStory from "../../stories/userStory"

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
      <span className="me-2" onClick={handleClick}>
        <Badge
          className=" container__bagdeBg"
          style={{
            color: '#fdfffd',
            backgroundColor: '#7C167D',
            transform: 'rotate(45deg)',

          }}
          count={
            <PlusOutlined
              style={{
                color: '#fdfffd',
              }}
              className="mt-5  "
            />
          }

        >
          <Avatar
            size={60}
            className={"container__storyAvatar"}
            src={
              <img
                src="https://joeschmoe.io/api/v1/random"
                style={{
                  // width: 32,
                }}
                alt="" />
            }
          />
        </Badge>
        <p className="text-center container__userName">your story</p>

      </span>

      {

        someNumbers.map((i) => (
          <span className="me-2" onClick={()=>{setUserStory(!userStory)}}>

            <Avatar
              size={60}
              className={i <= 2 ? "container__storyAvatar" : ""}

              src={
                <img
                  src="https://joeschmoe.io/api/v1/random"
                  style={{
                    // width: 32,
                  }}
                 alt=""/>
              }
            />
            <p className="text-center  container__userName">user</p>
          </span>

        ))
      }
     
     
    </div>
    
  );
}

export default StoryCard;