import React from "react";
import { StartStats } from "./sheet/start-stats";
import { Box, Flex, Heading } from "@chakra-ui/react";

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
      <Flex
      >
        <StartStats />
      </Flex>
    </Box>
  );
};
