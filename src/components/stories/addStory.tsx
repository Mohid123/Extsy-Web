import {  Card, Divider,  Button, Row, Col } from "antd";
import CloseIcon from "../../assets/img/Close.svg"
import Video from "../../assets/img/Camerabadges for story.svg"
import Image from "../../assets/img/picture badges for story.svg"
import Text from "../../assets/img/text badges for story.svg"
import Text1 from "../../assets/img/Text.svg"
import Text2 from "../../assets/img/Image.svg"
import Text3 from "../../assets/img/VideoText.svg"
import { useState } from "react";
import BackArrowIcon from "../../assets/img/Back.svg"
import Close from "../../assets/img/Close.svg"
import galleryImage1 from "../../assets/img/Rectangle 2.svg"
import UploadedImage from "../../assets/img/Rectangle 22.svg"
import VideoCamera from "../../assets/img/Group 2.svg"
import UploadIcon from "../../assets/img/Group 1.svg"
import CloseDialog from "../../assets/img/Icons.svg"

import   "./index.scss"



const AddStory = () => {
    const [card1, setCard1] = useState(true)
    const [textCard, settextCard] = useState(false)
    const [imageCard, setimageCard] = useState(false)
    const [videoCard, setvideoCard] = useState(false)
    const [imageUploadCard, setImageUploadCard] = useState(false)

    
    function handleClick(argument:any){
        
        if(argument==='text')
        {
            setCard1(false)
            settextCard(true)
            setimageCard(false)
            setvideoCard(false)
        }
        else if (argument==='image')
        {
           
            setCard1(false)
            settextCard(false)
            setimageCard(true)
            setvideoCard(false)
        }
        else if (argument==='video')
        {
            setCard1(false)
            settextCard(false)
            setimageCard(false)
            setvideoCard(true) 
        }
        else if (argument==='closes'){
           console.log('card 1')
            setCard1(true)
            settextCard(false)
            setimageCard(false)
            setvideoCard(false) 
        }
        else {
            setCard1(false)
        }

       
    }
     function chooseImage(){
        setCard1(false)
        settextCard(false)
        setimageCard(false)
        setvideoCard(false) 
        setImageUploadCard(true) 

    }
 return (
    <div>
        {card1? ( <div className=" card p" >
       
        {/* <img src={CloseIcon} alt="" style={{width:'30px'}} className="cursor"onClick={()=>{handleClick('close')}}/> */}
        
        <div className="d-flex cardBackground  ">
        <Card className="innerCard text-center cursor" onClick={()=>{handleClick('text')}}>
            <img src={UploadIcon} className="" alt="" /> <br />
            <h6 className="innerCard__font">Upload</h6>
            <p className="innerCard__font__subFont">Upload your <br /> image here</p>
    </Card>
    <Card className="innerCard text-center  cursor" onClick={()=>{handleClick('image')}}>
            <img src={VideoCamera} alt="" /> <br />
            <h6 className="innerCard__font">Upload</h6>
            <p className="innerCard__font__subFont">Upload your <br /> image here</p>
            
    </Card>
    <Card className="innerCard text-center cursor "onClick={()=>{handleClick('video')}} >
            <img src={VideoCamera} alt="" /> <br />
            <h6 className="innerCard__font">Upload</h6>
            <p className="innerCard__font__subFont">Upload your <br /> image here</p>
            
    </Card>
    </div>
    <div className="text-center mt-3">
        <img src={CloseDialog} alt="" className="cursor"onClick={()=>{handleClick('close')}} />
    </div>
    </div>):textCard?(<div className="uploadCard">
    <h5 className="fs_16 fw_500 fc_black">Add to Your Storrerey</h5>
    <p className="fs_11 fw_300 fc_grey">Write something here @Dr.Dre @KayneWest <br /> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
    <Divider className="mb-3 mt-2"></Divider>
    <div className="d-flex">
    <Card className="innerCardBackground text-center  cursor" >
            <img src={Image} alt="" /> <br />
            <img src={Text3} alt="" />
    </Card>
    <Card className="innerCardBackground text-center cursor " >
            <img src={Video} alt="" /> <br />
            <img src={Text3} alt="" />
    </Card>
    </div>
    <Divider className="mt-3 mb-3"></Divider>
    <div className="text-center">
    <Button type="primary" className=" px-5 button" size="large" >Upload</Button>
    </div>

    </div>)
    :imageCard?(<div className="imageUpload">
        <div className="d-flex justify-content-between">
        <img src={BackArrowIcon} alt=""  onClick={()=>{handleClick('closes')}} />
        <img src={Close} alt=""  className="cursor" onClick={()=>{handleClick('closes')}}/>
        </div>
            <Row  gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }} className="mt-4">
                <Col className="gutter-row pe-1" span={8}>
                <img src={galleryImage1} className="galleryImage " alt="" />
                </Col>
                <Col className="gutter-row pe-1" span={8}>
                <img src={galleryImage1} className="galleryImage " alt="" />
                </Col>
                <Col className="gutter-row pe-1" span={8}>
                <img src={galleryImage1} className="galleryImage" alt="" />
                </Col>
                <Col className="gutter-row pe-1 mt-2" span={8}>
                <img src={galleryImage1} className="galleryImage" alt="" />
                </Col>
                <Col className="gutter-row pe-1 mt-2" span={8}>
                <img src={galleryImage1} className="galleryImage" alt="" />
                </Col>
                <Col className="gutter-row pe-1 mt-2" span={8}>
                <img src={galleryImage1} className="galleryImage" alt="" />
                </Col>
            </Row>
            <Row  gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }} className="justify-content-center">
                <Col className="gutter-row" span={10}>
            <Button type="primary" className="mt-4 px-5 button" size="large" onClick={chooseImage}>Choose</Button>
       </Col>
       </Row>
       
    </div>)
    :videoCard?(<div className="imageUpload2">
    <h5 className="fs_16 fw_500 fc_black">Add to Your Story</h5>
    <p className="fs_11 fw_400 fc_grey">Text</p>
    <p className="fs_11 fw_300 fc_grey">Write something here @Dr.Dre @KayneWest <br /> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
    <Divider></Divider>
    <div>
       <img src={UploadedImage} className="uploadedImage" alt="" />
       <img src={CloseIcon}  className="closeIcon cursor" alt="" />
    </div>
    <Row  gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }} className="justify-content-center">
           <Col className="gutter-row" span={14}>
       <Button type="primary" className="mt-4 px-5 button" size="large" onClick={chooseImage}>Upload</Button>
  </Col>
  </Row>
</div>)
    :imageUploadCard?(<div className="imageUpload2">
         <h5 className="fs_16 fw_500 fc_black">Add to Your Story</h5>
         <p className="fs_11 fw_400 fc_grey">Text</p>
         <p className="fs_11 fw_300 fc_grey">Write something here @Dr.Dre @KayneWest <br /> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
         <Divider></Divider>
         <div>
            <img src={UploadedImage} className="uploadedImage" alt="" />
            <img src={CloseIcon}  className="closeIcon" alt="" />
         </div>
         <Row  gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }} className="justify-content-center">
                <Col className="gutter-row" span={14}>
            <Button type="primary" className="mt-4 px-5 button" size="large" onClick={chooseImage}>Upload</Button>
       </Col>
       </Row>
    </div>)
    :(<></>)
    }
   
    </div>
 )
}
export default AddStory