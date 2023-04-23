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
                <img src={profilePic} alt='Profile Picture' className='profileImage'></img>
              </span>
            </div>
            <div className='col-sm-12 col-md-8 col-lg-6 intro'>
              <p>Firstly thank you for taking the time to visit. I am new to the world of front end development and still finding my way. I need to be creative. I started this journey in response to losing all of my free time to two little monkeys (also known as my children). '' </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
