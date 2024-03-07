import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Acts } from "./acts/acts";

export const Showtime: React.FC = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      p={4}
    >
      <Heading as="h2" size="md" margin={4} style={{ color: "var(--secondary-color)" }}>
        Showtime
      </Heading>
      <Acts />
    </Flex>
  );
};