import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Cam!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={18}>
      <Avatar src="https://areajugones.sport.es/wp-content/uploads/2021/11/jujutsu-sukuna-cosplat.webp"
       size='2xl'/>
      <Heading as='h4' size='md'>{greeting}</Heading>
      <Heading as='h1' size='xl'>{bio1}</Heading>
      <Heading as='h1' size='xl'>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
