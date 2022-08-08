import Article from 'src/components/Article'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => (
  <VStack>
    <Spinner />
    <Text>Loading...</Text>
  </VStack>
)
export const Empty = () => (
  <Alert status="warning">
    <AlertIcon /> <AlertTitle>¯\_( ツ )_/¯ Empty!</AlertTitle>
  </Alert>
)

export const Failure = ({ error }) => (
  <Alert status="error">
    <AlertIcon /> <AlertTitle>Oh No!</AlertTitle>
    <AlertDescription>{error.message}</AlertDescription>
  </Alert>
)

export const Success = ({ article }) => {
  return <Article article={article} />
}
