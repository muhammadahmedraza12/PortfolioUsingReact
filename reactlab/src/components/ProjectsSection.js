import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import photo1 from "../images/portfolio-13.PNG";
import photo2 from "../images/portfolio-10.JPG";
import photo3 from "../images/portfolio-12.JPG";
import photo4 from "../images/portfolio-15.jpg";

const projects = [
  {
    title: "Web Development",
    description:
      "Crafting Digital Experiences: We turn pixels into seamless user journeys 💻🔥️",
    imageSrc: photo1,
  },
  {
    title: "Web Development",
    description:
      "Code, Pixels, Magic: Where innovation meets web development 💻🔥️",
    imageSrc: photo2,
  },
  {
    title: "Web Development",
    description:
      "Designing Tomorrow's Web: Your vision, our code 💻🔥️",
    imageSrc: photo3,
  },
  {
    title: "Web Development",
    description:
      "Web Wonders in Every Line: Elevating your online presence 💻🔥️",
    imageSrc: photo4,
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

