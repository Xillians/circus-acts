import React from "react";
import { StartStats } from "./sheet/start-stats";
import { Flex } from "@chakra-ui/react";

export const Sheet: React.FC = () => {
  return (
    <div>
      <Flex
      >
        <StartStats />
      </Flex>
    </div>
  );
};
