import { Flex, Grid } from "@chakra-ui/react";
import { LabelledInput } from "../../labelled-inputs";

export const Actor: React.FC = () => {
  return (
    <Flex
      flexDir={"column"}
      maxW={"12em"}
      p={8}
      borderRadius={"8px"}
      boxShadow={"0 0 2px 0 #000000"}
      margin={4}
    >
      <Grid templateColumns="3fr 1fr 1fr" gap={8}>
        <LabelledInput label="Actor" placeholder="Actor Name" />
        <LabelledInput label="Level" placeholder="Level" />
        <LabelledInput label="DC" placeholder="DC" />
      </Grid>
      {[...Array(3)].map((_, i) => (
        <Grid templateColumns="1fr 1fr 1fr 1fr" gap={8} key={i}>
          <LabelledInput label="Action" placeholder="" />
          <LabelledInput label="Result" placeholder="" />
          <LabelledInput label="EXC" placeholder="" />
          <LabelledInput label="ANT" placeholder="" />
        </Grid>
      ))}
    </Flex>
  );
};
