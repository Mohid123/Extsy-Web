import { Avatar } from "antd";
import './mainViewLeft.scss'
const ProfileInfo = () => {
    return ( 
        <div className="mainViewLeftProfileInfo__mainContainer">
<div className="mainViewLeftProfileInfo__mainContainer__image" ></div>
<div className="d-flex mainViewLeftProfileInfo__mainContainer__profileAvatar">
<Avatar
      src={
        <img
          src="https://joeschmoe.io/api/v1/random"
          style={{
            width: 36,
          }}
        /> }
        />
 
<p className="m-0 mt-2 p-1 textStyle ">
Ali raza <br/><span className="textStyleSmall">@ali_raza</span> 
</p>
</div>

<div className="d-flex text-center mt-5 justify-content-around">
    <div className="">
        <p className="m-0 p-0 following ">Following</p>
        <p className="m-0 p-0 fw-bold textStyle ">4k</p>
    </div>
    <div className="">
        <p  className="m-0 p-0 following ">Followers</p>
        <p  className="m-0 p-0 fw-bold textStyle">43k</p>
    </div>
</div>
            </div>
     );
}
 
export default ProfileInfo;