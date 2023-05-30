import {useRef, useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';
import profilePic from './charlotte-luke-hollyclarkphotography-h-905.jpg'
import pic2 from './IMG-20220601-WA0010.jpg'
import pic3 from './WhatsApp Image 2023-05-19 at 20.33.44.jpg'
import pic4 from './WhatsApp Image 2023-05-19 at 20.34.56.jpg'
import './aboutme.css'


function AboutMe() {

  const {ref: aboutMeSecondContRef, inView: secondContIsVisible} = useInView();

  return (
    <>
      <div className='AboutMeCont' id='aboutMeFirstCont'>

        <div id='profileImageAboutMeCont'>
          <img src={profilePic} alt='Nathalie Storey' id='profileImageAboutMe'></img>
        </div>

        <div id='IntroAboutMeCont'>
          <span className='subtitle' id='aboutMeSubTitle'>About me - A Brief Overview</span> 
          <div className='text' id='aboutMePara1'>
            
            <p>At my core I am creative, reflective, hardworking, empathetic, honest and kind.</p>
            
            <p>I have spent the last 9 years working in finance. This let me build my soft skills like team working and attention to detail, but left me craving creativity in my professional life. </p>
            
            <p>It would be great to say I look like this picture all the time. However this is me on a very good day, after 2 hours of prepping and someone taking a candid photo. In reality, this is me 2% of the time. The other 98%? </p>
          </div>
        </div>

      </div>

      <div className='AboutMeCont' id='aboutMeSecondCont' ref={aboutMeSecondContRef}>
        <img src={pic2} alt='Nathalie Storey holding an owl' className='aboutMePic'></img>
        <img src={pic3} alt='Nathalie Storey standing in a play castle' className='aboutMePic'></img>
        <img src={pic4} alt='Nathalie Storey sitting with presents on the floor' className='aboutMePic'></img>
      </div>
    </>
  );
}

export default AboutMe;
