import './sponsor.scss'
import adImg from '../../assets/img/sponsorImg.png'
const Sponsor = () => {
    return ( 
        <div className="sponsor p-3">
        <p className='sponsorAbout'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus id eget eget risus metus. Vel nunc tristique purus, facilisis neque vel amet enim. Arcu, eu nunc feugiat vitae lacinia ornare. Adipiscing turpis vel turpis convallis. Nibh mollis amet volutpat.</p>
         <img src={adImg} height={307} style={{maxWidth:"580px",width:"100% "}}/>
       
        <div className='sponsorMessage'>
            <p className='p-0 m-0 sponsorHeadText'>What is this generation of workers really wants</p>
            <p className='p-0 m-0 sponsorFindMore'>Find out more</p>
        </div>
        </div>
      );
}
 
export default Sponsor;