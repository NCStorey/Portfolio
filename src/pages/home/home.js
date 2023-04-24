import React from 'react';
import './home.css'
import profilePic from './charlotte-luke-hollyclarkphotography-h-905.jpg'


function Home() {
  return (
    <>
      <div className='container-fluid home'>
        <div className='row homeflex'>
            <div className='col-12 hook'>
              <span className='hookText'><span >Hey,</span><span> nice to see you</span></span>
            </div>
            <div className='col-sm-12 col-md-4 col-lg-6 profilePictureCont'>
              <span>
                <img src={profilePic} alt='Profile Picture' className='profileImage' style={{alignSelf:'center'}}></img>
              </span>
            </div>
            <div className='col-sm-12 col-md-8 col-lg-6 intro'>
              <p>Firstly thank you for taking the time to visit. I am new to the world of front end development and still finding my way.</p>
              
              <span className='subtitle'>Why the change?</span> 
              <p>I NEED to be creative. I need to be in an envorinment that allows a creative outlet. This is what is driving me to change and grow. In addition to this I thrive in an envorinment that fosters communication and teamwork. I enjoy learning and relish a challenge. Creativity, communication and continual learning are some of the cornerstones of web development and are what I need to be fulfilled.</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
