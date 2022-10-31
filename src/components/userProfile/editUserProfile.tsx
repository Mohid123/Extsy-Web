import { Button, Tabs, Input, Avatar, List, Divider, DatePicker } from 'antd';
import { useState, useEffect } from 'react';
import avatarImage from '../../assets/img/84_2.svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {
  RightOutlined, SearchOutlined
} from '@ant-design/icons';
import moment from 'moment';


const EditUserProfile = () => {
  const onChange = (date: any, dateString: any) => {
    console.log(date, dateString);
  };
  interface DataType {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    email: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
  }
  const [data, setData] = useState<DataType[]>([]);
  const dateFormatList = ['DD/MM/YYYY'];
  const loadMoreData = () => {

    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then(res => res.json())
      .then(body => {
        setData([...data, ...body.results]);
      })
      .catch(() => {
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div className=" mt-5">
      <Row className='justify-content-center'
      >
        <Col lg="2" md="6" sm="12" >
          <img src={avatarImage} alt="" />
          <div className=' ' >
            <div >
              <p className='text-center'>Upload New Image</p>
            </div>
          </div>
        </Col>
        <Col lg="6" md="6" sm="12"  >
        <Form className='ms-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="User Name" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="User Name" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="User Name" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gender</Form.Label>
        <DatePicker defaultValue={moment(Date.now())} format={dateFormatList} onChange={onChange} size='large' style={{ width: '100%' }} />
      </Form.Group>

      
    </Form>
    <div className=' mt-3 ms-5 '>
            <Button type="primary" className='px-4 pb-1 userProfile'  >
              Save Profile
            </Button>
          </div>
 </Col>
        <Col lg="12" md="6" sm="12"  >
         
         
         
         
          
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" sm="12" >
          <Tabs defaultActiveKey="1">

            <Tabs.TabPane tab="Followers" key="2">
              <Row
                gutter={{ xs: 24, sm: 24, md: 24, lg: 8 }}
              >
                <Col className="gutter-row pl-5" span={24}  >
                  <Input size="large" className='Pb-0' placeholder="Search" bordered={false} prefix={<SearchOutlined />} />
                  <Divider className='mt-0 mb-2' />
                  <List
                    dataSource={data}
                    renderItem={item => (
                      <List.Item key={item.email}>
                        <List.Item.Meta
                          avatar={<Avatar src={item.picture.large} />}
                          title={<a href="https://ant.design">{item.name.last}</a>}
                          description={item.email}
                        />

                        <Button type="primary" ghost style={{ borderRadius: '10px', backgroundColor: '#F7F7F7', borderStyle: 'none' }}>
                          Remove
                        </Button>
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Following" key="3">
              <Row
                gutter={{ xs: 24, sm: 24, md: 24, lg: 6 }}
              >


                <Col className="gutter-row pl-5" span={24}  >
                  <Input size="large" className='Pb-0' placeholder="Search" bordered={false} prefix={<SearchOutlined />} />
                  <Divider className='mt-0 mb-2' />
                  <List
                    dataSource={data}
                    renderItem={item => (
                      <List.Item key={item.email}>
                        <List.Item.Meta
                          avatar={<Avatar src={item.picture.large} />}
                          title={<a href="https://ant.design">{item.name.last}</a>}
                          description={item.email}
                        />
                        
                        <Button type="primary" ghost style={{ borderRadius: '10px', backgroundColor: '#F7F7F7', borderStyle: 'none' }}>
                          Remove
                        </Button>
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>

            </Tabs.TabPane>
          </Tabs>
        </Col>

      </Row>

    </div>
  )

}

export default EditUserProfile