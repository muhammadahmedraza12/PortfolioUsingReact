import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, This is Ahmed Raza!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

// Import your local image here
import peteImage from "../images/ahmedavatar.jpg";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center">
      {/* Use the imported image as the src */}
      <img
        src={peteImage}
        alt="Pete's Image"
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      />
      <Heading as="h1" size="1xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h1" size="lg" color="white">
        {bio1}
      </Heading>
      <Heading as="h1" size="lg" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;


