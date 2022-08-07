import { VStack } from '@chakra-ui/react'

import Article from 'src/components/Article'

export const QUERY = gql`
  query ArticlesQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }) => {
  return (
    <VStack gap={4}>
      {posts.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </VStack>
  )
}
