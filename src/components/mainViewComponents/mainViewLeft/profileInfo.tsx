import { Avatar } from "antd";
import './mainViewLeft.scss'
const ProfileInfo = () => {
    return ( 
        <div className="mainViewLeftProfileInfo__mainContainer">
<div className="mainViewLeftProfileInfo__mainContainer__image" ></div>
<div className="d-flex mainViewLeftProfileInfo__mainContainer__profileAvatar">
<img alt='rounded-img' className='circular-img-frndSuggestion' style={{width:'2.813rem',height:"44px"}} src={'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'}/>

 

</div>
<p className="ms-1 m-0 mt-4  textStyle  text-center">
Ali raza <br/><span className="textStyleSmall">@ali_raza</span> 
</p>
<div className="d-flex text-center py-3 justify-content-around">
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