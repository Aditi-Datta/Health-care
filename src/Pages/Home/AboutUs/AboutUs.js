import React from 'react'
import Footer from '../../Shared/Footer'
import Navigation from '../../Shared/Navigation'
import FaqQuestions from '../FAQ/FaqQuestions'

import FounderSays from './FounderSays'

function AboutUs() {
  const homeStyle={
    background: 'linear-gradient(to right,rgb(206,221,225), rgb(116,171,164))'
  }
  return (
    <div style={homeStyle}>

    <Navigation></Navigation>
    <FounderSays></FounderSays>
    <FaqQuestions></FaqQuestions>
    <Footer></Footer>
    </div>
  )
}

export default AboutUs