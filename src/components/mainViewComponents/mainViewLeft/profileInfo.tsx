import { useSelector } from 'react-redux';
import './mainViewLeft.scss';

const ProfileInfo = () => {
    const {profile} = useSelector((state: any) => state?.profile);

    return ( 
        <div className="mainViewLeftProfileInfo__mainContainer bg-white">
            <div className="mainViewLeftProfileInfo__mainContainer__image"></div>
            <div className="d-flex mainViewLeftProfileInfo__mainContainer__profileAvatar">
                <img alt='rounded-img' className='circular-img-frndSuggestion' style={{width:'2.813rem', height:"44px"}} src={profile?.profilePicURL}/>
            </div>
        
            <p className="ms-1 m-0 mt-4  textStyle  text-center">{profile?.fullName} <br/><span className="textStyleSmall">@{profile?.username}</span></p>
            <div className="d-flex text-center py-3 justify-content-around">
                <div className="">
                    <p className="m-0 p-0 following ">Following</p>
                    <p className="m-0 p-0 fw-bold textStyle ">{profile?.followingCount}</p>
                </div>
                <div className="">
                    <p  className="m-0 p-0 following ">Followers</p>
                    <p  className="m-0 p-0 fw-bold textStyle">{profile?.followersCount}</p>
                </div>
            </div>
        </div>
    );
}
 
export default ProfileInfo;