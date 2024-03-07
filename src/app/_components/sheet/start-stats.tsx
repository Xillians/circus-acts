import { Flex, Heading, Input, Tag } from "@chakra-ui/react";
import React from "react";

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
          placeholder={stat.placeholder}
        />
      ))}
    </Flex>
  );
};

interface LabelledInputProps {
  label: string;
  placeholder: string;
}

const LabelledInput: React.FC<LabelledInputProps> = ({
  label,
  placeholder,
}) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="10em"
      h="100%"
      p={4}
    >
      <Input
        aria-details={`input ${placeholder}`}
        border={0}
        textAlign={"center"}
        fontSize={"1em"}
        fontWeight="bold"
        outline={"none"}
        w={"100%"}
        borderBottom={"1px solid black"}
      />
      <Tag color={"var(--secondary-color)"}>{label}</Tag>
    </Flex>
  );
};
