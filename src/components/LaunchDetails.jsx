import { Box, Flex, Text, Spacer, Tag, Button, Icon } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as API from "../services/launches.js";

export function LaunchDetails() {

  const [launch, setLaunch] = useState({});

  const { launchId } = useParams();

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId)
    .then(setLaunch)
    .catch(console.log)
  }, [launchId]
  );

  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      {!launch ? (
        <div>Loading...</div>
      ) : (
        <>
          <Flex>
            <Text fontSize="2x1">
                Mission <strong>{launch.mission_name} </strong>
                ({launch.launch_year})
            </Text>
            <Spacer />
            <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Success" : "Failure"}
            </Tag>
          </Flex>
          <Box>
            Rocket: 
              <Link to ="/rocket/${launch.rocket.rocket_id}">
                {launch.rocket?.rocket_name}
              </Link>
          </Box>
        </>
      )}
    </Box>
  )
}