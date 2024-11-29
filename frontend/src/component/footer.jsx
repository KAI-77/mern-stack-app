import { Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  const textColor = useColorModeValue("gray.200", "#0A0D14");

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "16px",
        fontSize: "14px",
        color: "#4A4A4A",
      }}
    >
      © 2024 Shan Umbong. All rights reserved.
    </footer>
  );
}
