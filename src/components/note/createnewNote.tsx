import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useQueryClient } from "react-query";
import { api } from "../../services/axios";
import { Quests } from "../../types/quest";

export function CreateNote() {
  const initialValues = {
    id: "",
    title: "",
    status: "Realize",
    description: "",
  } as Quests;

  const [values, setValues] = useState(initialValues);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const queryClient = useQueryClient();

  async function handleChangeData() {
    await queryClient.invalidateQueries(["questlistdata"]);

    // Pode usar para alterar dados sem precisar busca no banco de dados nonvamente
    // pode tambem adicionar um to-list sem ir no banco de dados novamente.
    //const id = "0";
    // const previusQuest = queryClient.getQueryData<Quests[]>("questlistdata");
    // if (previusQuest) {
    //   const next = previusQuest.map((quest) => {
    //     if (quest.id === id) {
    //       return { ...quest };
    //     } else {
    //       return quest;
    //     }
    //   });
    //   queryClient.setQueryData("questlistdata", next);
    // }
  }

  function handleOnSubmit(event: FormEvent<HTMLFormElement | HTMLDivElement>) {
    event.preventDefault();
    const previusQuest = queryClient.getQueryData<Quests[]>("questlistdata");
    if (previusQuest) {
      const next = [...previusQuest, values];
      queryClient.setQueryData("questlistdata", next);
    }

    api
      .post("task", values)
      .then((res) => {})
      .finally(() => {});
  }

  function handleChanger(
    event: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const fieldName = event.currentTarget.name;
    const value = event.currentTarget.value;

    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  return (
    <>
      <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={onOpen}>
        Create quest
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new quest
          </DrawerHeader>

          <DrawerBody
            as={"form"}
            id="form-quest"
            method="post"
            onSubmit={handleOnSubmit}
          >
            <Stack spacing="24px">
              <Box as={FormControl}>
                <FormLabel htmlFor="title">Quest</FormLabel>
                <Input
                  name="title"
                  id="title"
                  placeholder="Please enter user name"
                  onChange={handleChanger}
                />
              </Box>

              <Box as={FormControl}>
                <FormLabel htmlFor="status">Status</FormLabel>
                <Select
                  name="status"
                  id="status"
                  defaultValue="segun"
                  onChange={handleChanger}
                >
                  <option value="realize">Realize</option>
                  <option value="stoping">Stoping</option>
                  <option value="finished">Finished</option>
                </Select>
              </Box>

              <Box as={FormControl}>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Textarea
                  name="description"
                  id="description"
                  onChange={handleChanger}
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button form="form-quest" colorScheme="blue" type="submit">
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
