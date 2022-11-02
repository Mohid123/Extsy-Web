import GroupAdminLeftOption from '../groups/groupAdmin/groupAdminLeftOption';
import Ad from '../mainViewComponents/mainViewRight/ad';
import FriendSuggestion from '../mainViewComponents/mainViewRight/friendSuggestion';
import ProfileInfo from '../mainViewComponents/mainViewLeft/profileInfo';
import './eventPosts.scss';
import Posts from './posts/posts';
import UpcomingEvents from './upcomingEvents/upcomingEvents';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthCredentials, getUserPostCount, loginUser } from '../../store/reducers/userSlice';
import { deletePost, getPostByUserIdWithAllData, getPosts, getVotersForChoice } from '../../store/reducers/postsSlice';
import { getAllStoriesWithAllData, getStoriesByUserIDWithData } from '../../store/reducers/storiesSlice';


export interface PostsArr {
  id: number,
  profilePicURL: string,
  createdAt: number,
  userName: string,
  type: string,
  text: string,
  coverImageURL: string;
}

const creds: any = {
  page: 1,
  postedTo: 'Club',
  offset: 0,
  limit: 10,
}

const deleteCreds = '634c64b6ac5829a8d511466d'
const getUserByIdCreds = {
  userId: 'dKSL5ifxwjXfQNSRJDackgnEiLJ2',
  isPollRequired: false,
  offset: 0,
  limit: 10
}

const getVoters = {
  limit: 10,
  offset: 0,
  choice: 1,
  postId: '636234c582fab64fb63f4993'
}

const geRRRR = {
  offset: 0,
  limit: 10,
  userId: 'dKSL5ifxwjXfQNSRJDackgnEiLJ2'
}



const authcreds: AuthCredentials = {
  email: 'shahahsan56@gmail.com',
  password: 'qwertyuiop'
}

const postArray: PostsArr[] = [
   {
    id: 1,
    profilePicURL: 'https://img.posterlounge.co.uk/images/l/1898617.jpg',
    createdAt: 1666181724,
    userName: 'Meryl Streep',
    type: 'Event',
    text: 'Celebrating an illustrious career spanning more than 4 decades',
    coverImageURL: 'https://i.pinimg.com/564x/d4/f3/57/d4f357b89f0aace0c43298edcefa36e4.jpg'
   },
   {
    id: 2,
    profilePicURL: 'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg',
    createdAt: 1666181724,
    userName: 'Sigourney Weaver',
    type: 'News',
    text: 'Possible Aliens sequel in the works directed by James Cameron and Sigourney Weaver might just be in it!',
    coverImageURL: 'https://cdn.fansshare.com/pictures/sigourneyweaver/still-of-sigourney-weaver-in-gorillas-in-the-mist-the-story-of-dian-fossey-large-picture-644624502.jpg'
   },
   {
    id: 3,
    profilePicURL: 'https://i.pinimg.com/736x/ad/48/c8/ad48c8a46d7101948476832bf817657d--jessica-black-jessica-lange.jpg',
    createdAt: 1666181724,
    userName: 'Jessica Lange',
    type: 'Post',
    text: 'Why method might be a dying school in modern HollyWood?',
    coverImageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjYqWzAJUImGHRULv94xiuAxrKXpQ4JsaEg&usqp=CAU'
   }
];


const EventPosts = () => {
  const [posts, setPosts] = useState(postArray);
  const dispatch = useDispatch<any>();
  const logUser = () => {
    // dispatch(loginUser(authcreds))
    // dispatch(getPosts(creds))
    // dispatch(deletePost(deleteCreds))
    // dispatch(getPostByUserIdWithAllData(getUserByIdCreds))
    //dispatch(getUserPostCount('dKSL5ifxwjXfQNSRJDackgnEiLJ2'))
    // dispatch(getVotersForChoice(getVoters))
    // dispatch(getAllStoriesWithAllData(geRRRR))
    // dispatch(getStoriesByUserIDWithData(geRRRR))
  }

  return (
    <div className='my-4 mainAlignmentPosts d-flex justify-content-between'>
      {/* <button className='p-5' onClick={logUser}>Get users</button> */}
      <div>
        <ProfileInfo />
        <GroupAdminLeftOption/>
        <UpcomingEvents/>
      </div>
      <div className='d-flex flex-column'>
      {posts.map((post: PostsArr, index: number) => {
        return(
            <Posts key={post.id} id={post.id} profilePicURL={post.profilePicURL} createdAt={post.createdAt} userName={post.userName} type={post.type} text={post.text} coverImageURL={post.coverImageURL} />
        )
        
      })}
      </div>
      <div>
        <Ad/>
        <FriendSuggestion/>
      </div>
    </div>
  )
}

export default EventPosts
