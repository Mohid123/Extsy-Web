import Ad from '../mainViewComponents/mainViewRight/ad';
import ProfileInfo from '../mainViewComponents/mainViewLeft/profileInfo';
import './eventAdmin.scss'
import EventAdminCreateEvent from './eventAdminCreateEvent/eventAdminCreateEvent';
import EventAdminOption from './eventAdminOption';



const EventAdmin = () => {
  return (
    <div className='my-4 mainAlignment d-flex justify-content-around main'>
      <div className='viewLeft'>
        <ProfileInfo />
        <EventAdminOption/>
      </div>
      <div className='viewMiddle'>
      <EventAdminCreateEvent/>
      </div>
      <div className='viewRight'><Ad/></div>
      
    </div>
  )
}

export default EventAdmin
