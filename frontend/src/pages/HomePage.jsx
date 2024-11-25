import React, { useEffect } from "react";
import {
  Center,
  Text,
  Container,
  textDecoration,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../component/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, blue.400, green.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Product Items
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            sm: 2,
            md: 3,
            lg: 4,
          }}
          spacing={{ base: 4, lg: 8 }}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontStyle="normal"
            fontWeight="bold"
            color="gray.500"
          >
            No products found 😢{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="teal.500"
                size="lg"
                _hover={{
                  textDecorationColor: "green.900",
                  color: "green.500",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  transition: "all 0.3s ease",
                }}
              >
                Create a Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
