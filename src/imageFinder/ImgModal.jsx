import React from 'react';

import { Modal, ModalOverlay, ModalContent, Img } from '@chakra-ui/react';

export default function ImgModal({ img, onClose, isOpen, children }) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} motionPreset="scale">
      <ModalOverlay as="div" opacity="0.2" />

      <ModalContent maxW="1200px" maxH="800px">
        <Img src={img} alt="" onClick={e => e.stopPropagation()} />
        {children}
      </ModalContent>
    </Modal>
  );
}
