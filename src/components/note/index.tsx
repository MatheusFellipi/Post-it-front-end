import React, { ChangeEvent, useState } from "react";
import { Box, Button, Flex, Text, Icon, Tag } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useFecth } from "../../hook/useFetch";

type quest = {
  id: string;
  title: string;
  status: string;
  description: string;
};

export function Note() {
  const { data: questData } = useFecth<quest[]>("task");
  const [edit, setEdit] = useState<boolean>(true);

  return (
    <>
      {questData?.map((quest) => (
        <Box
          key={quest.id}
          as="div"
          maxW="300px"
          borderWidth="1px"
          borderRadius="lg"
          padding={{ lg: "0.5rem", md: "0.5rem", sm: "0.5rem" }}
          margin={{ lg: "0.5rem", md: "0.5rem", sm: "0.5rem" }}
        >
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {quest.title}

            <Tag
              mt={"0.2rem"}
              ml={{ lg: "12rem", md: "10.6rem", sm: "10.6rem" }}
              borderRadius={"0"}
              colorScheme={"orange"}
              fontSize={{ lg: "0.8rem" }}
              textColor="gray.700"
              fontWeight="normal"
            >
              {quest.status}
            </Tag>
          </Box>

          <Box as={Text} display="flex" mt="2" textAlign={"justify"}>
            {quest.description}
          </Box>
          <Flex
            mt={{ lg: "0.5rem" }}
            justify={{ lg: "space-between" }}
            as="div"
            display="flex"
            alignItems="center"
            textAlign="center"
          >
            <Flex w={"100%"} justify={"end"}>
              <Button
                variant={"outline"}
                border={"0px"}
                w={{ lg: "0.5rem" }}
                h={{ lg: "1.5rem" }}
                colorScheme={"orange"}
                onClick={() => {
                  setEdit(!edit);
                }}
                _hover={{
                  filter: "brightness(0.8)",
                }}
              >
                <Icon as={FaEdit} />
              </Button>
              <Button
                variant={"outline"}
                border={"0px"}
                mr={{ lg: "0.5rem" }}
                w={{ lg: "0.5rem" }}
                h={{ lg: "1.5rem" }}
                colorScheme={"red"}
                _hover={{
                  filter: "brightness(0.8)",
                }}
              >
                <Icon as={FaTrash} />
              </Button>
            </Flex>
          </Flex>
        </Box>
      ))}
    </>
  );
}
