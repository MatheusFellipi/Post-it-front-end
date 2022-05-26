import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Tolist } from "./page";

function App() {
  return (
    <ChakraProvider>
      <Tolist />
    </ChakraProvider>
  );
}

export default App;
