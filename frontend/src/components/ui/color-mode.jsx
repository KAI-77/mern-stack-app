import { useColorMode, IconButton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import * as React from "react";

export function ColorModeButton(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      aria-label="Toggle color mode"
      size="sm"
      icon={colorMode === "light" ? <LuSun /> : <LuMoon />}
      {...props}
    />
  );
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? light : dark;
}
