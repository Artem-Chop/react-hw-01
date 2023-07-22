import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from '../redux/contacts/contactsSelectors';
import { filter } from 'redux/contacts/PhonebookSlice';
import { Form } from 'react-router-dom';

import {
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  Stack,
  VStack,
} from '@chakra-ui/react';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);
  const onChange = e => {
    dispatch(filter(e.currentTarget.value));
  };
  return (
    <FormControl as="form" w="100%">
      <VStack w="100%">
        <FormLabel m="0" p="0">
          Search
        </FormLabel>
        <Input
          px="20px"
          w="100%"
          autoComplete="off"
          color="green.500"
          focusBorderColor="lime"
          size="md"
          variant="filled"
          type="text"
          placeholder="Enter name"
          _placeholder={{ opacity: 0.5, color: 'green.500' }}
          name="name"
          value={value}
          onChange={onChange}
        />
      </VStack>
    </FormControl>
  );
}
