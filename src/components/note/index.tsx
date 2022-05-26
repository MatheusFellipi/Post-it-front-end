import React, { ChangeEvent, useState } from "react";
import { Badge, Box, Image, Select } from "@chakra-ui/react";

export function Note() {
  const [statu, setStatu] = useState<string>("");

  const property = {
    title: "Criando o front end do projeto",
    status: "FAZENDO",
    description:
      "Consequat elit laboris laborum non incididunt in eiusmod esse Reprehenderit tempor adipisicing est laboris.",
  };

  const status = [
    { id: "REALIZANDO", color: "yellow" },
    { id: "PARADO", color: "red" },
    { id: "PRONTO", color: "green" },
  ];
  return (
    <Box
      as="div"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={1}
      >
        {property.title}
      </Box>

      <Box display="flex" mt="2" alignItems="center">
        {property.description}
      </Box>
      <Box as="div" display="flex" mt="2" alignItems="center">
        <Select
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            const value = e.currentTarget.value;
            setStatu(value);
          }}
          value={statu}
        >
          {status.map((statu) => (
            <option value={statu.id}>{statu.id}</option>
          ))}
        </Select>
      </Box>
    </Box>
  );
}
