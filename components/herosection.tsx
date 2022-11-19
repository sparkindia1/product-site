import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

export function Hero() {
  return (
    <Box
      as="section"
      bg={mode("gray.50", "gray.800")}
      pt="6"
      pb="12"
      overflow="hidden"
    >
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Flex
          align="flex-start"
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          mb="20"
        >
          <Box flex="1" maxW={{ lg: "xl" }} pt="6">
            <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold">
              Sell for Free on India's most powerfull online B2B Marketplace
            </Heading>
            <Text color={mode("gray.600", "gray.400")} mt="5" fontSize="xl">
              Trusted partner of business and retailers, to make trade smooth
              and easily accesiable in bharat
            </Text>
            <Button
              mt="8"
              minW="14rem"
              color={mode("gray.100", "gray.900")}
              _hover={{ bg: mode("gray.600", "gray.300") }}
              backgroundColor="#FF4C56"
              size="md"
              height="14"
              px="8"
              fontSize="md"
              fontWeight="bold"
            >
              Register Now
            </Button>
          </Box>
          <Box boxSize={{ base: "20", lg: "8" }} />
          <Img
            pos="relative"
            marginEnd="-16rem"
            w="50rem"
            src="/images/banner.png"
            alt="Screenshot for Form builder"
          />
        </Flex>
      </Box>
    </Box>
  );
}
