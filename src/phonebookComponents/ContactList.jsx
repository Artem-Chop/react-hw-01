import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contacts/contactsOperations';
import { getVisibleContacts } from '../redux/contacts/contactsSelectors';
import { Text, Button, UnorderedList, ListItem } from '@chakra-ui/react';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  if (!contacts) {
    return <div>Не удалось найти контакты</div>;
  }

  return (
    <UnorderedList
      listStyleType="none"
      display="flex"
      flexDirection="column-reverse"
      mx="0"
      mt="25px"
    >
      {contacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          display="flex"
          justifyContent="space-between"
          border="1px"
          borderColor="green.100"
          p="5px"
          my="5px"
        >
          <Text>{name}</Text>
          <Text>{number}</Text>

          <Button
            type="button"
            colorScheme="teal"
            variant="solid"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
