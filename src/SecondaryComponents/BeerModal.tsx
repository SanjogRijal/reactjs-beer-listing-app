import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type BeerModalProps = {
  modalBodyContent: ReactJSXElement;
};

export const BeerModal: React.FC<BeerModalProps> = ({
  modalBodyContent,
}: BeerModalProps): ReactJSXElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        // bottom={["95.3vh", "45.2vw"]}
        onClick={onOpen}
        // left={["60vw", "75vw"]}
        borderRadius={"0"}
        backgroundColor={"#2B65BD"}
        color={"#FFFFFF"}
        _hover={{ backgroundColor: "#004789" }}
        left={"44.6vw"}
      >
        Add a new beer
      </Button>

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
