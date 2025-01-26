import React from "react";
import { User } from "../users";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { H1 } from "@northlight/ui";

export type UserDetail = {
  user: User;
  scores: number[];
};

type UserDetailsModalProps = {
  userDetail?: UserDetail;
} & Pick<ModalProps, "onClose" | "isOpen">;

export const UserDetailsModal = ({
  userDetail,
  onClose,
  isOpen,
}: UserDetailsModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {getModalContent(userDetail)}
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const getModalContent = (userHistoryItem?: UserDetail) => {
  if (!userHistoryItem) {
    return <H1>Missing user data</H1>;
  }

  return (
    <>
      <ModalHeader>
        <H1>{userHistoryItem?.user.name}'s scores:</H1>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody display="grid">
        {userHistoryItem?.scores.map((score, index) => (
          <span key={index}>{score}</span>
        ))}
      </ModalBody>
    </>
  );
};
