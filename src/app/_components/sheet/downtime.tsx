import { Flex, Grid, Heading, Input, Tag } from "@chakra-ui/react";
import React from "react";

export const Downtime: React.FC = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      p={4}
    >
      <Heading as="h2" size="md" margin={4} style={{ color: "var(--secondary-color)" }}>
        Downtime
      </Heading>
      <Advertisement />
      <Activities />
    </Flex>
  );
};

const Advertisement: React.FC = () => {
  return (
    <Grid
      templateColumns="1fr 1fr 1fr"
      justifyContent="center"
      p={4}
      gap={8}
      w="100%"
    >
      <Grid>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          p={4}
          gap={16}
          borderBottom={"1px solid black"}
        >
          <Tag>Advertisement</Tag>
          <Input
            type="text"
            placeholder="Advertisement"
            border={"none"}
            outline={"none"}
          />
        </Flex>
      </Grid>
      <Grid>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          p={4}
          gap={16}
          borderBottom={"1px solid black"}
        >
          <Input
            type="text"
            placeholder="gp"
            border={"none"}
            outline={"none"}
          />
          <Tag>gp</Tag>
        </Flex>
      </Grid>
      <Grid>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          p={4}
          gap={16}
          borderBottom={"1px solid black"}
        >
          <Tag>Ant</Tag>
          <Input
            type="text"
            placeholder="anticipation"
            border={"none"}
            outline={"none"}
          />
        </Flex>
      </Grid>
    </Grid>
  );
};

const Activities: React.FC = () => {
  const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"];
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      p={4}
    >
      <Heading as="h3" size="sm" margin={2} style={{ color: "var(--secondary-color)" }}>
        Downtime Activities
      </Heading>
      {days.map((day, index) => (
        <Grid key={index} templateColumns="3fr 1fr">
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            p={4}
          >
            <Flex
              direction="row"
              justifyContent={"space-between"}
              alignItems="center"
              p={4}
              w={"100%"}
              borderBottom={"1px solid black"}
            >
              <Tag>{day}</Tag>
              <Input
                type="text"
                placeholder="Activity"
                border={"none"}
                outline={"none"}
                w={"85%"}
              />
            </Flex>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            p={4}
          >
            <Flex
              direction="row"
              justifyContent="center"
              alignItems="center"
              p={4}
              gap={16}
              borderBottom={"1px solid black"}
              >
              <Tag>Ant</Tag>
              <Input
                type="text"
                placeholder="Anticipation"
                border={"none"}
                outline={"none"}
              />
            </Flex>
          </Flex>
        </Grid>
      ))}
    </Flex>
  );
};
