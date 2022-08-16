import { Center, Text, UnorderedList, VStack } from '@chakra-ui/react'
import Comment from '../Comment/Comment'

export const QUERY = gql`
  query CommentsQuery($postId: Int!) {
    comments(postId: $postId) {
      id
      name
      body
      postId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <Center>
    <Text color={'gray.500'}>No comments yet...</Text>
  </Center>
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ comments }) => {
  return (
    <VStack spacing={4} align="start">
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
      })}
    </VStack>
  )
}
