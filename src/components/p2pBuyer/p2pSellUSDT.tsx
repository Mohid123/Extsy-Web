import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Tabs, Timeline, Button } from "antd";
import BuySellTable from "./buySellTable";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Authentication from '../../assets/img/Authentication.svg'
import AvatarImage from '../../assets/img/P2p/Ellipse 3.svg'
import CloseICon from '../../assets/img/P2p/Close.svg'


const SellUSDT = () => {
    return (
        <div className="">
            <Row className="justify-content-around">
                <Col lg="6" md="12" sm="12">
                    <div className="firstColumn">
                        <h6 className="fs_24 fw_600">Order Details</h6>
                        <div className="ms-2 mt-5">
                            <h6 className="fs_16 fw_600">Order Created</h6>
                            <p className="fs_14 fw_400 fc_frey">Pay the seller withing <span>15:00</span></p>
                            <p className="fs_14 fw_400 fc_frey">  <span className="me-3"><img src={Authentication} alt="" /></span>Extsy is holding the seller’s crpto in the
                                escrow account</p>
                            <p>  <span className="me-3"><img src={Authentication} alt="" /></span>Extsy 24/7 customer support</p>
                        </div>
                        <Timeline className="mt-5">
                            <Timeline.Item>
                                <Row>
                                    <Col lg="12" md="12" sm="12">
                                        <h6 className="fs_16 fw_600 fc_black2">Total Amount</h6>
                                    </Col>
                                    <Col lg="6" md="12" sm="12">
                                        <p className="fs_14 fw_500 fc_grey">Price</p>
                                    </Col>
                                    <Col lg="6" md="12" sm="12">
                                        <p className="fs_14 fw_400 fc_purple">247.29</p>
                                    </Col>
                                    <Col lg="6" md="12" sm="12">
                                        <p className="fs_14 fw_500 fc_grey">Amount</p>
                                    </Col>
                                    <Col lg="6" md="12" sm="12">
                                        <p className="fs_14 fw_400 fc_purple">2654 USDT</p>
                                    </Col>
                                    <Col lg="6" md="12" sm="12">
                                        <p className="fs_14 fw_500 fc_grey">Provider</p>
                                    </Col>
                                    <Col lg="6" md="12" sm="12">
                                        <p className="fs_14 fw_400 fc_purple">Cybil</p>
                                    </Col>
                                </Row>




                            </Timeline.Item>
                            <Timeline.Item>
                                <Row>
                                    <Col lg="12" md="12" sm="12">
                                        <h6 className="fs_16 fw_600 fc_black2">Payment Method: Bank</h6>
                                    </Col>
                                    <Col lg="6" md="12" sm="12">
                                        <p className="fs_14 fw_500 fc_grey">Full Name</p>
                                    </Col>
                                    <Col lg="6" md="12" sm="12">
                                        <p className="fs_14 fw_400 fc_purple">Luis Pasture</p>
                                    </Col>
                                    <Col lg="6" md="12" sm="12">
                                        <p className="fs_14 fw_500 fc_grey">Bank Account</p>
                                    </Col>
                                    <Col lg="6" md="12" sm="12">
                                        <p className="fs_14 fw_400 fc_purple">09479484892065</p>
                                    </Col>
                                    <Col lg="6" md="12" sm="12">
                                        <p className="fs_14 fw_500 fc_grey">Bank of Deposit</p>
                                    </Col>
                                    <Col lg="6" md="12" sm="12">
                                        <p className="fs_14 fw_400 fc_purple">Bank Al Falah</p>
                                    </Col>
                                </Row>
                            </Timeline.Item>
                            <Timeline.Item> <Row>
                                <Col lg="12" md="12" sm="12">
                                    <h6 className="fs_16 fw_600 fc_black2">Order Info </h6>
                                </Col>
                                <Col lg="6" md="12" sm="12">
                                    <p className="fs_14 fw_500 fc_grey">Time</p>
                                </Col>
                                <Col lg="6" md="12" sm="12">
                                    <p className="fs_14 fw_400 fc_purple">Luis Pasture</p>
                                </Col>
                                <Col lg="6" md="12" sm="12">
                                    <p className="fs_14 fw_500 fc_grey">Order ID</p>
                                </Col>
                                <Col lg="6" md="12" sm="12">
                                    <p className="fs_14 fw_400 fc_purple">84357ac00x8543</p>
                                </Col>

                            </Row></Timeline.Item>
                        </Timeline>
                        <div className="text-center">
                            <Button type="primary" className='px-5 pb-1 ' style={{ borderRadius: '10px', backgroundColor: '#F7F7F7', color: 'black', border: 'none' }} >
                                Cancel order
                            </Button>
                            <Button type="primary" className='px-5 ms-5'  >
                                Buy Now
                            </Button>
                        </div>
                    </div>

                </Col>
                <Col lg="6" md="12" sm="12">
                    <div className="secondColumn">
                        <Row className="justify-content-between px-4 py-3">
                            <Col  lg="10" md="12" sm="12">
                            <div className="d-flex">
                        <img src={AvatarImage} alt="" />
                        <div className="ms-3 mt-1">

                        <h6 className="fs_16 fw_600 mb-0 ">Cybil <span className="ms-3"><img src={Authentication} alt="" /></span></h6>
                        <p className="fs_14 fw_300 mb-0">Online </p>
                        </div>
                    </div>
                            </Col>
                            <Col lg="1" md="12" sm="12">
                            <img src={CloseICon} alt="" />
                            </Col>
                        </Row>
                       
                        <div className="innerDiv">
                            <p className="fs_16 fw_400 fc_grey">Order will be cancelled in <span className=" fs_16 fw_500 fc_purple  ms-2">12:09</span> <span className=" fs_16 fw_500 fc_purple ms-5">Report Seller</span></p>
                            <p className="fs_16 fw_400 fc_grey">Amount <span className=" fs_16 fw_500 fc_purple  ms-4">$ 285,425</span> </p>
                            <div className="">
                            <Button type="primary" className=' ' block >
                                Make Payment
                            </Button>
                            </div>
                        </div>
                        <div className="message ms-3 me-3">
            <p className="fs_16 fw_400  mb-1">Hi</p>
        </div>
        <div className="message ms-3">
            <p className="fs_16 fw_400  mb-1">How are you</p>
          
        </div>
        <p className="fs_11 fw_300 fc-grey mt-1 ms-3">Yesterday, 8.30pm</p>
        <div className="message ms-3">
            <p className="fs_16 fw_400  mb-1">3rd party payment not acceptable please make payment from your own account...</p>
          
        </div>
        <div className="message2">
        <p className=" fs_16 fw_400 mb-1">Hello there!</p>
        </div>
        <div className="message2">
        <p className=" fs_16 fw_400 mb-1">Done</p>
        </div>
                   
                    
                    </div>
                    
                </Col>
            </Row>
        </div>
    )
}

export default SellUSDT