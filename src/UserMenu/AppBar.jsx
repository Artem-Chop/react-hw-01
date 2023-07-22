import { Flex } from '@chakra-ui/react';
import Navigation from './Navigation';
import UnauthNav from './UnauthNav';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/auth/authSelectors';

export default function AppBar() {
  const isAuthenticated = useSelector(getIsAuth);
  return (
    <Flex
      justifyContent="space-between"
      bgColor="teal"
      p="10px"
      alignItems="center"
    >
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <UnauthNav />}
    </Flex>
  );
}
