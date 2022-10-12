import { Avatar, Button } from 'antd';
import * as React from 'react';
import WhiteButton from '../WhiteButton';

const MainViewRight = () => {
    return ( 
    <div className='mainViewRight'>
    <div className='mainViewRight__image'>
        <div className='mainViewRight__image__text p-3'>
 <h6>Ad Sponser Heading here</h6>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet diam mi ut ac elit.
</p></div>
    </div>
    <div className='p-5'>
    <p>People you may know:</p>
    <div className='d-flex justify-content-between align-items-center'>
    <Avatar size={40}>USER</Avatar>
    <div>
        <p className='m-0 p-0'>steve jobs</p>
        <p className='m-0 p-0'>@steve.jobs</p>
    </div>
    <Button  className="mainViewRight__whiteBtnFollow" >
      follow
        </Button>
    </div>
    <div className='d-flex justify-content-between align-items-center'>
    <Avatar size={40}>USER</Avatar>
    <div>
        <p className='m-0 p-0'>steve jobs</p>
        <p className='m-0 p-0'>@steve.jobs</p>
    </div>
    <Button  className="mainViewRight__whiteBtnFollow" >
      follow
        </Button>
    </div>
    <div className='d-flex justify-content-between align-items-center'>
    <Avatar size={40}>USER</Avatar>
    <div>
        <p className='m-0 p-0'>steve jobs</p>
        <p className='m-0 p-0'>@steve.jobs</p>
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