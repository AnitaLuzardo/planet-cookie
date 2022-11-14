import React from 'react';
import SlideShow from '../components/SlideShow';
import imgHome from '../pages/helpers/imgHome';
 
function Home() {

  return (
    <> 
      <SlideShow images={imgHome} />
    </>
  )
}

export default Home