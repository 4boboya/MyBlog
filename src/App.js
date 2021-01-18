import React from 'react'
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import InfoBoard from "./components/InfoBoard"
import FeaturedBoard from "./components/FeaturedBoard"
import Banner from "./components/Banner"

export default function App() {
  let article=
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.";
  return (
    <div>
      <Navbar/>
      <FeaturedBoard title="FeaturedBoard">
        <Banner article={article}/>
      </FeaturedBoard>
      <h3>My Blog by React</h3>
      <InfoBoard/>
      <Footer/>
    </div>
  );
}