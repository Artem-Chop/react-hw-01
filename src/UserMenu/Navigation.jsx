import { useNavigate } from 'react-router-dom';
import routes from 'servises/routes';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/auth/authSelectors';

import { Button, Flex } from '@chakra-ui/react';
// import { usual, active } from 'linksStyle/linkStyle';

export default function Navigation() {
  const isAuthenticated = useSelector(getIsAuth);
  const navigate = useNavigate();
  return (
    <Flex>
      {isAuthenticated ? (
        <Flex as="ul" gap="10px">
          <Button
            onClick={() => {
              navigate(routes.home);
            }}
          >
            Home
          </Button>

          <Button
            onClick={() => {
              navigate(routes.phonebook);
            }}
          >
            Phonebook
          </Button>

          <Button>
            <Button
              onClick={() => {
                navigate(routes.feedbacks);
              }}
            >
              Feedbacks
            </Button>
          </Button>

          <Button
            onClick={() => {
              navigate(routes.gallary);
            }}
          >
            Gallary
          </Button>
        </Flex>
      ) : (
        <Flex as="ul">
          <Button
            onClick={() => {
              navigate(routes.home);
            }}
          >
            Home
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
