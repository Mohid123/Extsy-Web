import { Avatar, Button } from "antd";

const GroupSuggestion = () => {
    return ( 
        <>
               <div className='p-5'>
    <p className='mainViewRight__peopleSuggestion'>Similar Groups</p>
    <div className='d-flex justify-content-between  align-items-center '>
    
    <div className='d-flex '>
    <Avatar size={40}>USER</Avatar>
    <div className='ms-3'>
        <p className='m-0 p-0 mainViewRight__peopleSuggestion '>steve jobs</p>
        <p className='m-0 p-0 mainViewRight__peopleSuggestion__userName'>@steve.jobs</p>
        </div>
    </div>
    <Button  className="groupButton" >
      Join Now
        </Button>
    </div>
    <div className='d-flex justify-content-between  align-items-center mt-2 '>
    
    <div className='d-flex '>
    <Avatar size={40}>USER</Avatar>
    <div className='ms-3'>
        <p className='m-0 p-0 mainViewRight__peopleSuggestion '>steve jobs</p>
        <p className='m-0 p-0 mainViewRight__peopleSuggestion__userName'>@steve.jobs</p>
        </div>
    </div>
    <Button  className="groupButton" >
      Join Now
        </Button>
    </div>
    <div className='d-flex justify-content-between  align-items-center  mt-2'>
    
    <div className='d-flex '>
    <Avatar size={40}>USER</Avatar>
    <div className='ms-3'>
    <p className='m-0 p-0 mainViewRight__peopleSuggestion'>Ryan Rosalzy</p>
        <p className='m-0 p-0 mainViewRight__peopleSuggestion__userName'>@steve.jobs</p>
        </div>
    </div>
    <Button  className="groupButton" >
    Join Now
        </Button>
    </div>
    </div>
        </>
     );
}
 
export default GroupSuggestion;