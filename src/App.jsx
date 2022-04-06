import { useState, useEffect } from "react";
import { Heading, Image } from "@chakra-ui/react";
import * as API from "./services/launches.js";
import { LaunchItem } from "./components/LaunchItem.jsx";

import logo from "./assets/index.png";

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);
  
  return (
    <>
      <Image src={logo} m={4} width={250} />
      <Heading align="center" as='h1' size='lg' m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  );
}