/** The document button. **/
import {
  Box,
  Grid,
  useDisclosure,
  Button,
  Modal,
  ModalOverlayProps,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import NewDocument from "./new-document";
import { DocumentList } from "@/pages";
import { useState, SetStateAction, Dispatch } from "react";
interface DocumentButtonsProps {
  documents: DocumentList[];
  setDocumentList: Dispatch<SetStateAction<DocumentList[]>>;
}
export default function DocumentButtons({
  documents,
  setDocumentList,
}: DocumentButtonsProps) {
  const handleSave = (input: string) => {
    setDocumentList((prevState) => [...prevState, { text: input }]);
  };

  return (
    <Grid
      mt="50px"
      width="95%"
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gap={6}
    >
      <NewDocument onSave={handleSave} />
      {documents.map((doc, index) => (
        <BlankButton doctext={doc} key={index} onSave={handleSave} />
      ))}
    </Grid>
  );
}

interface BlankButtonProps {
  doctext: DocumentList;
  onSave: (input: string) => void;
}
function BlankButton({ doctext, onSave }: BlankButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [docInput, setDocInput] = useState<string>(doctext.text);

  const maxWords = 5;
  const words = doctext.text.split(" ");
  const truncatedText =
    words.slice(0, maxWords).join(" ") + (words.length > maxWords ? "..." : "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDocInput(event.target.value);
  };

  const handleSave = () => {
    onSave(docInput);
    setDocInput("");
    onClose();
  };

  return (
    <>
      <button onClick={onOpen}>
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
          _hover={{
            transform: "scale(1.05)",
          }}
          transition="transform 0.2s"
        >
          {truncatedText}
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
                value={docInput}
                size="lg"
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
