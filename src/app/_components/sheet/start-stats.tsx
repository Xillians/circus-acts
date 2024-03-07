import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { LabelledInput } from "../labelled-inputs";

export const StartStats: React.FC = () => {
  const stats = [
    {
      label: "Prestige",
      placeholder: "Prestige",
    },
    {
      label: "Excitement(EXC)",
      placeholder: "Excitement",
    },
    {
      label: "Anticipation (ANT)",
      placeholder: "Anticipation",
    },
    {
      label: "Max ANT",
      placeholder: "Max ANT",
    },
  ];
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100%"
      p={4}
    >
      <Heading as="h2" size="md" style={{ color: "var(--primary-color)" }}>
        Start Stats
      </Heading>
      {stats.map((stat, index) => (
        <LabelledInput
          key={index}
          label={stat.label}
          color="var(--secondary-color)"
          alignText="center"
          fontWeight="bold"
          fontSize="1.5rem"
          gap={4}
          width="10em"
        />
      ))}
    </Flex>
  );
};
