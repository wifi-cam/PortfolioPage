import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, IconButton } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope, 
    size: "2x",
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    size: "2x",
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    size: "2x",
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    size: "2x",
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    size: "2x",
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing="20px">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    aria-label={social.name}
                    icon={<FontAwesomeIcon icon={social.icon} size="2x" />}
                  />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8} color="white">
              <a href="#projects-section" onClick={handleClick("projects-section")}>
                Projects
              </a>
              <a href="#contactme-section" onClick={handleClick("contactme-section")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
