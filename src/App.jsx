import { Image } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./assets/index.png";
import { LaunchList } from "./components/LaunchList.jsx";
import { LaunchDetails } from "./components/LaunchDetails.jsx";
import { RocketDetails } from "./components/RocketDetails.jsx";

export function App() {
  return (
    <>
      <Image src={logo} m={4} width={250} />
      <Routes>
        <Route path="/" element ={<LaunchList/>} />
        <Route path="launch/:launchId" element={<LaunchDetails/>} />
        <Route path="rocket/:rocket_id" element={<RocketDetails/>} />
      </Routes>
    </>
  );
}