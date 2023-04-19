import React from 'react';
import './home.css'


function Home() {
  return (
    <>
      <div className='container-fluid home'>
        <div className='row homeflex'>
            <div className='col-12 hook'>
                <span className='hookText'>Hey, are you new here?</span>
            </div>
            <div className='col-sm-12 col-md-4 col-lg-6 profilePicture'>

            </div>
            <div className='col-sm-12 col-md-8 col-lg-6 intro'>

            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
