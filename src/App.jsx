import { useState } from "react";
import ImageSlider from "./components/home/imageSlider/ImageSlider";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Room from "./components/common/Room/Room";
import RoomCategory from "./components/common/RoomCategories/RoomCategory";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Room />
      <RoomCategory />
      <Footer />
    </div>
  );
}

export default App;
