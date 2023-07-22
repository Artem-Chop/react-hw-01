import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/authOperations';
import {
  FormLabel,
  Button,
  Heading,
  Input,
  VStack,
  Flex,
  Stack,
  Container,
} from '@chakra-ui/react';

export default function RegistrationView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };
  const handleEmailChange = e => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registration({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container maxW="800px" p="20px">
      <Heading as="h1" textAlign="center" mb="10px">
        Registration page
      </Heading>
      <VStack as="form" autoComplete="off" onSubmit={handleSubmit}>
        <FormLabel m="0" p="0">
          Name
        </FormLabel>
        <Input
          m="0"
          p="4"
          color="green.500"
          focusBorderColor="lime"
          size="md"
          variant="filled"
          placeholder="Enter your name"
          _placeholder={{ opacity: 0.5, color: 'green.500' }}
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <FormLabel m="0" p="0">
          Email
        </FormLabel>
        <Input
          m="0"
          p="4"
          color="green.500"
          focusBorderColor="lime"
          size="md"
          variant="filled"
          placeholder="Enter your email"
          _placeholder={{ opacity: 0.5, color: 'green.500' }}
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <FormLabel m="0" p="0">
          Password
        </FormLabel>
        <Input
          m="0"
          p="4"
          color="green.500"
          focusBorderColor="lime"
          size="md"
          variant="filled"
          placeholder="Enter password"
          _placeholder={{ opacity: 0.5, color: 'green.500' }}
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit" colorScheme="teal" variant="solid">
          Зарегистрироваться
        </Button>
      </VStack>
    </Container>
  );
}
