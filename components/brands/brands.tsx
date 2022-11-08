import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import * as logos from "./Logos";

export const Brands = () => (
  <Box mb={16} mx={{ base: "auto", md: "4" }}>
    <Stack spacing="8">
      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        textAlign={"center"}
        mx="auto"
      >
        <Heading
          as="h2"
          size="xl"
          mt={{ base: "8", md: "8" }}
          fontWeight="extrabold"
          color={mode("#FF4C56", "#FF4C56")}
          textDecoration="underline"
          textDecorationColor={mode("blue.600", "blue.200")}
        >
          Our Top Brands
        </Heading>
      </Box>
      <SimpleGrid gap={{ base: "4", md: "6" }} columns={{ base: 2, md: 3 }}>
        {Object.entries(logos).map(([name, Logo]) => (
          <Center
            key={name}
            bg="gray.100"
            py={{ base: "4", md: "8" }}
            boxShadow={mode("sm", "sm-dark")}
            borderRadius="lg"
          >
            <Logo h={{ base: "8", md: "10" }} maxW="180px" fill="emphasized" />
          </Center>
        ))}
      </SimpleGrid>
    </Stack>
  </Box>
);
