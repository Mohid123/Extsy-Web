import { Avatar, Button } from "antd";

const FriendSuggestion = () => {
    return ( 
        <>
            <div className='p-5'>
    <p className='friendSuggestion'>People you may know:</p>
    <div className='d-flex justify-content-between  align-items-center '>
    <div className='d-flex '>
    <img alt='rounded-img' className='circular-img-frndSuggestion' src={'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'}/>

    <div className='ms-3'>
        <p className='m-0 p-0 friendSuggestion '>steve jobs</p>
        <p className='m-0 p-0 friendSuggestion__userName'>@steve.jobs</p>
        </div>
    </div>
    <Button  className="whiteBtnFollow" >
      follow
        </Button>
    </div>
    <div className='d-flex justify-content-between  align-items-center mt-2 '>
    <div className='d-flex '>
    <img alt='rounded-img' className='circular-img-frndSuggestion' src={'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'}/>
    <div className='ms-3'>
        <p className='m-0 p-0 friendSuggestion '>steve jobs</p>
        <p className='m-0 p-0 friendSuggestion__userName'>@steve.jobs</p>
        </div>
    </div>
    <Button  className="whiteBtnFollow" >
      follow
        </Button>
    </div>
    <div className='d-flex justify-content-between  align-items-center mt-2'>
    
    <div className='d-flex '>
    <img alt='rounded-img' className='circular-img-frndSuggestion' src={'https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'}/>
    <div className='ms-3'>
        <p className='m-0 p-0 friendSuggestion '>steve jobs</p>
        <p className='m-0 p-0 friendSuggestion__userName'>@steve.jobs</p>
        </div>
    </div>
    <Button  className="whiteBtnFollow" >
      follow
        </Button>
    </div>
    </div>
        </>
     );
}
 
export default FriendSuggestion;