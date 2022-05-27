import React from "react";
import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import quest from "../../assets/Quest.io2.jpg";

export function Header() {
  return (
    <Flex
      as={"header"}
      justify={"space-between"}
      align={"center"}
      p={{ lg: "1rem", sm: "0.5rem" }}
      mb={{ sm: "1rem" }}
    >
      <Box as="h1" pt={{ sm: "1rem" }} fontWeight={"bold"} fontSize={"2rem"}>
        <Image
          src={quest}
          alt="Logo in quest"
          w={{ lg: "10rem", sm: "10rem" }}
          h={{ lg: "2rem", sm: "2rem" }}
        />
      </Box>

      <Flex borderWidth="1px" borderRadius="lg">
        <Menu>
          <MenuButton
            maxW={{ lg: "10rem" }}
            w={{ lg: "10rem" }}
            overflow={"hidden"}
          >
            <Flex>
              <Image
                mr={{ lg: "0.5rem" }}
                boxSize="3rem"
                objectFit="cover"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Text
                display={{ sm: "none" }}
                mt={{ lg: "0.3rem" }}
                fontSize={{ lg: "1rem" }}
                fontWeight={"bold"}
              >
                Usuario
              </Text>
            </Flex>
          </MenuButton>

          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
