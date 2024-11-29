import { Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  const textColor = useColorModeValue("gray.200", "#0A0D14");

  return (
    <Text textAlign="center" fontSize="sm" color={textColor} py={4}>
      {" "}
      © 2024 Shan Umbong. All rights reserved.
    </Text>
  );
}
