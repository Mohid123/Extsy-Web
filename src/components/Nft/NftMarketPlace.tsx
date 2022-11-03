import { useState } from "react";
import { Button, Tabs, Input, Avatar, List, Divider, DatePicker } from 'antd';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import image1 from '../../assets/img/unsplash_tZCrFpSNiIQ.svg'
import Heart from '../../assets/img/HeartNft.svg'
import Line from '../../assets/img/Line 1.svg'
import CryptoIcon from '../../assets/img/Crypto icons.svg'

import "./index.scss"

const NftMarketPlace = () => {
    return (
        <div className="NftContainer main mt-5">
            <div className="d-flex justify-content-between">
                <h6 className="fs_24 fw_700">Collections</h6>
                <Button type="primary" className='px-4 pb-1 '  >
                    Enlist New
                </Button>
            </div>
           
                <Row >
                    <Col lg="3" md="6" sm="12">
                        <Card className="card">
                        <div className="frame2  " >
                           <p className="fc_white fs_11 mt-1 mb-0 "> 202 </p>
                           <img src={Heart} alt="" />
                           </div>
                            <Card.Img variant="top" src={image1} />

                            <Card.Body className="cardBody">
                                <h6 className="fs_16 fw_600 fc_grey2 ms-3">The Holy Grail</h6>
                                <Card.Text>
                                    <p className="fs_12 fw_400 fc_grey2 ms-3">JnS Graphics</p>
                                    <div className="d-flex justify-content-between pe-4">
                                        <p className="fs_12 fw_500 fc_grey2 ms-3">Price</p>
                                        <div className="d-flex">

                                            <img src={CryptoIcon} alt="" />
                                            <p className="fs_12 fw_400 mb-0 pt-2 fc_grey2">0.89</p>
                                        </div>

                                    </div>
                                </Card.Text>
                                <img src={Line} alt="" width={'300px'} />
                                <div className="text-center">
                                    <Button type="primary" className='px-5 '  >
                                        Buy Now
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" sm="12" >
                        <Card className="card">
                        <div className="frame2  " >
                           <p className="fc_white fs_11 mt-1 mb-0 "> 202 </p>
                           <img src={Heart} alt="" />
                           </div>
                            <Card.Img variant="top" src={image1} />

                            <Card.Body className="cardBody">
                                <h6 className="fs_16 fw_600 fc_grey2 ms-3">The Holy Grail</h6>
                                <Card.Text>
                                    <p className="fs_12 fw_400 fc_grey2 ms-3">JnS Graphics</p>
                                    <div className="d-flex justify-content-between pe-4">
                                        <p className="fs_12 fw_500 fc_grey2 ms-3">Price</p>
                                        <div className="d-flex">

                                            <img src={CryptoIcon} alt="" />
                                            <p className="fs_12 fw_400 mb-0 pt-2 fc_grey2">0.89</p>
                                        </div>

                                    </div>
                                </Card.Text>
                                <img src={Line} alt="" width={'300px'} />
                                <div className="text-center">
                                    <Button type="primary" className='px-5 '  >
                                        Buy Now
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" sm="12" >
                        <Card className="card">
                        <div className="frame2  " >
                           <p className="fc_white fs_11 mt-1 mb-0 "> 202 </p>
                           <img src={Heart} alt="" />
                           </div>
                            <Card.Img variant="top" src={image1} />

                            <Card.Body className="cardBody">
                                <h6 className="fs_16 fw_600 fc_grey2 ms-3">The Holy Grail</h6>
                                <Card.Text>
                                    <p className="fs_12 fw_400 fc_grey2 ms-3">JnS Graphics</p>
                                    <div className="d-flex justify-content-between pe-4">
                                        <p className="fs_12 fw_500 fc_grey2 ms-3">Price</p>
                                        <div className="d-flex">

                                            <img src={CryptoIcon} alt="" />
                                            <p className="fs_12 fw_400 mb-0 pt-2 fc_grey2">0.89</p>
                                        </div>

                                    </div>
                                </Card.Text>
                                <img src={Line} alt="" width={'300px'} />
                                <div className="text-center">
                                    <Button type="primary" className='px-5 '  >
                                        Buy Now
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" sm="12" >
                        <Card className="card">
                        <div className="frame2  " >
                           <p className="fc_white fs_11 mt-1 mb-0 "> 202 </p>
                           <img src={Heart} alt="" />
                           </div>
                            <Card.Img variant="top" src={image1} />

                            <Card.Body className="cardBody">
                                <h6 className="fs_16 fw_600 fc_grey2 ms-3">The Holy Grail</h6>
                                <Card.Text>
                                    <p className="fs_12 fw_400 fc_grey2 ms-3">JnS Graphics</p>
                                    <div className="d-flex justify-content-between pe-4">
                                        <p className="fs_12 fw_500 fc_grey2 ms-3">Price</p>
                                        <div className="d-flex">

                                            <img src={CryptoIcon} alt="" />
                                            <p className="fs_12 fw_400 mb-0 pt-2 fc_grey2">0.89</p>
                                        </div>

                                    </div>
                                </Card.Text>
                                <img src={Line} alt="" width={'300px'} />
                                <div className="text-center">
                                    <Button type="primary" className='px-5 '  >
                                        Buy Now
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
               
           
        </div>
    )
}
export default NftMarketPlace