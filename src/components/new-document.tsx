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
  Modal,
  ModalOverlayProps,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { DocumentList } from "@/pages";
import { useState } from "react";

interface NewDocumentProps {
  onSave: (input: string) => void;
}
export default function NewDocument({ onSave }: NewDocumentProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [localInput, setLocalInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalInput(event.target.value);
  };

  const handleSave = () => {
    onSave(localInput);
    setLocalInput("");
    onClose();
  };
  return (
    <>
      <button onClick={onOpen}>
        <Box
          pr={12}
          _hover={{
            transform: "scale(1.05)", // Adjust this value for the desired zoom level
          }}
          transition="transform 0.2s" // Adjust this value for the desired zoom speed
        >
          <Image
            src="/blue-document.svg"
            boxSize="100px"
            alt="blue button with white document"
          ></Image>
        </Box>
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="80vw" maxH="80vh">
          <ModalHeader>New Document</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Input
                placeholder="Type here..."
                value={localInput}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={2} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
