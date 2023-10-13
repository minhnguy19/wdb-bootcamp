import { Container, Heading, Text } from "@chakra-ui/react";
import NavBar from "@/components/nav-bar";
import DocumentButtons from "@/components/document-buttons";
import { useState } from "react";
export interface DocumentList {
  text: string;
}

export default function Home() {
  const [documentList, setDocumentList] = useState<DocumentList[]>([]);

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
          The document editing software you've been waiting for
        </Text>
        <DocumentButtons
          documents={documentList}
          setDocumentList={setDocumentList}
        ></DocumentButtons>
      </Container>
    </main>
  );
}
