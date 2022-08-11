import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const { toggleColorMode } = useColorMode()
  return (
    <>
      <header>
        <nav>
          <Flex m={4}>
            <Heading>
              <Link to={routes.home()}>Redwood Blog</Link>
            </Heading>
            <Spacer />
            <Button as={Link} to={routes.contact()}>
              Contact
            </Button>
            <Button as={Link} to={routes.about()}>
              About
            </Button>
            <Spacer />
            <IconButton
              onClick={toggleColorMode}
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            />
            {isAuthenticated ? (
              <HStack>
                <Text>Logged in as {currentUser.email}</Text>
                <Button onClick={logOut}>Logout</Button>
              </HStack>
            ) : (
              <Button as={Link} to={routes.login()}>
                Login
              </Button>
            )}
          </Flex>
        </nav>
      </header>
      <Box p={4}>{children}</Box>
    </>
  )
}

export default BlogLayout
