import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getIsLoading } from 'redux/contacts/contactsSelectors';
import { getContacts } from '../redux/contacts/contactsOperations';

import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import Loader from 'generalViews/Loader';

import { Box, Center } from '@chakra-ui/react';

export default function PhonebookView() {
  const IsLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Box as="section" py="20px" px="30px" maxW="1200px" mx="auto">
      <Form />

      <Box w="100%">
        <Center as="h2" my="15px">
          Contacts
        </Center>
        <Filter />
        {IsLoading && <Loader />}
        <ContactList />
      </Box>
    </Box>
  );
}
