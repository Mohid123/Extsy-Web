/* eslint-disable no-lone-blocks */
import GroupAdminLeftOption from '../groups/groupAdmin/groupAdminLeftOption';
import Ad from '../mainViewComponents/mainViewRight/ad';
import FriendSuggestion from '../mainViewComponents/mainViewRight/friendSuggestion';
import ProfileInfo from '../mainViewComponents/mainViewLeft/profileInfo';
import dropIcon from '../../assets/img/dropdown.svg';
import './eventPosts.scss';
import Posts from './posts/posts';
import UpcomingEvents from './upcomingEvents/upcomingEvents';
import { useDispatch } from 'react-redux';
import { EventRes, getAllEvents } from '../../store/reducers/eventsSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Arr = Array;
const num: number = 5;

const EventPosts = () => {
  const dispatch = useDispatch<any>();

  const getEventPosts = () => {
    dispatch(getAllEvents({offset: 0, limit: 10}))
  }

  const {events} = useSelector((state: any) => state?.events);
  const eventStatus = useSelector((state: any) => state?.events?.status)

  const eventPostSkeleton = Arr(num).fill(1).map((arr: any) => {
    return (
      <div className='main-post'>
        <div className='d-flex justify-content-between'>
          <div className='rounded-img-skel skeleton-loader-main'></div>
          <div className='d-flex flex-column ms-2 flex-fill'>
              <div className='namePost skeleton-loader-main'></div>
              <div className='namePost skeleton-loader-main'></div>
          </div>
          <div className='drop-icon'>
            <img alt='drop' src={dropIcon}/>
          </div>
        </div>
        <div className='cover-image-post mt-3 position-relative skeleton-loader-main mb-5'>
          <div className='date-card-skel skeleton-loader-main d-flex flex-column align-content-center align-items-center justify-content-center'></div>
        </div>
        <div className='namePost skeleton-loader-main'></div>
        <div className='namePost skeleton-loader-main'></div>
        <div className='d-flex justify-content-between'>
          <div className='btn-skel skeleton-loader-main mb-2 mt-4'></div>
          <div className='share-skel skeleton-loader-main mb-2 mt-4'></div>
        </div>
      </div>
    )
  }) 

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
        {eventStatus === 'loading' && eventPostSkeleton}
        {eventStatus === 'succeeded' && renderedEventPosts}
      </div>
      <div>
        <Ad/>
        <FriendSuggestion/>
      </div>
    </div>
  )
}

export default EventPosts
