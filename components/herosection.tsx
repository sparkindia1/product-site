import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Input,
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
      pt="24"
      pb="12"
      overflow="hidden"
      minH={{ base: "auto", md: "100vh" }}
    >
      <Box
        maxW={{ base: "xl", md: "full" }}
        mx="24"
        px={{ base: "6", md: "8" }}
        py={{ base: "12", md: "16" }}
      >
        <Flex
          align="flex-start"
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          mb="20"
        >
          <Box flex="1" maxW={{ lg: "xl" }} pt="6">
            <Heading as="h1" size="2xl" mt="8" fontWeight="extrabold">
              Sell for Free on India's most powerfull online B2B Marketplace
            </Heading>
            <Text color={mode("gray.600", "gray.400")} mt="5" fontSize="xl">
              Trusted partner of business and retailers, to make trade smooth
              and easily accesiable in bharat
            </Text>
            <Box
              display={{ base: "none", md: "flex" }}
              mt="10"
              maxW="md"
              alignItems="center"
              verticalAlign="middle"
              justifyContent="space-between"
              gap={4}
            >
              <Input
                type={"tel"}
                w={"400px"}
                placeholder="Enter your phone number"
                required
              />
              <Button
                colorScheme="blue"
                size="md"
                fontSize="md"
                fontWeight="bold"
                rounded="md"
                px="8"
                _hover={{ bg: "blue.600" }}
                _active={{
                  bg: "blue.600",
                  transform: "scale(0.95)",
                  borderColor: "blue.600",
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
          <Box boxSize={{ base: "20", lg: "8" }} />
          <Img
            w="50rem"
            src="https://res.cloudinary.com/chakra-ui-pro/image/upload/v1621082943/pro-website/screenshot-dark_w6jpks.png"
            alt="Screenshot for Form builder"
          />
        </Flex>
        <Box>
          <Text color={mode("gray.600", "gray.400")} fontWeight="medium">
            Proudly trusted by 5,000+ companies and individuals
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
