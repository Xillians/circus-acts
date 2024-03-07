import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { Payout } from "../payout";
import { Actor } from "./actor";


export const Acts: React.FC = () => {
  const acts = [
    {
      label: "Act 1: Opening Act",
      actors: 1,
    },
    {
      label: "Act 2: Build Up",
      actors: 2,
    },
    {
      label: "Act 3: Main Event",
      actors: 1,
    },
    {
      label: "Act 4: Finale",
      actors: 3,
    },
  ];

  return (
    <Grid templateColumns={"1fr 1fr 1fr"} gap={8}>
      <GridItem rowSpan={1}>
        <Flex direction="column">
          {acts.slice(0, 2).map((act, index) => (
            <ActComponent act={act} key={index} />
          ))}
        </Flex>
      </GridItem>
      <GridItem rowSpan={1}>
        <Flex direction="column">
          {acts.slice(2, 3).map((act, index) => (
            <ActComponent act={act} key={index} />
          ))}
          {acts.slice(3, 4).map((act, index) => (
            <ActComponent
              act={{ ...act, actors: act.actors - 1 }}
              key={index}
            />
          ))}
        </Flex>
      </GridItem>
      <GridItem rowSpan={1}>
        <Flex direction="column">
          {acts.slice(3, 4).map((act, index) => (
            <ActComponent act={{ ...act, actors: 1 }} key={index} />
          ))}
          <Payout />
        </Flex>
      </GridItem>
    </Grid>
  );
};

const ActComponent: React.FC<{ act: { label: string; actors: number } }> = ({
  act,
}) => {
  const isFinalActor = act.label === "Act 4: Finale" && act.actors === 1;

  return (
    <Flex flexDir={"column"} maxW={"50em"} p={8}>
      {!isFinalActor && (
        <Heading as="h2" margin={4} style={{ color: "var(--primary-color)" }}>
          {act.label}
        </Heading>
      )}
      {isFinalActor && <Box height="2em" />} {/* Adjust the height as needed */}
      {Array.from({ length: act.actors }, (_, i) => (
        <Actor key={i} />
      ))}
    </Flex>
  );
};