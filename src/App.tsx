import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Tolist } from "./page";
import { theme } from "./style/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Tolist />
    </ChakraProvider>
  );
}

export default App;
