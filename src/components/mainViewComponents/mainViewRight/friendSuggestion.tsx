import { Avatar, Button } from "antd";

const FriendSuggestion = () => {
    return ( 
        <>
            <div className='p-5'>
    <p className='friendSuggestion'>People you may know:</p>
    <div className='d-flex justify-content-between  align-items-center '>
    
    <div className='d-flex '>
    <Avatar size={40}>USER</Avatar>
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
    <Avatar size={40}>USER</Avatar>
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
    <Avatar size={40}>USER</Avatar>
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