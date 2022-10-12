import { Avatar } from "antd";
import Carousel from "react-multi-carousel";
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 9,
		partialVisibilityGutter: 10,
	},
	desktop: {
		breakpoint: { max: 3000, min: 768 },
		items: 3,
		partialVisibilityGutter: 8,
	},
	tablet: {
		breakpoint: { max: 768, min: 464 },
		items: 2,
		partialVisibilityGutter: 8,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 2,
		partialVisibilityGutter: 20,
	},
};
const MainViewMiddle = () => {
    return ( 
        <div className="mainViewMiddle">
         <div className="mainViewMiddle__mainViewStories bg-info">

         </div>
         <div className="mainViewMiddle__mainViewPostContainer ">
        <div className="mainViewMiddle__mainViewPostContainer__options">

         {/* <div  className="mainViewMiddle__mainViewPostContainer__options_postBtn">

         </div> */}
        </div>
</div>
        </div>
     );
}
 
export default MainViewMiddle;