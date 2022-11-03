import { Form, Input } from "antd";
import PostCardLayout from "./postCardLayout";

const PostCardOption = () => {
    return ( 
        <PostCardLayout>
            <div className="p-3 poll">
                <div className="ms-2">
            <p className="pollQuery">Poll Question</p>
            <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    //   onFinish={onFinish}
    >
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Please input your option!' }]}
      >
        
        <Input 
        style={{ height:"56px"}}
        type='text'
        placeholder="option 1.." 
         className=""
         />
       
      </Form.Item>
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Please input your option!' }]}
      >
        
        <Input 
        style={{ height:"56px"}}
        type='text'
        placeholder="option 1.." 
         className=""
         />
       
      </Form.Item>
      
 
    </Form>
    </div>
            </div>
        </PostCardLayout>
     );
}
 
export default PostCardOption;