import React from 'react';
import SlideShow from '../components/SlideShow';
import imgHome from '../pages/helpers/imgHome';
 
function Home() {

  return (
    <> 
      <SlideShow 
        images={imgHome} 
        paddingHome = 'contenedorPrincipalHome'
        transition = {true}
      />
    </>
  )
}

export default Home