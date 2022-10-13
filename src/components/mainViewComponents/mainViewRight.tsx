import { Avatar, Button } from 'antd';
import * as React from 'react';
import WhiteButton from '../WhiteButton';

const MainViewRight = () => {
    return ( 
    <div className='mainViewRight'>
    <div className='mainViewRight__image'>
        <div className='mainViewRight__image__text p-3'>
 <h6  className='mainViewRight__textStyle'>Ad Sponser Heading here</h6>
 <p className='mainViewRight__textStyle__paraStyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet diam mi ut ac elit.
</p></div>
    </div>
    <div className='p-5'>
    <p className='mainViewRight__peopleSuggestion'>People you may know:</p>
    <div className='d-flex justify-content-between  align-items-center '>
    
    <div className='d-flex '>
    <Avatar size={40}>USER</Avatar>
    <div className='ms-3'>
        <p className='m-0 p-0 mainViewRight__peopleSuggestion '>steve jobs</p>
        <p className='m-0 p-0 mainViewRight__peopleSuggestion__userName'>@steve.jobs</p>
        </div>
    </div>
    <Button  className="mainViewRight__whiteBtnFollow" >
      follow
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
    <Button  className="mainViewRight__whiteBtnFollow" >
      follow
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
    <Button  className="mainViewRight__whiteBtnFollow" >
      follow
        </Button>
    </div>

    
  
    </div>
    
    </div>
     );
}
 
export default MainViewRight;