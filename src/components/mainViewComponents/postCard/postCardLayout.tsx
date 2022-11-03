import {useState} from 'react';
import { Avatar, Badge, Image, Input } from "antd";
import threeDots from '../../../assets/img/threeDots.svg'

import likeIcon from '../../../assets/img/likeIcon.svg'
import commentIcon from '../../../assets/img/commentIcon.svg'
import shareIcon from '../../../assets/img/postCardShareIcon.svg'
import bookMark from '../../../assets/img/Bookmark.svg'
import commentImage from '../../../assets/img/commentImgIcon.svg'
import './postCard.scss'
type Props = {
    
    children?: JSX.Element;
  };
const PostCardLayout = ({children}:Props) => {
    const [count, setCount] = useState(5);
    return (
      <div className="postCardLayout p-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <Avatar
              src={
                <Image
                  src="https://joeschmoe.io/api/v1/random"
                  style={{
                    width: 32,
                  }}
                />
              }
            />
            <span>
              <p className="m-0 p-0 postCardfontStyle">Ali Raza</p>
              <p className="m-0 p-0 postCardfontStyle__username">@alirzaa</p>
            </span>
          </div>
          <img src={threeDots} className="cursor" />
        </div>
        <p className="postCardfontStyle__text mt-3">-Photo is perfecto</p>

        {children}
        <div className="py-3 d-flex justify-content-between">
          <div className="d-flex align-items-center cursor">
            <img src={likeIcon} className="me-2" />
            <span className="postCardfontStyle__iconText">Like</span>
          </div>
          <div className="d-flex align-items-center cursor">
            <Badge count={count} size="small">
              <img src={commentIcon} className="" />
            </Badge>
            <span className="postCardfontStyle__iconText ms-2">Comment</span>
          </div>
          <div className="d-flex align-items-center cursor">
            <img src={shareIcon} className="me-2" />
            <span className="postCardfontStyle__iconText">Share</span>
          </div>
          <div className="d-flex align-items-center cursor">
            <img src={bookMark} className="me-2" />
            <span className="postCardfontStyle__iconText">Save</span>
          </div>
        </div>
        <p className="fw-bold p-0 m-0 style">42 likes</p>
        <p className="p-0 m-0  style__description">
          
          Liked by <span className="fw-bold">Almana kew</span> and{" "}
          <span className="fw-bold">others</span>
        </p>
        <p className=" p-0 m-0 style__description__style">
          <span className="fw-bold">Almana kew</span> Mentioned users
          <span className="fw-bold tagName"> @Dr.Dre </span>and
          <span className="fw-bold tagName"> @KayneWest </span>will look like
          this lorem ipsum ko it the greitai nusimato kaikas, ko tikrai
          nesitikėsit{" "}
        </p>
        <span className="me-3 style__description__time ">2 hours ago</span>
        <span className="style__description">See translation</span>
        <p className=" style__viewAllComment">View all 5 comments</p>
        <div className="d-flex  px-3 commentField">
          <Avatar
            src={
              <Image
                src="https://joeschmoe.io/api/v1/random"
                style={{
                  width: 32,
                }}
              />
            }
          />
          <Input placeholder="write something..." bordered={false} />
          <img src={commentImage} />
        </div>
      </div>
    );
}

  
export default PostCardLayout;