import React from "react";
import { Flex } from "@chakra-ui/react";

import { Header } from "../components/header/header";
import { Note } from "../components/note";
import { CreateNote } from "../components/note/createnewNote";

export function Tolist() {
  return (
    <>
      <Header />
      <Flex
        p={{ sm: "1rem" }}
        as={"section"}
        justify={{ md: "flex-end", sm: "flex-end" }}
      >
        <CreateNote />
      </Flex>
      <Flex
        p={{ sm: "1rem" }}
        as={"section"}
        flexDirection={{ lg: "row", md: "row", sm: "column" }}
        wrap={"wrap"}
        w={"100vw"}
        align={{ md: "center", sm: "center" }}
      >
        <Note />
      </Flex>
    </>
  );
}
