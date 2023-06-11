import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack backgroundColor='white' color='black' borderRadius='2xl' cursor='pointer'>
      <Image src={imageSrc} borderRadius='xl'></Image>
      
      <VStack spacing={5} p={5} alignItems="flex-start">
        <HStack justifyContent='space-between' alignItems='center'>
          <Heading as='h3' size='md'>{title}</Heading>
          
        </HStack>
          <Text color='#64748b' fontSize='lg'>{description}</Text>
        <HStack>
          <p>See More</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
