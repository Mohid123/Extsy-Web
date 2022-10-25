import { Badge } from "antd";
import { useState } from "react";
interface Event {
    id: number,
    groupName: string,
    imageURL: string;
}
const groupArray: Event[] = [
    {
        id: 1,
        groupName:"Blockchain",
        imageURL: 'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'
    },
    {
        id: 2,
        groupName: 'Crypto p2p',
        imageURL: 'https://img.posterlounge.co.uk/images/l/1898617.jpg'
    },
    {
        id: 3,
       groupName: "bitcoins",
        imageURL: 'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'
    }
]
const Groups = () => {
    const [show, setShow] = useState(true);
    const [groups, setGroups] = useState(groupArray);
    return (  
        <>
        <div className="px-5  propertiesTextStyle__group">Groups</div>
        <div  className="p-5  pt-1">
        {groups.map((group: Event, index: number) => {
            return(
              <>
          {index < 2 &&         <span  key={group.id} className="d-flex justify-content-start align-items-center mt-3 ">
                      
                  <img alt='rounded-img' className='circular-img-frndSuggestion me-3' style={{width:'2.063rem',height:"33px"}} src={group.imageURL}/>
<span className="propertiesTextStyle">{group.groupName}</span> 
     
                  </span>}
                  {index === 1  && <hr style={{color: 'black', width: '240px', opacity: 0.2}}/>}
                {index === 1  && <span className='see-all'>See all</span>}
                  {/* <span className="d-flex justify-content-start mt-2 align-items-center">
                      
                  <img alt='rounded-img' className='circular-img-frndSuggestion me-3' style={{width:'2.063rem',height:"33px"}} src={'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'}/> 
                  <span className="propertiesTextStyle">Crypto p2p</span> 
                      <Badge
        className="ms-2"
        count={show ? 109 : 0}
        style={{ backgroundColor: '#EE1D52' }}
      />
                  </span> */}
                  </>
                  )
                     })}
                     </div>
                  </>
    );
}
 
export default Groups;