import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Center,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { SetStateAction, useEffect, useState } from "react";
import BeerHandlers from "../dbHandler/beerHandlers";

type BeerModalProps = {
  modalBodyContent: ReactJSXElement;
};

export const BeerModal: React.FC<BeerModalProps> = ({
  modalBodyContent,
}: BeerModalProps): ReactJSXElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [myBeers, setMyBeers] = useState([]);

  useEffect(() => {
    getBeers();
  }, []);
  let getBeers = async () => {
    let beerHandler = new BeerHandlers("http://localhost", "3004", "1");
    let beerLists: SetStateAction<any> = await beerHandler.getBeer();
    setMyBeers(beerLists.data);
  };

  console.log(myBeers);

  return (
    <>
      {myBeers.length > 0 ? (
        <Button
          // bottom={["95.3vh", "45.2vw"]}
          onClick={onOpen}
          // left={["60vw", "75vw"]}
          borderRadius={"0"}
          backgroundColor={"#2B65BD"}
          color={"#FFFFFF"}
          _hover={{ backgroundColor: "#004789" }}
          left={["22vw", "44.6vw"]}
        >
          Add a new beer
        </Button>
      ) : (
        <Stack alignItems={"center"} position={"relative"} top="20vh">
          <Center flexDirection={"column"}>
            <Text top={"20px"}>Nothing to see yet</Text>
            <Stack direction={"row"}>
              <Link onClick={onOpen} color={"#5085CA"}>
                Click here
              </Link>
              <Text>to add your first beer!</Text>
            </Stack>
          </Center>
        </Stack>
      )}

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{modalBodyContent}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
