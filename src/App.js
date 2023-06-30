import './App.css';
import logo from "./images/Logo.png";
import bgm from "./images/bgmountain-removebg-preview.png";
import obgm from "./images/bgmountain.jpg";

import React,{ useState } from 'react';
import Slider from "react-slick";
import './slick.css';
import "./slick-theme.css";


function App() {

  const [togglebutton,setTogglebutton] = useState(false);

  const toggledisplay = (togglevalue) =>{
    if(togglevalue===true)
    return <><ul className='hamburg-list' >
    <li><a href="#history">01.HISTORY</a></li>
    <li><a href="#team">02.TEAM</a></li>
            </ul></>;
  }

  var settings = {
    dots: false,
    infinite: true,
    arrows:true,
    //autoplay:true,
    speed: 500,
    centerMode:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
    {
    breakpoint: 1280,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: false
    }
    },
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false
    }
    },
    {
    breakpoint: 375,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows:false
    }
    }
    ]
    };

  return (
    <>
    <div className='fbg'>
      <nav className='firstnav'>
                <img className="logo" src={logo} alt="Coalition logo"/>
                <ul id="nav-list" className="nav-list"> 
                    <li><a href="#history">01.HISTORY</a></li>
                    <li><a href="#team">02.TEAM</a></li>
                </ul>
                <div className='burger-toggle-d'>
                <button className="hamburger" id="hamburger" onClick={()=> setTogglebutton(!togglebutton)}>
                    <i className="fas fa-bars">C</i>
                </button>
                {toggledisplay(togglebutton)}
                </div>
        </nav>
        <section className="hero">
              <div className="hero-area">
                <div className="hero-text">
                
                <h1 className='maintextone'>LOSANGELES</h1>
                <h1 className='maintexttwo'>MOUNTAINS</h1>
                
                </div>
              </div>
              
        </section>
        <img  className= "overlapimg" src={bgm} alt='bgm'/>
        <img  className= "overlapimg2" src={obgm} alt='bgm'/>
        </div>

        <div className='secondview'>
        <nav className='secondnav'>
                <div className='secondlogo'>
                <img className="logo2" src={logo} alt="Coalition logo"/>
                <p>LOSANGELES <br/> MOUNTAINS</p>
                </div>
                <ul id="nav-list-2" className="nav-list-2"> 
                    <li><a href="#history" className='seconda'>01.HISTORY</a></li>
                    <li><a href="#team" className='seconda'>02.TEAM</a></li>
                </ul>
        </nav>
        <section className="sub-section" id="history">
            <span className='historyspan'>
            <h1>01.</h1>
            <h2>HISTORY</h2>
            </span>
            <div className="information">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</p>
            </div> 
            <div className="project-container">
             <Slider {...settings}>

                <div className="project-card">
                    <img className="project-image" src={bgm} alt="Project One"/>
                </div>

                <div className="project-card">
                    <img className="project-image" src={obgm} alt="Project One"/>
                </div>

                <div className="project-card">
                    <img className="project-image" src={bgm} alt="Project One"/>
                </div>

                <div className="project-card">
                    <img className="project-image" src={obgm} alt="Project One"/>
                </div>

                <div className="project-card">
                    <img className="project-image" src={bgm} alt="Project One"/>
                </div>
                </Slider>
            </div>     
        </section>
        </div>

        <div className='thirdview'> 
          <section className='sub-section2' id='team'>
          <h1>02.</h1>
          <h2>CLIMB</h2>
            <div className="information">
                <p>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</p>
            </div> 
          </section>
        </div>

        <div className='fourthview'>
          <div className='anothernav'>
            <ul id="nav-list-3" className="nav-list-3"> 
                    <li><a href="#mountain1" className='thirda'>MOUNTAIN1</a></li>
                    <li><a href="#mountain2" className='thirda'>MOUNTAIN2</a></li>
            </ul>
          </div>
          <section className='sub-section3'>
          
          <div className='schedulecontainer'>
          <h2>SCHEDULE</h2>
            <div className="scheduleinfo">
                <span className='sinfo'><p>17 Nov 2016 </p><p>Vestibulum viverra</p></span>
                <span className='sinfo'><p>13 Dec 2016 </p><p>Vestibulum viverra</p></span>
                <span className='sinfo'><p>28 Dec 2016 </p><p>Vestibulum viverra</p></span>
                <span className='sinfo'><p>09 Feb 2017 </p><p>Vestibulum viverra</p></span>
            </div> 
          </div>
          </section>
          
        </div>

        <footer>
              <div className='secondlogo'>
                <img className="logo2" src={logo} alt="Coalition logo"/>
                <p className='footertext'>LOSANGELES <br/> MOUNTAINS</p>
                </div>
            <p className='footertext'>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
        </footer>
    </>
  );
}

export default App;
