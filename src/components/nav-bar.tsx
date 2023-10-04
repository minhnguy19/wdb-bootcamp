/** The navbar (upper top) component of the landing page. */
import { Flex, Image, Button, HStack, Heading } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex direction="row" justify="space-between" width="100%">
      <HStack gap={3}>
        <Image
          src="./notiom-icon.svg"
          alt="icon of Notiom"
          boxSize="30px"
        ></Image>
        <Heading color="notiom.dark-gray" fontWeight="700" fontSize="2xl">
          Notiom
        </Heading>
      </HStack>
      <Button size="sm" bg="notiom.dark-blue" color="white">
        Create
      </Button>
    </Flex>
  );
}
