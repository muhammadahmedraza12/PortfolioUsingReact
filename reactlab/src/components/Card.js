import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderRadius="lg"
      borderWidth="1px"
      borderColor="gray.200"
      p={4}
      spacing={4}
      bgColor="white"
      boxShadow="md"
      width="100%"
      maxW="500px"
    >
      <Image src={imageSrc} style={{width:"100%", height:"300px"}}  alt={title} boxSize="200px" objectFit="cover" />

      <Heading as="h2" size="lg">
        {title}
      </Heading>

      <Text color="gray.600">{description}</Text>

      <HStack spacing={2}>
        <Text fontWeight="bold">Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
