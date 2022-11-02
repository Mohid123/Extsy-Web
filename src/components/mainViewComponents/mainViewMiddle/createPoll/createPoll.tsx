
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import circle from '../../../../assets/img/circle.svg'
import greenCircle from '../../../../assets/img/greenCircle.svg'
import vector from '../../../../assets/img/plusIconBlack.svg'
import './createPoll.scss'
type Props ={
  show:any,
  onHide:any,
  onClick? :()=>void 
}
const CreatePoll = ({show,onClick,onHide}:Props) => {
  const [addDescription, setAddDescription] = useState(false)
  const [inputList, setInputList] = useState([ <> <Input 
    key={0}
    style={{ height:"50px"}}
    type='text'
    placeholder="write something..." 
     className="mb-2"
     />
     <Input 
     key={1}
     style={{height:"50px"}}
     type='text'
     placeholder="write something..." 
      className="mb-2"
      /></>])
      const removeInput = (key:number) =>{
        setInputList(inputList.slice(0,key))
      }

      const addInputOption= ()=>{
        setInputList(inputList.concat(<Input 
          key={inputList.length}
          suffix={<CloseCircleOutlined  onClick={()=>{removeInput(inputList.length)}}/>}
          allowClear
          style={{ height:"50px"}}
          type='text'
          placeholder="write something..." 
           className="mb-2"
           />))
      }
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
        style={{ height:"50px"}}
        type='text'
        placeholder="title.." 
         className=""
         />
       
      </Form.Item>

      {!addDescription &&
        <p className="formLabel p-0 m-0 text-start m-auto  mb-2 cursor " onClick={()=> setAddDescription(true)}><img src={vector} className='me-1'/>Add Description</p>}
      
     { addDescription && <TextArea
           
            rows={4}
            // style={{ width: "36.75rem" }}
            placeholder="Write your own feedback..."
            className="writeFeedback"
          />
          }
      <div className="formLabel text-start m-auto  mb-2">Answer Options</div>
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Please input your option!' }]}
      >
        {inputList}
      </Form.Item>
      <Button onClick={()=>{addInputOption()}}>Add option</Button>
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
                 style={{ height:"50px"}}
                onKeyDown={(e) => e.preventDefault()} />
              
              </Form.Item>
              <div className='text-center'>
              <Button className='pollCancel' onClick={()=>{onHide(false);setAddDescription(false)}}>Cancel</Button>
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