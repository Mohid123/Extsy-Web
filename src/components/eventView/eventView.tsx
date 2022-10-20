import UpcomingEvents from '../eventPosts/upcomingEvents/upcomingEvents';
import GroupAdminLeftOption from '../groups/groupAdmin/groupAdminLeftOption';
import Ad from '../mainViewComponents/ad';
import FriendSuggestion from '../mainViewComponents/friendSuggestion';
import ProfileInfo from '../mainViewComponents/profileInfo';
import './eventView.scss';
import EventViewCard from './eventViewCard/eventViewCard';

const EventView = () => {
  return (
    <div className='my-4 mainAlignmentPosts d-flex justify-content-between'>
      <div>
        <ProfileInfo />
        <GroupAdminLeftOption/>
        <UpcomingEvents/>
      </div>
      <EventViewCard/>
      <div>
        <Ad/>
        <FriendSuggestion/>
      </div>
    </div>
  )
}

export default EventView
