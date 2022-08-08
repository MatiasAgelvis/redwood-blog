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

import Article from 'src/components/Article'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
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
    <AlertIcon /> <AlertTitle>Empty! ¯\_( ツ )_/¯</AlertTitle>
  </Alert>
)

export const Failure = ({ error }) => (
  <Alert status="error">
    <AlertIcon /> <AlertTitle>Oh No!</AlertTitle>
    <AlertDescription>{error.message}</AlertDescription>
  </Alert>
)

export const Success = ({ articles }) => {
  return (
    <VStack gap={4}>
      {articles.map((article) => (
        <Article key={article.id} article={article} summary />
      ))}
    </VStack>
  )
}
