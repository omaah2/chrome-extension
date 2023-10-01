import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import LandingPage from "./Pages/Landingpage";
import LoginPage from "./Auth/Login";
import WebStorePage from "./Pages/WebStore";
import VideoRepoPage from "./Pages/VideoRepo";
import VfilePage from "./Pages/Vfile";
import PopUpPage from "./pop/popUp"; // Import the PopUpPage component
import SingleVideoPage from "./SingleVideo/SingleVideo";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/webstore" element={<WebStorePage />} />
          <Route path="/VideoRepo" element={<VideoRepoPage />} />
          <Route path="/Vfile" element={<VfilePage />} />
          <Route path="/PopUp" element={<PopUpPage />} />{" "}
          {/* Use the PopUpPage component */}
          <Route path="/SingleVideo" element={<SingleVideoPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
