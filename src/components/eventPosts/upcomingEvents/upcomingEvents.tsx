import moment from 'moment';
import { useState } from 'react';
import './upcomingEvents.scss';

interface Event {
    id: number,
    eventName: string,
    date: number,
    venue: string,
    imageURL: string;
}

const eventArray: Event[] = [
    {
        id: 1,
        eventName: 'Event Name',
        date: 1666181724,
        venue: 'Belgium',
        imageURL: 'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'
    },
    {
        id: 2,
        eventName: 'Perfect Event Name for my homies!',
        date: 1666181724,
        venue: 'Germany',
        imageURL: 'https://img.posterlounge.co.uk/images/l/1898617.jpg'
    },
    {
        id: 3,
        eventName: 'Extra event',
        date: 1666181724,
        venue: 'Pakistan',
        imageURL: 'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'
    }
]

const UpcomingEvents = () => {
  const [events, setEvents] = useState(eventArray);
  return (
    <div className='event-card'>
      <span className='upcoming-header'>Upcoming events</span>
    {events.map((event: Event, index: number) => {
        const date = moment(event.date * 1000).format('MMMM Do YYYY/h:mm a')
        return (
            
            <div>
                {index < 2 && <div key={event.id} className='d-flex flex-row justify-content-between my-4'>
                    <div>
                        <img alt='rounded-img' className='circular-img-upcoming' src={event.imageURL}/>
                    </div>
                    <div className='d-flex flex-column ms-2 mt-2 flex-fill'>
                        <span className='eventName'>{(event?.eventName?.length > 14) ? (event?.eventName.slice(0, 14))+'...':(event?.eventName)}</span>
                        <span className='user_name'>{date} - {event.venue}</span>
                    </div>
                </div>}
                {index === 1  && <hr style={{color: 'black', width: '240px', opacity: 0.2}}/>}
                {index === 1  && <span className='see-all'>See all</span>}
            </div>
        )
    })}
    </div>
  )
}

export default UpcomingEvents
