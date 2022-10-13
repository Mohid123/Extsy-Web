import { Avatar } from "antd";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

type Props = {
    img: string;
    title: string;
  }
const StoryCard = () => {
   // We will use React useRef hook to reference the wrapping div:
   const containerRef:any = useRef(null);
   // Now we pass the reference to the useDraggable hook:
   const { events } = useDraggable(containerRef);
 
   const someNumbers = [1,2,3,4,5,6,6,7,7,7,7,7,7,7,7,7,7,7];
 
   return (
     // add reference and events to the wrapping div
     <div className="container" {...events} ref={containerRef}>
       {
         // repeat items just to fill container and make its content overflow
         someNumbers.map((i) => (
        <span className="me-3">
             <Avatar
            size={70}
            className=""
          >
            USER
          </Avatar>
          <p className="text-center">user</p>
          </span>
      
         ))
       }
     </div>
   );
}
 
export default StoryCard;