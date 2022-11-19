import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import Image from "next/image";
import * as React from "react";

export const Brands = () => (
  <Box mt={8} mb={16} mx={{ base: "auto", md: "4" }}>
    <Box
      display={"flex"}
      alignItems="center"
      textAlign={"center"}
      mx="auto"
      justifyContent={"center"}
      mb={16}
    >
      <Heading
        as="h2"
        size="xl"
        fontWeight="extrabold"
        color={mode("#FF4C56", "#FF4C56")}
        textDecoration="underline"
        textDecorationColor={mode("blue.600", "blue.200")}
      >
        Our Top Brands
      </Heading>
    </Box>
    <SimpleGrid mx={16} columns={{ base: 2, md: 8 }} spacing={2}>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
      >
        <Image src={"/images/brand.png"} alt="logo" width={200} height={200} />
      </Box>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
      >
        <Image src={"/images/brand.png"} alt="logo" width={200} height={200} />
      </Box>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
      >
        <Image src={"/images/brand.png"} alt="logo" width={200} height={200} />
      </Box>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
      >
        <Image src={"/images/brand.png"} alt="logo" width={200} height={200} />
      </Box>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
      >
        <Image src={"/images/brand.png"} alt="logo" width={200} height={200} />
      </Box>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
      >
        <Image src={"/images/brand.png"} alt="logo" width={200} height={200} />
      </Box>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
      >
        <Image src={"/images/brand.png"} alt="logo" width={200} height={200} />
      </Box>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
      >
        <Image src={"/images/brand.png"} alt="logo" width={200} height={200} />
      </Box>
    </SimpleGrid>
  </Box>
);
