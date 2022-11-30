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
        position={"fixed"}
        bottom={"45.2vw"}
        onClick={onOpen}
        left={"90.5vw"}
        backgroundColor={"#2B65BD"}
        color={"#FFFFFF"}
        _hover={{ backgroundColor: "#004789" }}
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
