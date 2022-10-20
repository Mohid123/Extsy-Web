
import Ad from './ad';
import FriendSuggest from './friendSuggestion';
import ChatBox from '../chat/chat'

const MainViewRight = () => {
    return ( 
    <div className='mainViewRight'>
    <Ad/>
    <FriendSuggest/>
    <ChatBox/>
    </div>
     );
}
 
export default MainViewRight;