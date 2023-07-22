import React, { useState } from 'react';
// import Searchbar from './Searchbar';
import { getCards } from '../redux/gallary/gallaryOperations';
import { useDispatch, useSelector } from 'react-redux';
import { clear, pageIncrement } from '../redux/gallary/gallarySlice';
import {
  getCardsSelector,
  getCardsIsLoading,
  getCardsPage,
} from '../redux/gallary/gallarySelectors';

import ImageGalleryItems from './ImageGalleryItems';

import Loader from '../generalViews/Loader';
import {
  Box,
  Input,
  IconButton,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function ImageGallery() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const cards = useSelector(getCardsSelector);
  const isLoading = useSelector(getCardsIsLoading);
  const page = useSelector(getCardsPage);

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(clear());
    dispatch(getCards({ searchQuery, page: 1 }));
  };
  const loadMore = () => {
    dispatch(pageIncrement());
    dispatch(getCards({ searchQuery, page: page + 1 }));
  };

  return (
    <Box p="10px">
      <InputGroup
        as="form"
        onSubmit={handleSubmit}
        mb="10px"
        maxW="600px"
        mx="auto"
      >
        <InputRightElement>
          <IconButton
            border="none"
            variant="outline"
            aria-label="Search database"
            icon={<SearchIcon />}
            type="submit"
            colorScheme="teal"
          ></IconButton>
        </InputRightElement>
        <Input
          color="green.500"
          autoComplete="off"
          focusBorderColor="lime"
          size="md"
          variant="filled"
          type="text"
          placeholder="Search images..."
          _placeholder={{ opacity: 0.5, color: 'green.500' }}
          name="name"
          value={searchQuery}
          onChange={handleChange}
        />
      </InputGroup>

      <ImageGalleryItems />
      {!isLoading && cards.length !== 0 && (
        <Button
          mt="10px"
          type="button"
          onClick={loadMore}
          colorScheme="teal"
          variant="solid"
          w="100%"
        >
          More
        </Button>
      )}
      {isLoading && <Loader />}
    </Box>
  );
}
