import React from 'react';
import Navigation from '../Shared/Navigation';
import Footer from '../Shared/Footer';
import FaqQuestions from './FAQ/FaqQuestions';
import OurServices from './OurServices';
import ContactUs from './ContactUs/FormContactUs';
import NewBanner from './Banner/NewBanner';

function Home() {
  const homeStyle={
    background: 'linear-gradient(to right,rgb(206,221,225), rgb(116,171,164))'
  }
  return (
    <div style={homeStyle}>
      <Navigation></Navigation>
      <NewBanner></NewBanner>
      <OurServices></OurServices>
      <FaqQuestions></FaqQuestions>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  )
}

export default Home;