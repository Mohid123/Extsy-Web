import { Button, Modal } from 'antd';
import dangerIcon from '../../../../../assets/img/dangerIcon.svg'
import './leaveGroupModal.scss'
const LeaveGroupModal = (props:any) => {
    return ( 
        <Modal
        // title="Modal 1000px width"
        centered
        {...props}
        
        // open={open}
        // onOk={() => setOpen(false)}
        // onCancel={() => setOpen(false)}
        width={544}
        height={195}
      >
        <div  style={{padding:'1.25rem '}}>
        <div className="d-flex">
          {" "}
          <img src={dangerIcon} style={{width:'48px',height:'48px'}}/>
          <div className="ms-2">   <h4 className="p-0 m-0 leaveGrp">Leave Group !</h4>
           <p className="p-0 m-0 leaveGrp__message">Are you sure you want to leave this group? This action cannot be undone.</p></div>
       
        </div>
 <div className='d-flex justify-content-end mt-2'>
 <Button className='me-2 mt-2 leaveBtn__cancelBtn'>Cancel</Button>
        <Button className='mt-2 leaveBtn'>Leave</Button>
 </div>
      
        </div>
      </Modal>
     );
}
 
export default LeaveGroupModal;