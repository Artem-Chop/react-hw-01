import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

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

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    // this.props.login(this.state);
    setEmail('');
    setPassword('');
  };

  return (
    <Container maxW="800px" p="20px">
      <Heading as="h1" textAlign="center" mb="10px">
        Login page
      </Heading>
      <VStack as="form" autoComplete="off" onSubmit={handleSubmit}>
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
          Залогиниться
        </Button>
      </VStack>
    </Container>
  );
}
