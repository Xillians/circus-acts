import { Divider, Flex, Grid, Input, Tag } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

interface circusDetailsProps {
  circusName: string;
  settlementName: string;
  date: string;
}

export const CircusDetails: React.FC<circusDetailsProps> = (
  props: circusDetailsProps
) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100%"
      p={4}
    >
      <Grid templateColumns="4fr 1fr" gap={8}>
        <LabelledInput label="Circus Name" placeholder={props.circusName} />
        <LabelledInput label="Date" placeholder={props.date} />
      </Grid>
      <LabelledInput
        label="Settlement Name"
        placeholder={props.settlementName}
      />
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
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        p={2}
    >
      <Flex direction="row" alignItems="center" w={"100%"} gap={16}>
        <Tag variant="solid" colorScheme="teal">
          {label}
        </Tag>
        <Input 
            ref={inputRef} 
            placeholder={placeholder} 
            border={"none"} 
            w={"auto"}
            outline={"none"}
        />
      </Flex>
      <Divider orientation="horizontal" h="1px" bg="black" />
    </Flex>
  );
};
