import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { LabelledInput } from "../labelled-inputs";

export const Payout: React.FC = () => {
  const labels = ["Final EXC", "Final ANT", "Prestige", "Total Payout"];

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      p={4}
      marginTop={54}
    >
      <Heading
        as="h2"
        size="md"
        margin={4}
        style={{ color: "var(--primary-color)" }}
      >
        Payout
      </Heading>
    <Flex direction="column">
      {labels.map((label) => (
        <LabelledInput
          key={label}
          label={label}
          width="10em"
          fontSize="1.2rem"
          gap={16}
          alignText="center"
          color="var(--secondary-color)"
        />
      ))}
    </Flex>
    </Flex>
  );
};
