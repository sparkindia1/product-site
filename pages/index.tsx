import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { Brands } from "../components/brands/brands";
import { CategoryList } from "../components/category/category";
import { Footer } from "../components/footer/footer";
import { Hero } from "../components/herosection";
import { Keypoints } from "../components/keypoints";
import Navbar from "../components/navbar";
import { StepperBanner } from "../components/stepperBanner";
import { Testimonials } from "../components/testimonials/testimonials";

const IndexPage = () => (
  <Box>
    <Navbar />
    <Hero />
    <Keypoints />
    <StepperBanner />
    <CategoryList />
    <Brands />
    <Testimonials />
    <Footer />
  </Box>
);

export default IndexPage;
