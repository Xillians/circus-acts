import { Flex, Input, Tag } from "@chakra-ui/react";

export interface LabelledInputProps {
  label: string;
  placeholder?: string;
  color?: string;
  alignText?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
  fontWeight?: string;
  fontSize?: string;
  gap?: number;
  width?: string;
}

export const LabelledInput: React.FC<LabelledInputProps> = ({
  label,
  placeholder,
  color,
  alignText,
  fontWeight,
  fontSize,
  gap,
  width = "100%",
}) => {
  return (
    <Flex direction="column" gap={gap} width={width}>
      <Input
        placeholder={placeholder}
        border={"none"}
        borderBottom={"1px solid black"}
        outline={"none"}
        width="100%"
        textAlign={alignText}
        fontWeight={fontWeight}
        fontSize={fontSize}
      />
      <Tag alignSelf={"center"} variant="solid" color={color}>
        {label}
      </Tag>
    </Flex>
  );
};
