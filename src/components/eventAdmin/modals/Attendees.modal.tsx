import { Modal } from 'antd';
import './Attendees.modal.scss';

const Attendees = (props: any) => {
  return (
    <>
      <Modal title="Attendees" {...props} className='position-relative attendees-modal'>
        {/* <div className='position-absolute cross-icon'>&#10005;</div> */}
        <div className='d-flex flex-column'>
          <div className='d-flex flex-row justify-content-between mb-3'>
            <img alt='rounded-img' className='img-fluid circular-img' src='https://img.posterlounge.co.uk/images/l/1898617.jpg'/>
            <div className='d-flex flex-column ms-2 flex-fill row-div-fill'>
              <span className='username'>Meryl Streep</span>
              <span className='user_name my-1'>@username</span>
            </div>
            <div className='button_div'>
              <button className='follow_btn'>Follow</button>
            </div>
          </div>

          <div className='d-flex flex-row justify-content-between mb-3'>
            <img alt='rounded-img' className='img-fluid circular-img' src='https://www.lct.org/media/filer_public_thumbnails/filer_public/6e/a9/6ea9c4c6-8b21-478b-97e2-b7d0fd17787c/weaver_sigourney_headshot.jpg__270x310_q85_subsampling-2.jpg'/>
            <div className='d-flex flex-column ms-2 flex-fill row-div-fill'>
              <span className='username'>Sigourney Weaver</span>
              <span className='user_name my-1'>@username</span>
            </div>
            <div className='button_div'>
              <button className='follow_btn'>Follow</button>
            </div>
          </div>

          <div className='d-flex flex-row justify-content-between mb-3'>
            <img alt='rounded-img' className='img-fluid circular-img' src='https://i.pinimg.com/736x/ad/48/c8/ad48c8a46d7101948476832bf817657d--jessica-black-jessica-lange.jpg'/>
            <div className='d-flex flex-column ms-2 flex-fill row-div-fill'>
              <span className='username'>Jessica Lange</span>
              <span className='user_name my-1'>@username</span>
            </div>
            <div className='button_div'>
              <button className='follow_btn'>Follow</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Attendees
