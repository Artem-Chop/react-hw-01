import React from 'react';
import { Spinner, Center } from '@chakra-ui/react';

export default function Loader() {
  return (
    <Center>
      <Spinner
        thickness="3px"
        speed="2.65s"
        emptyColor="gray.200"
        color="teal.500"
        size="xl"
      />
    </Center>
  );
}
