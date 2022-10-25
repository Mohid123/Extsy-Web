import {useState,useEffect} from 'react';
import { Col, Row, Tabs,Avatar, List, Button, Divider } from 'antd';
import tab1Image1 from '../../assets/img/Rectangle 2.svg'
import tab1Image2 from '../../assets/img/Rectangle 2.1.svg'
import tab1Image3 from '../../assets/img/Rectangle 2.2.svg'
import tab1Image4 from '../../assets/img/Rectangle 2.3.svg'
import tab2Image1 from '../../assets/img/7748175 2.svg'
import tab2Image2 from '../../assets/img/7748175 2.svg'
import tab2Image3 from '../../assets/img/7748175 3.svg'
import tab2Image4 from '../../assets/img/7748175 4.svg'
import Like from '../../assets/img/Like.svg'
import Comment from '../../assets/img/Comment.svg'
import Share from '../../assets/img/Share.svg'
import Heart from '../../assets/img/Heart.svg'
import CryptoIcon from '../../assets/img/Crypto icons.svg'
import Ellipse3 from '../../assets/img/Ellipse 3.svg'
import ArrowIcon from '../../assets/img/arrowIcon.svg'
import Bitcoin from '../../assets/img/Bitcoin Plus (Xbc).svg'


import   "./index.scss"

import {   } from '@ant-design/icons';
import {
  RightOutlined
} from '@ant-design/icons';




const TabsPanel  = () => {
    const data1 =[{name:'fdfsa',email:'fdafdsafa',Image:'dasfsdfdf'}]
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
        <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="My Posts" key="1">
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 8 }}
    >
      <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab1Image1} alt="" />
        <div className='d-flex px-4 justify-content-between blur-bg'>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Like} alt="" />

                                    <span className='textColor'>124</span>
                                </div>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Comment} alt="" />
                                    <span className='textColor'>9</span>
                                </div>

                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Share} alt="" />
                                </div>


                            </div>
      </div>
        </Col>
        <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab1Image2} alt="" />
                            <div className='d-flex px-4 justify-content-between blur-bg'>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Like} alt="" />

                                    <span className='textColor'>124</span>
                                </div>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Comment} alt="" />
                                    <span className='textColor'>9</span>
                                </div>

                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Share} alt="" />
                                </div>


                            </div>
      </div>
        </Col>
        <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab1Image3} alt="" />
        <div className='d-flex px-4 justify-content-between blur-bg'>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Like} alt="" />

                                    <span className='textColor'>124</span>
                                </div>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Comment} alt="" />
                                    <span className='textColor'>9</span>
                                </div>

                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Share} alt="" />
                                </div>


                            </div>
      </div>
        </Col>
        <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab1Image4} alt="" />
        <div className='d-flex px-4 justify-content-between blur-bg'>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Like} alt="" />

                                    <span className='textColor'>124</span>
                                </div>
                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Comment} alt="" />
                                    <span className='textColor'>9</span>
                                </div>

                                <div style={{ position: 'relative', bottom: '10px' }}>
                                    <img src={Share} alt="" />
                                </div>


                            </div>
      </div>
        </Col>
        </Row>
     
    </Tabs.TabPane>
    <Tabs.TabPane tab="My NFT’s" key="2">
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 8 }}
    >
      <Col className="gutter-row poppinsFont" span={6} >
      <div className='px-2'>
        <img src={tab2Image1} alt="" />
        
        <div className='d-flex px-4 justify-content-between blur-bg2'>
                                <div >
                                  <p className='textColor mt-2'>Monkey with hat</p> 
                                </div>
                                

                                <div className='d-flex'>
                                    <img src={Heart} className="" style={{width:'20px'}} alt="" />
                                    <p className='textColor mt-2 ms-2'> 6</p>
                                </div>


                            </div>
                            <div className=' monkeyDiv'>
                             <div className='d-flex'>
                             <img src={Ellipse3} alt="" />
                              <p className='mt-3 ms-2'>Johinson</p>
                             </div>
                             <div className='d-flex'>
                             <img src={CryptoIcon} alt="" />
                              <p className='mt-3 ms-2'>615</p>
                             </div>
                             
                             
                            </div>
      </div>
        </Col>
        <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab2Image2} alt="" />
        <div className='d-flex px-4 justify-content-between blur-bg2'>
                                <div >
                                  <p className='textColor mt-2'>Monkey with hat</p> 
                                </div>
                                

                                <div className='d-flex'>
                                    <img src={Heart} className="" style={{width:'20px'}} alt="" />
                                    <p className='textColor mt-2 ms-2'> 6</p>
                                </div>


                            </div>
                            <div className=' monkeyDiv'>
                             <div className='d-flex'>
                             <img src={Ellipse3} alt="" />
                              <p className='mt-3 ms-2'>Johinson</p>
                             </div>
                             <div className='d-flex'>
                             <img src={CryptoIcon} alt="" />
                              <p className='mt-3 ms-2'>615</p>
                             </div>
                             
                             
                            </div>
      </div>
        </Col>
        <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab2Image3} alt="" />
        <div className='d-flex px-4 justify-content-between blur-bg2'>
                                <div >
                                  <p className='textColor mt-2'>Monkey with hat</p> 
                                </div>
                                

                                <div className='d-flex'>
                                    <img src={Heart} className="" style={{width:'20px'}} alt="" />
                                    <p className='textColor mt-2 ms-2'> 6</p>
                                </div>


                            </div>
                            <div className=' monkeyDiv'>
                             <div className='d-flex'>
                             <img src={Ellipse3} alt="" />
                              <p className='mt-3 ms-2'>Johinson</p>
                             </div>
                             <div className='d-flex'>
                             <img src={CryptoIcon} alt="" />
                              <p className='mt-3 ms-2'>615</p>
                             </div>
                             
                             
                            </div>
      </div>
        </Col>
        <Col className="gutter-row" span={6} >
      <div className='px-2'>
        <img src={tab2Image4} alt="" />
        <div className='d-flex px-4 justify-content-between blur-bg2'>
                                <div >
                                  <p className='textColor mt-2'>Monkey with hat</p> 
                                </div>
                                

                                <div className='d-flex'>
                                    <img src={Heart} className="" style={{width:'20px'}} alt="" />
                                    <p className='textColor mt-2 ms-2'> 6</p>
                                </div>


                            </div>
                            <div className=' monkeyDiv'>
                             <div className='d-flex'>
                             <img src={Ellipse3} alt="" />
                              <p className='mt-3 ms-2'>Johinson</p>
                             </div>
                             <div className='d-flex'>
                             <img src={CryptoIcon} alt="" />
                              <p className='mt-3 ms-2'>615</p>
                             </div>
                             
                             
                            </div>
      </div>
        </Col>
        </Row>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tokens" key="3">
    <div
    
      className=" upperDiv "
      
    >
      
      <div className=""  >
        <h6 className='text-start fs_14 fw_500 fc_cyan2'>Total balance</h6>
        <div className='d-flex'>
        <h4 className='fs_21 fw_700 fc_black'>$ 352,556.00</h4>
        
          <p className='ms-5 mt-2 me-2 textGreen'>+ 36%</p>
          <img src={ArrowIcon} alt="" />
        
        </div>
        
      </div>
      <div className="text-start"  >
      <h6 className='fs_14 fw_500 fc_cyan2'>Send</h6>
      <div className='d-flex'>
        <h4 className='fs_21 fw_700 fc_black'>$ 352,556.00</h4>
        
          <p className='ms-5 mt-2 me-2 textGreen'>+ 36%</p>
          <img src={ArrowIcon} alt="" />
        
        </div>
      </div>
      <div className="text-start"  >
      <h6 className='fs_14 fw_500 fc_cyan2'>received</h6>
      <div className='d-flex'>
        <h4 className='fs_21 fw_700 fc_black'>$ 352,556.00</h4>
        
          <p className='ms-5 mt-2 me-2 textGreen'>+ 36%</p>
          <img src={ArrowIcon} alt="" />
        
        </div>
      </div>
      </div>
      <div className='header px-3'>
        <div className='w-100'>
         <h6 className='fs_16 fw_600 fc_black'> Currency </h6></div>
        <div className=' w-100'>
         <h6 className='fs_16 fw_600 fc_black'> Quantity
         </h6>
         </div>

        <div className='w-100'>
         <h6 className='fs_16 fw_600 fc_black'> Value
         </h6>
         </div>

        <div className='w-100'>
         <h6 className='fs_16 fw_600 fc_black'> Status
         </h6>
         </div>

      </div>
      <div className='table  px-3'>
        <div className='d-flex w-100 p-1'>
          <img src={Bitcoin} alt="" />
        <div className=''>
        <h6 className='pb-0 mb-0 mt-2 fs_16 fw_500 fc_black'>Bitcoin Plus</h6>
        <p className='text-start mb-0 fs_14 fw_400 fc_black'>BTC</p>
        </div>
        </div>
        <div className='mt-3 w-100 fs_16 fw_500 fc_black'>245</div>
        <div className='mt-3 w-100 fs_16 fw_400 fc_black'>$34565</div>
        <div className='w-100'><h6 className='actionBackground'>send</h6></div>

      </div>
      <Divider className='mt-2 mb-2'></Divider>
      
      <div className='table  px-3'>
        <div className='d-flex w-100 p-1'>
          <img src={Bitcoin} alt="" />
        <div className=''>
        <h6 className='pb-0 mb-0 mt-2 fs_16 fw_500 fc_black'>Bitcoin Plus</h6>
        <p className='text-start mb-0 fs_14 fw_400 fc_black'>BTC</p>
        </div>
        </div>
        <div className='mt-3 w-100 fs_16 fw_500 fc_black'>245</div>
        <div className='mt-3 w-100 fs_16 fw_400 fc_black'>$34565</div>
        <div className='w-100'><h6 className='actionBackground'>send</h6></div>

      </div>
      <Divider className='mt-2 mb-2'></Divider>
    {/* <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}
    >
      
      <Col className="gutter-row" span={24} >
      <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <RightOutlined />
            </List.Item>
          )}
        />
        </Col>
      
        </Row> */}
   
    </Tabs.TabPane>
  </Tabs>
    )
}
export default TabsPanel