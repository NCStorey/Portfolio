import React from 'react';
import profilePic from './charlotte-luke-hollyclarkphotography-h-905.jpg'
import './aboutme.css'


function AboutMe() {
  return (
    <>
      <div id='AboutMeFirstCont'>
        <div id='profileImageAboutMeCont'>
          <img src={profilePic} alt='Nathalie Storey' id='profileImageAboutMe'></img>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
