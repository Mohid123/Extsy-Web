import { Button } from "antd";
import  './groupSuggestion.scss';
interface Event {
    id: number,
    name: string,
    status:string,
    imageURL: string;
}

const groupSuggestionArray: Event[] = [
    {
        id: 1,
        name: 'elon masks',
        status:'Pending',
        imageURL: 'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'
    },
    {
        id: 2,
        name: 'Steve hong',
        status:'Join',
        imageURL: 'https://img.posterlounge.co.uk/images/l/1898617.jpg'
    },
    {
        id: 3,
        name: 'Event Name',
        status:'Join',
        imageURL: 'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'
    }
]
const GroupSuggestion = () => {
    return ( 
        
               <div className='p-3 similarGroupShadow mt-4'>
    <p className='groupName'>Similar Groups</p>
   
    {groupSuggestionArray.map((group: Event, index: number) => {
        return (
            <>
            {index < 3 &&
    <div className='d-flex justify-content-between  align-items-center mt-2 '>
    
    <div className='d-flex '>
    <img alt='rounded-img' className='circular-img-frndSuggestion' src={group.imageURL}/>

    <div className='ms-3'>
        <p className='m-0 p-0  name'>{group.name}</p>
        </div>
    </div>
    <Button  className={ group.status === 'Pending'?"groupPendingBtn":"groupJoinButton"} >
     {group.status}
        </Button>
    </div>
        }
        {index === 2  && <hr style={{color: 'black', width: '290px', opacity: 0.2}}/>}
        {index === 2  && <span className='see-all'>See all</span>}
        </>
         )
        })}
   
    </div>
      
     );
}
 
export default GroupSuggestion;