import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import image1 from '../../assets/img/NftProperties.svg'
import image2 from '../../assets/img/unsplash_tZCrFpSNiIQ.svg'
import CryptoIcon from '../../assets/img/Crypto icons.svg'
import Heart from '../../assets/img/Heart2.svg'
import Eye from '../../assets/img/Password hide and see.svg'
import { Button, Divider } from 'antd';
import "./index.scss"
const NftProperties = () => {
    return (
        <div className="NftContainer">
<Row>
    <Col lg="3" md="6" sm="12">
        <img src={image1} alt="" />
    </Col>
    <Col lg="3" md="6" sm="12">
        <h6 className="fs_16 fw_600 fc_black2 mb-1">Mirror Glass Efect</h6>
        <p className="fs_12 fw_400 fc_grey mb-1">Monkey #938237</p>
        <p className="fs_12 fw_400 fc_grey mb-1">Owned by <span className="fc_purple"> JnS Graphics </span></p>
        <p className="fs_12 fw_400 fc_grey">Created by  <span className="fc_purple">Desvella Graphics </span></p>
        <p className="fs_12 fw_500 fc_grey2 mb-1">Current Price</p>
        <div className="d-flex">
        <img src={CryptoIcon} alt="" />
        <p className="mb-0 fs_12 fw_500 fc_grey2 ms-1 ">0.89</p>
        <p className="mb-0 fs_11 fw_400 fc_grey ms-2">$223.47</p>
        </div>
        <p className="fs_12 fw_500 fc_grey2 mt-2 mb-1">Total Bid</p>
        <div className="d-flex">
        <img src={CryptoIcon} alt="" />
        <p className="mb-0 fs_12 fw_500 fc_grey2 ms-1 ">0.89</p>
        <p className="mb-0 fs_11 fw_400 fc_grey ms-2">$223.47</p>
        </div>
        
                                    <Button type="primary" className='px-5 mt-3'  >
                                        Buy Now
                                    </Button>
                             

    </Col>
    <Col lg="4" md="6" sm="12">
        <div className="d-flex">
        <img src={Eye} alt="" />
        <p className="fs_12 fw_400 fc_grey mb-0 mt-1 ms-2">334 view</p>
        <img src={Heart} alt="" className="ms-4" />
        <p className="fs_12 fw_400 fc_grey mb-0 mt-1 ms-2">334 view</p>
        </div>
    </Col>
    <Col lg="12" md="6" sm="12">
        <h6 className="fs_16 fw_600 fc_black2 mt-4">Description</h6>
        <p className="fs_12 fw_400 fc_grey mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem vitae mus condimentum neque, dictum consectetur odio leo. Suspendisse risus, non adipiscing nunc integer semper in sit sed. Volutpat at gravida neque ipsum habitasse viverra sit tortor. Erat enim, augue eu luctus lacus pharetra gravida. Proin facilisi maecenas augue dolor. A, curabitur ultricies quis diam fringilla vestibulum scelerisque fermentum. Varius donec vestibulum velit semper elementum venenatis maecenas pulvinar quis. Elementum adipiscing ullamcorper id eu commodo, nullam amet sed egestas. Sed rhoncus, lectus enim pulvinar. Elit cursus faucibus egestas sed odio diam cursus enim est.</p>
    </Col>
    <Col lg="6" md="12" sm="12">
    <div className="smallCard">
        
        
       
       
        <Row>
        <Col lg="12" md="6" sm="12">
        <h6 className="fs_16 fw_600 fc_black2 ">Details  </h6>
        </Col>
        <Col lg="6" md="6" sm="12">
        <p className="fs_12 fw_500 fc_grey mt-2">Contact Address </p>
        </Col>
        <Col lg="6" md="6" sm="12">
        <p className="fs_12 fw_500 fc_purple mt-2">0x8546d...0c55</p>
        </Col>
        <Col lg="6" md="6" sm="12"> <p className="fs_12 fw_500 fc_grey">Token ID</p></Col>
        <Col lg="6" md="6" sm="12"> <p className="fs_12 fw_500 fc_purple">74</p></Col>
        <Col lg="6" md="6" sm="12"> <p className="fs_12 fw_500 fc_grey">Token Standard </p></Col>
        <Col lg="6" md="6" sm="12"><p className="fs_12 fw_500 fc_grey ">ABC-756</p></Col>
        <Col lg="6" md="6" sm="12"> <p className="fs_12 fw_500 fc_grey">Blockchain </p></Col>
        <Col lg="6" md="6" sm="12"><p className="fs_12 fw_500 fc_grey ">Ethereum</p></Col>
        </Row>
       

    </div>
    </Col>
    <Col lg="6" md="12" sm="12">
    <div className="smallCard">
        
        
       
       
        <Row>
        <Col lg="12" md="6" sm="12">
        <h6 className="fs_16 fw_600 fc_black2 ">Properties  </h6>
        </Col>
        <Col lg="6" md="6" sm="12">
        <p className="fs_12 fw_500 fc_grey mt-2">FLOW FIELD </p>
        </Col>
        <Col lg="6" md="6" sm="12">
        <p className="fs_12 fw_500 fc_purple mt-2">16%</p>
        </Col>
        <Col lg="12" md="6" sm="12">  <p className="fs_12 fw_500 fc_purple ">Circular</p></Col>
        <Divider className="mt-0 mb-3"></Divider>
        
        <Col lg="6" md="6" sm="12"> <p className="fs_12 fw_500 fc_grey">COLOR VARIETY </p></Col>
        <Col lg="6" md="6" sm="12"><p className="fs_12 fw_500 fc_purple ">58%</p></Col>
        <Col lg="12" md="6" sm="12"> <p className="fs_12 fw_500 fc_purple">High </p></Col>
        </Row>
       

    </div>
    </Col>
    <Col lg="12" md="12" sm="12">
        <h6 className="fs_16 fw_600 fc_black2 text-center mt-5 mb-2">More Collection</h6>
        </Col>
        <Col lg="4" md="12" sm="12">
        <Card className="card">
                            <Card.Img variant="top" src={image2} />
                            <Card.Body className="cardBody">
                                <h6 className="fs_16 fw_600 fc_grey2 ms-3">The Holy Grail</h6>
                                <Card.Text>
                                    <p className="fs_12 fw_400 fc_grey2 ms-3">JnS Graphics</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col lg="4" md="12" sm="12">
        <Card className="card">
                            <Card.Img variant="top" src={image2} />

                            <Card.Body className="cardBody">
                                <h6 className="fs_16 fw_600 fc_grey2 ms-3">The Holy Grail</h6>
                                <Card.Text>
                                    <p className="fs_12 fw_400 fc_grey2 ms-3">JnS Graphics</p>
                                </Card.Text>
                              
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col lg="4" md="12" sm="12">
        <Card className="card">
                            <Card.Img variant="top"  src={image2} />

                            <Card.Body className="cardBody">
                                <h6 className="fs_16 fw_600 fc_grey2 ms-3">The Holy Grail</h6>
                                <Card.Text>
                                    <p className="fs_12 fw_400 fc_grey2 ms-3">JnS Graphics</p>
                                </Card.Text>
                              
                            </Card.Body>
                        </Card>
                        </Col>
</Row>
        </div>
    )
}
export default NftProperties