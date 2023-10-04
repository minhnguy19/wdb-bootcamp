import { Container, Heading, Text } from "@chakra-ui/react";
import NavBar from "@/components/nav-bar";
export default function Home() {
  return (
    <main>
      <Container
        px={10}
        py={5}
        maxW="100vw"
        h="100vh"
        bg="notiom.bg-white"
        centerContent
      >
        <NavBar></NavBar>
        <Heading mt={16} pb={6} color="notiom.dark-gray">
          Create. Explore.
        </Heading>
        <Text color="notiom.dark-gray" fontWeight="500" fontSize="2xl">
          {" "}
          The document editing software you've been waiting for{" "}
        </Text>
      </Container>
    </main>
  );
}
