/** The document button. **/
import { Box, Grid } from "@chakra-ui/react";
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
        <BlankButton text={doc} key={index} />
      ))}
    </Grid>
  );
}

interface BlankButtonProps {
  text: DocumentList;
}
function BlankButton({ text }: BlankButtonProps) {
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
      {text.text}
    </Box>
  );
}
