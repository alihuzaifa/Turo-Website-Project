import React from 'react';
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import Banner from './Components/Banner';
import FindDrive from './Components/FindDrive';
import SimpleSlider from "./Components/SlickSlider";
import PlaceFinderSlider from "./Components/SecondSlickSlider";
import BrowseDestination from "./Components/ThirdSlickSlider";
import BrowseInternationalDestination from "./Components/FourthSlickSlider";
import FuelYourDreams from "./Components/FuelYourDreams";
import BrowseExperience from "./Components/BrowseExperience";
import MeetHost from "./Components/MeetHost";
import Key from "./Components/Key";
import Footer from "./Components/Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

const App = () => {
  return (
    <>
      <div className="main-container">
        <Topbar />
        <Navbar />
        <Banner />
        <FindDrive />
        <SimpleSlider />
        <PlaceFinderSlider />
        <BrowseDestination />
        <BrowseInternationalDestination />
        <FuelYourDreams />
        <BrowseExperience />
        <MeetHost />
        <Key />
        <Footer />
      </div>
    </>
  )
}

export default App
