import GroupAdminLeftOption from '../groups/groupAdmin/groupAdminLeftOption';
import Ad from '../mainViewComponents/mainViewRight/ad';
import ProfileInfo from '../mainViewComponents/mainViewLeft/profileInfo';
import './eventAdmin.scss'
import EventAdminCreateEvent from './eventAdminCreateEvent/eventAdminCreateEvent';

const EventAdmin = () => {
  return (
    <div className='my-4 mainAlignment d-flex justify-content-between'>
      <div>
        <ProfileInfo />
        <GroupAdminLeftOption/>
      </div>
      <EventAdminCreateEvent/>
      <Ad/>
    </div>
  )
}

export default EventAdmin
