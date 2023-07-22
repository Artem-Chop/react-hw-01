import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/contacts/contactsOperations';
import { getIsLoading } from 'redux/contacts/contactsSelectors';

import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react';

const initialData = { name: '', number: '' };
export default function Form() {
  const dispatch = useDispatch();
  const IsLoading = useSelector(getIsLoading);

  const [{ name, number }, setData] = useState(initialData);

  const reset = () => {
    setData(initialData);
  };

  const handleChange = e => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <FormControl isRequired>
          <Stack direction="row" spacing={0}>
            <FormLabel>Name</FormLabel>
            <Input
              color="green.500"
              focusBorderColor="lime"
              size="md"
              variant="filled"
              type="text"
              placeholder="Enter name"
              _placeholder={{ opacity: 0.5, color: 'green.500' }}
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Stack>
        </FormControl>
        <Spacer />
        <FormControl isRequired>
          <Stack direction="row" spacing={0}>
            <FormLabel>Number</FormLabel>
            <Input
              color="green.500"
              focusBorderColor="lime"
              size="md"
              variant="filled"
              type="text"
              placeholder="Enter number"
              _placeholder={{ opacity: 0.5, color: 'green.500' }}
              name="number"
              value={number}
              onChange={handleChange}
            />
          </Stack>
        </FormControl>

        <Spacer />

        <Button
          w="100%"
          type="submit"
          isLoading={IsLoading}
          colorScheme="teal"
          variant="solid"
        >
          Add new contact
        </Button>
      </Flex>
    </form>
  );
}
