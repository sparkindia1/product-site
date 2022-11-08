import {
  Box,
  Divider,
  Heading,
  Icon,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React from "react";
import {
  BsBook,
  BsMenuApp,
  BsMenuButton,
  BsPerson,
  BsShop,
} from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";

export const StepperBanner = () => {
  const StepBoxData = [
    {
      id: 1,
      title: "Create Account",
      description: "Add your name and phone number to get started",
    },
    {
      id: 2,
      title: "Add Business",
      description:
        "Add name, address & e-mail of your company, store/ business",
    },
    {
      id: 3,
      title: "Add Products",
      description: "Minimum 3 products needed for your E-Shop",
    },
  ];
  return (
    <Box minH={{ base: "auto", md: "50vh" }}>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        mt="4"
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
          Get ready to sell in just 3 simple steps
        </Heading>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        mt="4"
        maxW={{ base: "full", md: "7xl" }}
        mx="auto"
        py={{ base: "4", md: "8" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          mt="4"
        >
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            borderRadius="100%"
            bg={mode("green.500", "green.800")}
            alignItems={"center"}
            p="6"
          >
            <Icon
              color={"white"}
              as={BsMenuButton}
              boxSize={{ base: "12", md: "16" }}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            mt="4"
            textAlign={"center"}
          >
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
              {StepBoxData[0].title}
            </Text>
            <Text color="muted">{StepBoxData[0].description}</Text>
          </Box>
        </Box>

        <Divider
          mt={"-32"}
          orientation="horizontal"
          border={mode("4px", "4px")}
          borderColor={mode("#FF4C56", "#FF4C56")}
          mr="4"
          ml="4"
        />
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "column" }}
          alignItems={"center"}
          justifyContent={"center"}
          mt="4"
        >
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "column" }}
            borderRadius="100%"
            bg={mode("green.500", "green.800")}
            alignItems={"center"}
            p="6"
          >
            <Icon
              color={"white"}
              as={BsPerson}
              boxSize={{ base: "12", md: "16" }}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "column" }}
            alignItems={"center"}
            justifyContent={"center"}
            mt="4"
            textAlign={"center"}
          >
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
              {StepBoxData[1].title}
            </Text>
            <Text color="muted">{StepBoxData[1].description}</Text>
          </Box>
        </Box>
        <Divider
          mt={"-32"}
          orientation="horizontal"
          border={mode("4px", "4px")}
          borderColor={mode("#FF4C56", "#FF4C56")}
          ml="4"
          mr="4"
        />
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "column" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            borderRadius="100%"
            bg={mode("green.500", "green.800")}
            alignItems={"center"}
            p="6"
            mt={4}
          >
            <Icon
              color={"white"}
              as={BsShop}
              boxSize={{ base: "12", md: "16" }}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "column" }}
            textAlign={"center"}
            mt="4"
          >
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
              {StepBoxData[2].title}
            </Text>
            <Text color="muted">{StepBoxData[2].description}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
