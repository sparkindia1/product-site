import {
  Box,
  Button,
  Divider,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import Image from "next/image";
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
      image: "createacccount.png",
    },
    {
      id: 2,
      title: "Add Business",
      description:
        "Add name, address & e-mail of your company, store/ business",
      image: "addbusi.png",
    },
    {
      id: 3,
      title: "Add Products",
      description: "Minimum 3 products needed for your E-Shop",
      image: "addprod.png",
    },
    {
      id: 4,
      title: "logo",
      description: "logo",
      image: "sparklogo.png",
    },
  ];
  return (
    <Box
      bg={mode("gray.50", "gray.800")}
      mx={{ base: 4, md: 8 }}
      py="12"
      px={{
        base: "4",
        md: "8",
      }}
    >
      <Heading
        as="h3"
        size={{
          base: "xl",
          md: "2xl",
        }}
        fontWeight="extrabold"
        textAlign="center"
        textDecoration="underline"
        textDecorationColor="#FF4C56"
      >
        Register in 3 simple steps
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing="10" mt="10">
        {StepBoxData.map((item) => (
          <>
            {item.title === "logo" ? (
              <Box p={4} boxShadow={"lg"} bg={mode("white", "gray.700")}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent="center"
                >
                  <Text
                    fontSize={"2xl"}
                    fontWeight={"bold"}
                    color={"#FF4C56"}
                    mr={2}
                  >
                    {item.id}
                  </Text>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    verticalAlign="middle"
                    my={16}
                    p={4}
                  >
                    <Image
                      src={`/images/${item.image}`}
                      alt="logo"
                      width={400}
                      height={200}
                    />
                    <Button
                      mt="4"
                      disabled
                      colorScheme="red"
                      size="sm"
                      variant="solid"
                      color="white"
                      _hover={{
                        bg: "#FF4C56",
                      }}
                    >
                      Register
                    </Button>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box p={4} boxShadow={"lg"} bg={mode("white", "gray.700")}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent="center"
                >
                  <Text
                    fontSize={"2xl"}
                    fontWeight={"bold"}
                    color={"#FF4C56"}
                    mr={2}
                  >
                    {item.id}
                  </Text>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    mb={4}
                    verticalAlign="middle"
                  >
                    <Image
                      src={`/images/${item.image}`}
                      alt="logo"
                      width={200}
                      height={200}
                    />
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  mt="4"
                >
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    {item.title}
                  </Text>
                  <Text>{item.description}</Text>
                </Box>
              </Box>
            )}
          </>
        ))}
      </SimpleGrid>
    </Box>
  );
};
