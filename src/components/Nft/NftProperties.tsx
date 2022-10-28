import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import image1 from '../../assets/img/NftProperties.svg'
const NftProperties = () => {
    return (
        <div className="NftContainer">
<Row>
    <Col lg="3" md="6" sm="12">
        <img src={image1} alt="" />
    </Col>
    <Col lg="3" md="6" sm="12">
        <h6>Mirror Glass Efect</h6>
        <p>Monkey #938237</p>
        <p>Owned by JnS Graphics</p>
        <p>Created by Desvella Graphics</p>

    </Col>
</Row>
        </div>
    )
}
export default NftProperties