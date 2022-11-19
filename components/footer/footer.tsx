import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export const links = [
  {
    title: "Company",
    links: [
      { label: "Why Envelope", href: "#" },
      { label: "Our story", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Use Cases", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "SAML SSO", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Partnerships", href: "#" },
      { label: "Case studies", href: "#" },
      { label: "Media Assets", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Offer terms", href: "#" },
      { label: "License", href: "#" },
    ],
  },
];

export const Footer = () => (
  <Box bg={mode("gray.50", "gray.800")}>
    <Box as="footer" role="contentinfo" mx="12">
      <Stack
        spacing={{ base: "12", md: "8" }}
        direction={{ base: "column-reverse", lg: "row" }}
        py={{ base: "12", md: "16" }}
        justify="space-between"
      >
        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          gap="8"
          width={{ base: "full", lg: "auto" }}
        >
          {links.map((group, idx) => (
            <Stack key={idx} spacing="4" minW={{ lg: "40" }}>
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                {group.title}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                {group.links.map((link, idx) => (
                  <Button key={idx} as="a" variant="link" href={link.href}>
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
        <Stack spacing="4">
          <Text fontSize="sm" fontWeight="semibold" color="subtle">
            Stay up to date
          </Text>
          <Stack
            spacing="4"
            direction={{ base: "column", sm: "row" }}
            maxW={{ lg: "360px" }}
          >
            <Input placeholder="Enter your email" type="email" required />
            <Button
              color={mode("blue.600", "blue.200")}
              type="submit"
              flexShrink={0}
            >
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pb="12"
        pt="8"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "start", md: "center" }}
      >
        <HStack
          justify={{ base: "space-between", sm: "start" }}
          width={{ base: "full", sm: "auto" }}
          spacing="8"
        >
          <Image src="/images/sparklogo.png" alt="Envelope"
            width={200}
            height={100}
          />
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </HStack>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Spark India, Inc. All rights
          reserved.
        </Text>
      </Stack>
    </Box>
  </Box>
);

// const Heart = () => (
//   <Box
//     display="inline-block"
//     mx="1"
//     color={mode('blue.500', 'blue.300')}
//     fontSize="xs"
//     role="img"
//     aria-label="Love"
//     as={FaHeart}
//   />
// )
