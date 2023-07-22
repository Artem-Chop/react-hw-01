import { useDispatch, useSelector } from 'react-redux';
import { getName } from 'redux/auth/authSelectors';
import defaultAvatar from './defaultAvatar.jpg';
import { logout } from 'redux/auth/authOperations';
import { clear } from 'redux/gallary/gallarySlice';
import { Avatar, Text, Flex, Button } from '@chakra-ui/react';

export default function UserMenu() {
  const name = useSelector(getName);
  const dispatch = useDispatch();
  const OnLogout = () => {
    dispatch(logout());
    clear();
  };
  return (
    <Flex alignItems="center" gap="10px">
      <Text>Welcome, {name}</Text>
      <Avatar className="avatar" src={defaultAvatar} alt="" />
      <Button type="button" onClick={OnLogout}>
        Logout
      </Button>
    </Flex>
  );
}
