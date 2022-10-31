
import { Button, DatePicker, Form, Input } from 'antd';
import Modal from 'react-bootstrap/Modal';
import circle from '../../../../assets/img/circle.svg'
import greenCircle from '../../../../assets/img/greenCircle.svg'
import './createPoll.scss'
type Props ={
  show:any,
  onHide:any,
  onClick? :()=>void 
}
const CreatePoll = ({show,onClick,onHide}:Props) => {
    return ( 
        <Modal  show={show} animation={false}>
        
        <Modal.Body>
            
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    //   onFinish={onFinish}
    >
       <div className="formLabel text-start m-auto  mb-2">Title</div>
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Please input your title!' }]}
      >
        
        <Input 
        style={{width:"539px", height:"50px"}}
        type='text'
        placeholder="title.." 
         className=""
         />
       
      </Form.Item>
      <p className="formLabel text-start m-auto  mb-2">+ Add Description</p>
      <div className="formLabel text-start m-auto  mb-2">Answer Options</div>
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Please input your option!' }]}
      >
        
        <Input 
        style={{width:"539px", height:"50px"}}
        type='text'
        placeholder="option 1" 
         className=""
         />
         <br/>
         <br/>
            <Input 
        style={{width:"539px", height:"50px"}}
        type='text'
        placeholder="option 2" 
         className=""
         />
       
      </Form.Item>
      <Button>Add option</Button>
      <br/>
         <br/>
        <p className="formLabel text-start m-auto  mb-2">Settings</p>
        <p className=' p-0 m-0 settingOption'><img src={circle} className='me-2'/>Allow selection of multiple options</p>
        <p className=' p-0 m-0 settingOption'><img src={circle} className='me-2'/>Public poll result</p>
        <p className=' p-0 m-0 settingOption'><img src={greenCircle} className='me-2'/>Allow selection of multiple options</p>
        <p className=' p-0 m-0 settingOption'><img src={circle} className='me-2'/>Hide participants from each other</p>
        <br/>
        <p className="formLabel text-start m-auto  mb-2">Set end date</p>
        <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please select a start date for the event",
                  },
                ]}
           
              >
                <DatePicker 
                 style={{width:"539px", height:"50px"}}
                onKeyDown={(e) => e.preventDefault()} />
              
              </Form.Item>
              <div className='text-center'>
              <Button className='pollCancel' onClick={()=>{onHide(false)}}>Cancel</Button>
              <Button className='createPoll ms-2'>Create Poll</Button>
              </div>
    </Form>
        
        
        {/* <p>Answer Options</p>
        <Input placeholder="option 1" style={{width:"539px", height:"50px"}}/>
        <br/>
        <br/>
        <Input placeholder="option 2" style={{width:"539px", height:"50px"}}/> */}
    
        </Modal.Body>
      
      </Modal>
     );
}
 
export default CreatePoll;