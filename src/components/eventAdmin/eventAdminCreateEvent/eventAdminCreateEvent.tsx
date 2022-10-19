import './eventAdminCreateEvent.scss';
import topImg from '../../../assets/img/Img.svg';
import deleteIcon from '../../../assets/img/Delete_Icons.svg';
import editIcon from '../../../assets/img/Edit.svg';
import usersIcon from '../../../assets/img/notif_badge.svg';
import usersStory from '../../../assets/img/notif_story.svg';
import usersClock from '../../../assets/img/notif_clock.svg';
import usersFlag from '../../../assets/img/notif_flag.svg';
import usersVideo from '../../../assets/img/notif_camera.svg';
import usersLocation from '../../../assets/img/notif_locations.svg';
import usersPrice from '../../../assets/img/notif_price.svg';
import { Avatar, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import Attendees from '../modals/Attendees.modal';
import { useState } from 'react';


const EventAdminCreateEvent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
      setIsModalOpen(true);
  };

  const hideModal = () => {
      setIsModalOpen(false);
  };
//onClick={() => {isModalOpen === true && hideModal()}}
  return (
    <div className="centralCard" onClick={() => {isModalOpen === true && hideModal()}}>
      {/* <button className='createEventButton mb-4'><span>&#10003;</span>&nbsp;Create Event</button> */}
      <div className='main-card mt-1 shadow-sm position-relative'>
        <img alt='top-img' className='img-fluid' src={topImg}></img>
        <div className='position-absolute blurred-bottom'></div>
        <div className='d-flex justify-content-between position-relative'>
          <div className='dateCard shadow-sm d-flex flex-column align-content-center justify-content-center align-items-center'>
            <span className='dateNumber'>21</span>
            <span className='dateMonth'>May</span>
          </div>
          <div className='icons'>
            {/* <img className='shadow-sm rounded-circle mx-2' alt='delete-icon' src={deleteIcon}/>
            <img className='shadow-sm rounded-circle' alt='delete-icon' src={editIcon}/> */}
            <span className='editText mx-2'>Edit</span>
            <span className='editText'>Delete</span>
          </div>
        </div>
        <div className='d-flex flex-column mx-5 my-5'>

          <div className='d-flex flex-row justify-content-between'>
            <span className='procreate'>Did Procreate change illustration?</span>
            <span className='price'>$200</span>
          </div>

          <div className='d-flex flex-row justify-content-between mt-4 my-custom'>
            <div className='d-flex justify-content-evenly'>
              <img alt='notif-badge' src={usersIcon}></img>
              <span className='notifications mx-2 mt-1 d-inline'>20 Attending</span>
            </div>
            <div className='d-flex justify-content-evenly'>
              <Avatar.Group
                className='mx-2'
                maxCount={5}
                maxStyle={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                }}
              >
                <Avatar size={20} src="https://joeschmoe.io/api/v1/random" />
                  <Avatar
                    size={20}
                    style={{
                      backgroundColor: "#f56a00",
                    }}
                  >K
                  </Avatar>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar
                      size={20}
                      style={{
                        backgroundColor: "#87d068",
                      }}
                      icon={<UserOutlined />}
                    />
                  </Tooltip>
                  <Avatar
                    size={20}
                    style={{
                      backgroundColor: "#1890ff",
                    }}
                    icon={<AntDesignOutlined  />}
                  />
              </Avatar.Group>
              <span onClick={showModal} className='others'>+15 others</span>
            </div>
          </div>

          <div className='d-flex justify-content-start'>
            <img alt='notif-badge' src={usersStory}></img>
            <span className='notifications mx-2 mt-1 d-inline'>Event Duration <span style={{color: 'black'}}>4 hr</span></span>
          </div>

          <div className='d-flex justify-content-start my-custom'>
            <img alt='notif-badge' src={usersClock}></img>
            <span className='notifications mx-2 mt-1 d-inline'>12 April 2022 at 10:47 AM</span>
          </div>

          <div className='d-flex justify-content-start'>
            <img alt='notif-badge' src={usersFlag}></img>
            <span className='notifications mx-2 mt-1 d-inline'>Event by <span style={{color: 'black'}}>JNS Education South Africa</span></span>
          </div>

          <div className='d-flex justify-content-start my-custom'>
            <img alt='notif-badge' src={usersVideo}></img>
            <span className='notifications mx-2 d-inline'>meet.google.com/uhq-gfoc-pgh</span>
          </div>

          <div className='d-flex justify-content-start'>
            <img alt='notif-badge' src={usersLocation}></img>
            <span style={{color: 'black'}} className='notifications mx-2 mt-1 d-inline'>Belgium City</span>
          </div>

          <div className='d-flex justify-content-start my-custom'>
            <img alt='notif-badge' src={usersPrice}></img>
            <span style={{color: '#7C167D', fontWeight: '600'}} className='notifications mx-2 mt-1 d-inline'>$200</span>
          </div>

          <div className='d-flex justify-content-between'>
            <span className='hosts'>Hosts</span>
            <span className='viewAll'>View All</span>
          </div>

          <Avatar.Group
            className='my-3'
            maxCount={6}
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
            }}
          >
            <Avatar size={20} src="https://joeschmoe.io/api/v1/random" />
              <Avatar
                size={20}
                style={{
                  backgroundColor: "green",
                }}
              >K
              </Avatar>
              <Avatar
                size={20}
                style={{
                  backgroundColor: "#f56a00",
                }}
              >L
              </Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  size={20}
                  style={{
                    backgroundColor: "#87d068",
                  }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                size={20}
                style={{
                  backgroundColor: "#1890ff",
                }}
                icon={<AntDesignOutlined  />}
              />
          </Avatar.Group>

          <span className='description'>Description</span>
          <span className='actualDescription pb-3 mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas metus sagittis, interdum egestas pharetra lorem in auctor enim. Dolor morbi malesuada phasellus feugiat nascetur faucibus ullamcorper tellus nec. Nunc magna ut felis, condimentum. Nulla orci venenatis vitae mattis at et dolor. Adipiscing morbi in feugiat habitasse orci fusce molestie tellus sit. Felis gravida a maecenas arcu aliquet. Sed mattis tristique sed neque eget laoreet ut. Etiam quam pulvinar enim eu, purus turpis vivamus. Sollicitudin morbi orci massa posuere volutpat nulla. Diam
          </span>

        </div>
      </div>

      <>
        <Attendees isModalOpen={isModalOpen} open={showModal} onCancel={hideModal}/>
      </>
    </div>
  )
}

export default EventAdminCreateEvent
