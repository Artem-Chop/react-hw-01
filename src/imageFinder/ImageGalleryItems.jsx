import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCardsSelector } from '../redux/gallary/gallarySelectors';

import ImgModal from './ImgModal';
import { GridItem, Grid, Image } from '@chakra-ui/react';

export default function ImageGalleryItems() {
  const [showModal, setShowmodal] = useState(false);
  const [src, setSrc] = useState('');
  const cards = useSelector(getCardsSelector);

  const onEscClick = e => {
    if (e.code === 'Escape') {
      setShowmodal(false);
      document.removeEventListener('keydown', onEscClick);
    }
  };

  const EscListener = () => {
    document.addEventListener('keydown', onEscClick);
  };

  const onImgClick = e => {
    EscListener();
    setShowmodal(true);
    setSrc(e.currentTarget.id);
  };
  const closeModal = e => {
    setShowmodal(false);
  };

  return (
    <Grid
      as="ul"
      listStyleType="none"
      margin="0"
      p="0"
      templateColumns="repeat(4, 1fr)"
      gap={3}
    >
      {cards.map(card => (
        <GridItem
          as="li"
          key={card.id}
          borderRadius=" 2px"
          boxShadow="0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"
        >
          <Image
            boxSize="100px"
            w="100%"
            h="260px"
            objectFit="cover"
            src={card.webformatURL}
            alt={card.tags}
            id={card.largeImageURL}
            loading="lazy"
            onClick={onImgClick}
            transition="transform 250ms cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{ cursor: 'zoom-in', transform: 'scale(1.03)' }}
          />
          <ImgModal
            img={src}
            onClose={closeModal}
            isOpen={showModal}
          ></ImgModal>
        </GridItem>
      ))}
    </Grid>
  );
}
