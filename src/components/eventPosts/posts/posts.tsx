import './posts.scss';
import coverPost from '../../../assets/img/cover-image-s.svg';
import usersClock from '../../../assets/img/notif_clock.svg';
import usersIcon from '../../../assets/img/notif_badge.svg';
import shareIcon from '../../../assets/img/share-icon.svg';
import dropIcon from '../../../assets/img/dropdown.svg';
import { PostsArr } from '../eventPosts';
import moment from 'moment';

const Posts = (props: PostsArr) => {
  return (
    <div className='post-card'>
      <div className='d-flex justify-content-between'>
        <div>
          <img alt='rounded-img' className='circular-img-posts' src={props.profilePicURL}/>
        </div>
        <div className='d-flex flex-column ms-2 flex-fill'>
            <span className='share_name'><span style={{color: 'black', fontWeight: '500'}}>{props.userName}</span> shared <span style={{color:'black', fontWeight: '500'}}>{props.type}</span></span>
            <span className='date_name'>{moment(props.createdAt * 1000).format('MMMM Do YYYY') } at {moment(props.createdAt * 1000).format('h:mm a')}</span>
        </div>
        <div className='drop-icon'>
          <img alt='drop' src={dropIcon}/>
        </div>
      </div>
      <div className='cover-image-post mt-3 position-relative'>
          <div>
            <img className='img-fluid cover-img-post' alt='cover-post' src={props.coverImageURL}/>
          </div>
          <div className='date-card-post d-flex flex-column align-content-center align-items-center justify-content-center'>
            <span className='date-number'>{moment(props.createdAt * 1000).format('D')}</span>
            <span className='date-month'>{moment(props.createdAt * 1000).format('MMM')}</span>
          </div>
      </div>

      <div className='d-flex flex-column text-div'>
        <span className='post-header'>{props.text}</span>
        <div className='d-flex justify-content-start my-2'>
            <img alt='notif-badge' src={usersClock}></img>
            <span className='time-of-post mx-2 mt-1 d-inline'>{moment(props.createdAt * 1000).format('MMMM Do YYYY') } at {moment(props.createdAt * 1000).format('h:mm a')}</span>
        </div>
        <div className='d-flex justify-content-start mb-3'>
            <img alt='notif-badge' src={usersIcon}></img>
            <span className='time-of-post mx-2 mt-1 d-inline'>200 attending - 20 interested</span>
        </div>
        <div className='d-flex justify-content-between'>
          <button className='interested-btn'>Interested</button>
          <div className='d-flex justify-content-evenly'>
            <img alt='sharing is caring' src={shareIcon}/>
            <span className='share-text ms-2'>Share</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts
