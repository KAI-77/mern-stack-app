import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { forwardRef } from "react";
import { PlusSquareIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW="full"
      px={4}
      py={2}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text
          fontSize={{ base: "2xl", sm: "3xl" }}
          fontWeight={"bold"}
          textTransform={"full-width"}
          textAlign={"center"}
          fontStyle="italic"
          bgGradient={"linear(to-r, blue.200, green.200)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Inventra 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          justify={["center", "flex-end"]}
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
