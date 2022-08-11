import { Heading, HStack, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'

const Comment = ({ comment, ...props }) => {
  const date = dayjs(comment.createdAt).format('MMMM D, YYYY')
  return (
    <VStack align={'start'} spacing={1} borderLeft={'2px solid gray'} pl={4}>
      <HStack spacing={4} align={'baseline'}>
        <Heading size={'md'}>{comment.name}</Heading>
        <Text fontSize={'sm'} fontStyle="italic">
          <time dateTime={date}>{date}</time>
        </Text>
      </HStack>
      <Text pl={4}>{comment.body}</Text>
    </VStack>
  )
}

export default Comment
