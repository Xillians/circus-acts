import React from "react";
import { StartStats } from "./sheet/start-stats";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { CircusDetails } from "./sheet/circus-details";
import { Downtime } from "./sheet/downtime";

export const Sheet: React.FC = () => {
  return (
    <Box
      w="100%"
      h="100%"
      p={4}
      display="flex"
      justifyContent={"center"}
      flexDir={"column"}
    >
      <Heading
        as="h1"
        size="lg"
        style={{ color: "var(--primary-color)" }}
        textAlign="center"
      >
        Circus Show Sheet
      </Heading>
      <Flex>
        <Flex flexDir={"column"}>
          <CircusDetails
            circusName="Circus Name"
            settlementName="Settlement Name"
            date="Date"
          />
          <Downtime />
        </Flex>
        <StartStats />
      </Flex>
    </Box>
  );
};
