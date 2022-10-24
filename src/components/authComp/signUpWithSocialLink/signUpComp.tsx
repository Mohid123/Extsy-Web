import image from '../../../assets/img/signInPageImage.svg'
import './signUpwithSocialLink.scss'
const LeftCoverImageComp = () => {
    return ( 
        <div className=" signUpSection ">
            <div className="left-cover-image">
            <img src={image} alt="coverimg"/>
          <p className="signUpSection__signUpPara mb-0 ">
              Explore the world to experience the nature of others!
            </p>
            <hr style={{ width:'36.063rem' ,marginTop:'0rem', paddingTop:'0'}
            }/>
            <p className="signUpSection__signUpPara2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              lobortis maximus
            </p>
            </div>
          </div>
     );
}
 
export default LeftCoverImageComp;