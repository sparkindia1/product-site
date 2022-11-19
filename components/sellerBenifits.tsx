import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const SellerBenifits = () => {
  const features1 = [
    {
      name: "National Reach",
      description:
        "No regional Boundry/limitations.Anywhere can show and sell your products across india",
    },
    {
      name: "Automated trade channel",
      description: "No lead, No follow up Direct Confirm order",
    },
    {
      name: "Logistics",
      description: "Hassle free logistics all over india",
    },
  ];
  const features2 = [
    {
      name: "Grow your business",
      description: "Sell to buyers anytime anywhere",
    },
    {
      name: "Zero Cost",
      description: "No shop hosting fee",
    },
    {
      name: "Manage business easily",
      description: "Manage your order and stock",
    },
  ];

  const isDesktop = useBreakpointValue({ base: false, md: true });
  return (
    <Box>
      <Heading
        mx={4}
        as="h3"
        size="2xl"
        mt="8"
        fontWeight="extrabold"
        mb={8}
        textAlign="center"
        textDecoration="underline"
        textDecorationColor="#FF4C56"
      >
        Seller Benefits
      </Heading>
      <Box
        display={"flex"}
        flexDirection={"row"}
        mx={{ md: 16, base: 4 }}
        gap={2}
      >
        <SimpleGrid flex={"33%"} columns={[1, 1, 1]} spacing={2}>
          {features1.map((feature) => (
            <Box
              boxShadow={"2xl"}
              p={4}
              rounded={"md"}
              background={"#028090"}
              key={feature.name}
            >
              <Box
                fontSize="2xl"
                fontWeight="bold"
                lineHeight="shorter"
                color="gray.100"
              >
                {feature.name}
              </Box>
              <Box color="gray.100" mt="2">
                {feature.description}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        {isDesktop && (
          <Box
            flex={"33%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src="/images/benefits.png"
              alt="sellerbenifits"
              width={isDesktop ? 500 : 300}
              height={isDesktop ? 500 : 300}
            />
          </Box>
        )}
        <SimpleGrid flex={"33%"} columns={[1, 1, 1]} spacing={2}>
          {features2.map((feature) => (
            <Box
              boxShadow={"2xl"}
              p={4}
              rounded={"md"}
              background={"#028090"}
              key={feature.name}
            >
              <Box
                fontSize="2xl"
                fontWeight="bold"
                lineHeight="shorter"
                color="gray.100"
              >
                {feature.name}
              </Box>
              <Box color="gray.100" mt="2">
                {feature.description}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
