/* eslint-disable no-lone-blocks */
import GroupAdminLeftOption from '../groups/groupAdmin/groupAdminLeftOption';
import Ad from '../mainViewComponents/mainViewRight/ad';
import FriendSuggestion from '../mainViewComponents/mainViewRight/friendSuggestion';
import ProfileInfo from '../mainViewComponents/mainViewLeft/profileInfo';
import './eventPosts.scss';
import Posts from './posts/posts';
import UpcomingEvents from './upcomingEvents/upcomingEvents';
import { useDispatch } from 'react-redux';
import { EventRes, getAllEvents } from '../../store/reducers/eventsSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const EventPosts = () => {
  const dispatch = useDispatch<any>();

  const getEventPosts = () => {
    dispatch(getAllEvents({offset: 0, limit: 10}))
  }

  const {events} = useSelector((state: any) => state?.events);

  const renderedEventPosts = events?.map((post: EventRes) => {
      return(
          <Posts
            key={post.event?.id}
            id={post.event?.id}
            eventName={post.event?.eventName}
            startDate={post?.event?.startDate}
            captureImageURL={post?.event?.captureImageURL}
            interestedCount={post?.event?.interestedCount}
            goingCount={post?.event?.goingCount}
            postedDate={post?.event?.postedDate}
            user={post?.event?.user}
          />
      )  
    })

  useEffect(() => {
    getEventPosts()
  }, [])

  return (
    <div className='my-4 main d-flex justify-content-between'>
      <div>
        <ProfileInfo />
        <GroupAdminLeftOption/>
        <UpcomingEvents/>
      </div>
      <div className='d-flex flex-column'>
        {renderedEventPosts}
      </div>
      <div>
        <Ad/>
        <FriendSuggestion/>
      </div>
    </div>
  )
}

export default EventPosts
