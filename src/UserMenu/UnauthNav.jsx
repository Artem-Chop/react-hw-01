import { Flex, Button } from '@chakra-ui/react';
import { usual, active } from 'linksStyle/linkStyle';
import { NavLink } from 'react-router-dom';
import routes from 'servises/routes';

export default function UnauthNav() {
  return (
    <Flex gap="10px">
      <NavLink
        to={routes.login}
        style={({ isActive }) => (isActive ? active : usual)}
      >
        <Button> login</Button>
      </NavLink>

      <NavLink
        to={routes.registration}
        style={({ isActive }) => (isActive ? active : usual)}
      >
        <Button>register</Button>
      </NavLink>
    </Flex>
  );
}
