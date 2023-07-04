import { useEffect, useRef, React } from 'react'
import ppbgimg from './../Assets/bg_ppimg.jpg';
import { init } from 'ityped';
import Slide from '@mui/material/Slide';
import { FaResearchgate, FaUserGraduate } from 'react-icons/fa';
import { GiArchiveResearch } from "react-icons/gi";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Home = () => {

    // const textRef = useRef();

    // useEffect(() => {
    //     init(textRef.current, { 
    //         showCursor: true,
    //         typeSpeed: 40,
    //         backDelay: 1500,
    //         backSpeed: 25,
    //         strings: ['Machine Learning Engineer', 'Full-Stack Web Developer', 'Android Developer', 'Game Developer'] })
    // }, [])

    return (
        <div className="vh-200" style={{overflow: 'hidden'}}>
          <div class="row align-items-center">
            {/* image area */}
            <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <div class="col-md-6 bg-opacity-10 d-flex justify-content-center align-items-end rounded-circle h-100">
                <div class="card profileCard overflow-hidden text-center">
                  <img src={ppbgimg} alt="profile-bg" class="ppbg"/>
                  <div class="pt-3 h-100 position-absolute card-content">
                    <h3>Islam Omar Elsweify</h3><p class="d-block mt-2">Computer Science and Engineering Fresh Graduate</p>
                    <h4 class="m-2">Software Engineer</h4>{/* <h4> <span ref={textRef} style={ /* add color gradient to text color {background: '-webkit-linear-gradient(45deg, #008B8B, #40E0D0)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}} className="autoTypeStyle"></span></h4> */}
                  </div>
                </div>
              </div>
            </Slide>

            {/* Text area */}
              
            <div class="col-md-6 bg-info h-100 bg-opacity-10 rounded-2" style={{color: "rgba(41, 43, 44, 0.95)"}}>
              <VerticalTimeline className="timelineComponent" layout="1-column-left" lineColor="#1111">
                <VerticalTimelineElement contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }} date="July 2021" 
                      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff',transform:'scale(1.3)' }} icon={<FaUserGraduate size="2.5"/>} >
                  <div>
                    <h2 style={{textShadow: '1px 1px 2px #808080',display:'inline'}}> Graduated with </h2>
                    <h4 style={{textShadow: '1px 1px 4px #40E0D0',display:'inline',fontStyle:'italic'}}> Very Good Degree </h4>
                  </div>
                  <p style={{fontStyle:'italic',display:'inline'}}>German University in Cairo</p><p style={{display:"inline"}}>, Egypt</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work" date="June 2021" iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff',transform:'scale(1.3)' }}
                      icon={<a color="white" href="https://www.researchgate.net/publication/353252131_Data_Augmentation_Techniques_on_Arabic_Data_for_Named_Entity_Recognition" target='_blank'><FaResearchgate color="white" size="2.5"/></a>}>
                  <h2 style={{textShadow: '1px 1px 2px #808080'}}> Published Data Augmentation Techniques paper in an NLP topic in ACLing 2021</h2> <p>(<a href="https://www.researchgate.net/publication/353252131_Data_Augmentation_Techniques_on_Arabic_Data_for_Named_Entity_Recognition" target="_blank">Open in ResearchGate</a>) </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work" date="July 2020" dateClassName="dateofBachelor"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff',transform:'scale(1.3)' }} icon={<GiArchiveResearch size="2.5"/>}>
                  <h2 style={{textShadow: '1px 1px 2px #808080',display:'inline'}}> Bachelor Thesis research in Natural Language Processing with </h2> <h4 style={{textShadow: '1px 1px 4px #40E0D0',display:'inline',fontStyle:'italic'}}> Excellent Degree </h4>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        </div>
    )
}

export default Home
