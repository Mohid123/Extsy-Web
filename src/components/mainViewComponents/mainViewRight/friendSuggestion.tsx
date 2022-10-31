import { Button } from "antd";
import { useState } from "react";
import './mainViewRight.scss'
interface Event {
    id: number,
    name: string,
    userName: string,
    imageURL: string;
}

const frndSuggestionArray: Event[] = [
    {
        id: 1,
        name: 'elon masks',
        userName:'@stevejobs',
        imageURL: 'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'
    },
    {
        id: 2,
        name: 'Steve hong',
        userName:'@stevejobs',
        imageURL: 'https://img.posterlounge.co.uk/images/l/1898617.jpg'
    },
    {
        id: 3,
        name: 'Event Name',
        userName:'steve jobs',
        imageURL: 'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'
    }
]
const FriendSuggestion = () => {
    const [frndSuggestion, setFrmdSuggestion] = useState(frndSuggestionArray);
    return ( 
        
            <div className='frndSuggest'>
    <p className='friendSuggestion'>People you may know:</p>
    {frndSuggestion.map((friend: Event, index: number) => {
        return (
            <>
            {index < 3 && <div key={friend.id} className='d-flex justify-content-between  align-items-center mt-2 '>
    <div className='d-flex '>
    <img alt='rounded-img' className='circular-img-frndSuggestion' src={friend.imageURL}/>
    <div className='ms-3'>
        <p className='m-0 p-0 friendSuggestion '>{friend.name}</p>
        <p className='m-0 p-0 friendSuggestion__userName'>{friend.userName}</p>
        </div>
    </div>
    <Button  className="whiteBtnFollow" >
      follow
        </Button>
    </div>
     }
     {index === 2  && <hr style={{color: 'black', width: '290px', opacity: 0.2}}/>}
     {index === 2  && <span className='see-all'>See all</span>}
     </>  )
})}
    </div>
    
     );
}
 
export default FriendSuggestion;