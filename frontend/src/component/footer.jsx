import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="transparent" py={4} textAlign={"center"}>
      <Text fontSize="sm">2024 Shan Umbong. All rights reserved.</Text>
    </Box>
  );
}
