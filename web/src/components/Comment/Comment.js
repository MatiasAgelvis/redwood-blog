import { DeleteIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import dayjs from 'dayjs'
import { useMutation } from '@redwoodjs/web'
import { QUERY as CommentsQuery } from 'src/components/CommentsCell'

const DELETE = gql`
  mutation DeleteCommentMutation($id: Int!) {
    deleteComment(id: $id) {
      postId
    }
  }
`

const Comment = ({ comment, ...props }) => {
  const date = dayjs(comment.createdAt).format('MMMM D, YYYY')
  const { hasRole, isAuthenticated } = useAuth()
  const [deleteComment] = useMutation(DELETE, {
    refetchQueries: [
      { query: CommentsQuery, variables: { postId: comment.postId } },
    ],
  })
  const moderate = () => {
    if (
      confirm(
        'Are you sure you want to delete the comment?\
        \nThis Action cannot be undone!'
      )
    ) {
      deleteComment({ variables: { id: comment.id } })
    }
  }

  return (
    <VStack
      align={'start'}
      spacing={1}
      borderLeft={'2px solid gray'}
      pl={4}
      borderRadius="md"
      w="full"
    >
      <HStack spacing={4} align={'baseline'}>
        <Heading size={'md'}>{comment.name}</Heading>
        <Text fontSize={'sm'} fontStyle="italic">
          <time dateTime={date}>{date}</time>
        </Text>
        {hasRole(['admin', 'moderator']) && (
          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            onClick={moderate}
            size="sm"
            aria-label="Delete Comment Button"
          />
        )}
      </HStack>
      <Text pl={4}>{comment.body}</Text>
    </VStack>
  )
}

export default Comment
