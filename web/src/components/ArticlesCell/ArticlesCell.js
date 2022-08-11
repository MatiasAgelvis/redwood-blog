import { WarningTwoIcon } from '@chakra-ui/icons'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  Stack,
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
  <VStack spacing={4}>
    <Spinner size={'xl'} />
    <Text fontSize={'xl'} fontStyle="italic" fontWeight={'semibold'}>
      Loading...
    </Text>
  </VStack>
)

export const Empty = () => (
  <Box textAlign="center" py={10} px={6}>
    <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
    <Heading as="h2" size="xl" mt={6} mb={2}>
      Upss...
    </Heading>
    <Text color={'gray.500'}>Could not fetch any articles.</Text>
  </Box>
)

export const Failure = ({ error }) => (
  <Alert status="error" variant={'solid'}>
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
