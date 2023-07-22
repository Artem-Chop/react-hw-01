import React from 'react';
import { Button, UnorderedList, ListItem } from '@chakra-ui/react';

const FeedBacksButtons = ({ options, onClick }) => (
  <UnorderedList
    mx="0"
    my="10px"
    w="100%"
    listStyleType="none"
    display="flex"
    justifyContent="space-between"
  >
    {options.map(option => (
      <ListItem key={option}>
        <Button
          type="button"
          colorScheme="teal"
          variant="solid"
          name={option}
          onClick={onClick}
        >
          {option}
        </Button>
      </ListItem>
    ))}
  </UnorderedList>
);

export default FeedBacksButtons;
