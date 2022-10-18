import GroupAdminLeftOption from '../groups/groupAdminLeftOption';
import Ad from '../mainViewComponents/ad';
import ProfileInfo from './../mainViewComponents/profileInfo';
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
