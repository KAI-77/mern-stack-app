import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/Createpage";
import Navbar from "./component/navbar";
import { useProductStore } from "./store/product";

function App() {
  const { products } = useProductStore();

  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.200", "#0A0D14")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
