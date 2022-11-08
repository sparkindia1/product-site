import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

import { BsFillMoonFill } from "react-icons/bs";
import {
  FaAccessibleIcon,
  FaAcquisitionsIncorporated,
  FaCity,
  FaDollarSign,
  FaExpandAlt,
  FaGlobeAsia,
  FaMapSigns,
  FaPaintBrush,
  FaRobot,
  FaTree,
  FaTruck,
} from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

export const features = [
  {
    name: "National Reach",
    description:
      "No regional Boundry/limitations.Anywhere can show and sell your products across india",
    icon: FaGlobeAsia,
  },
  {
    name: "Atutomated trade channel",
    description: "No lead, No follow up Direct Confirm order",
    icon: FaRobot,
  },
  {
    name: "Logistics",
    description: "Hassle free logistics all over india",
    icon: FaTruck,
  },
  {
    name: "Grow your business",
    description: "Sell to buyers anytime anywhere",
    icon: FaTree,
  },
  {
    name: "Zero Cost",
    description: "No shop hosting fee",
    icon: FaDollarSign,
  },
  {
    name: "Manage business easily",
    description: "Manage your order and stock",
    icon: FaAcquisitionsIncorporated,
  },
];

export const Keypoints = () => (
  <Box
    as="section"
    mx="auto"
    bg={mode("white.50", "white.800")}
    maxWidth={{ base: "full", md: "7xl" }}
    minH={{ base: "auto", md: "50vh" }}
  >
    <Stack spacing={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }} align="center" textAlign="center">
        <Heading
          as="h2"
          size="xl"
          mt={{ base: "8", md: "8" }}
          fontWeight="extrabold"
          color={mode("#FF4C56", "#FF4C56")}
          textDecoration="underline"
          textDecorationColor={mode("blue.600", "blue.200")}
        >
          Spark India For Sellers
        </Heading>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        columnGap={8}
        rowGap={{ base: 10, md: 16 }}
      >
        {features.map((feature) => (
          <Stack
            key={feature.name}
            spacing={{ base: "4", md: "5" }}
            align="center"
            textAlign="center"
          >
            <Square
              size={{ base: "10", md: "12" }}
              bg="accent"
              color="inverted"
              borderRadius="lg"
            >
              <Icon as={feature.icon} boxSize={{ base: "12", md: "16" }} />
            </Square>
            <Stack spacing={{ base: "1", md: "2" }}>
              <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
                {feature.name}
              </Text>
              <Text color="muted">{feature.description}</Text>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  </Box>
);
