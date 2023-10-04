/** The document button. **/
import {
  Box,
  Button,
  Image,
  IconButton,
  HStack,
  Heading,
  VStack,
  Spacer,
} from "@chakra-ui/react";

export default function DocumentButtons() {
  return (
    <VStack pt={10} gap={5}>
      <HStack gap={12}>
        <Box pr={12}>
          <IconButton
            icon={
              <Image
                src="/blue-document.svg"
                boxSize="100px"
                alt="blue button with white document"
              ></Image>
            }
            aria-label="Blue Document"
          />
        </Box>
        <BlankButton></BlankButton>
        <Spacer />
        <BlankButton></BlankButton>
        <Spacer />
        <BlankButton></BlankButton>
        <Spacer />
        <BlankButton></BlankButton>
        <Spacer />
        <BlankButton></BlankButton>
      </HStack>
      <Spacer />
      <HStack gap={12}>
        <BlankButton></BlankButton>
        <Spacer />
        <BlankButton></BlankButton>
        <Spacer />
        <BlankButton></BlankButton>
        <Spacer />
        <BlankButton></BlankButton>
        <Spacer />
        <BlankButton></BlankButton>
        <Spacer />
        <BlankButton></BlankButton>
      </HStack>
    </VStack>
  );
}

function BlankButton() {
  return (
    <Box
      width="100px"
      height="100px"
      bg="notiom.document-white"
      color="notiom.dark-gray"
      fontSize="xs"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="left"
      borderRadius="10px"
      borderColor="notiom.light-gray"
      border="1px"
      fontWeight="700"
      px={5}
    >
      Lorem ipsum dolor sit amet, consectetur
    </Box>
  );
}
