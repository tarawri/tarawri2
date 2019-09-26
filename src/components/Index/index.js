import React from 'react';


import Home from "./../Home/Home"
import Work from "./../Work/Work"
import Profile from "./../Profile/Profile"
import Protfolio from "./../Protfolio/Protfolio"
import About from "./../About/About"
import Footer from "./../Footer/Footer"
import SocialMedia from "./../SocialMedia/SocialMedia"

class Index extends React.Component {
  render() {
    return (
      <div className="App">
   
        <Home />
        <Work />
        <Protfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />

      
      </div>
    );
  }
}

export default Index;
