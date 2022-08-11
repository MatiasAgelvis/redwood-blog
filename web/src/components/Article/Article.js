import { Box, Heading, Link, Text, Textarea, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { Link as RwLink, routes } from '@redwoodjs/router'
import CommentsCell from 'src/components/CommentsCell'
import CommentForm from '../CommentForm/CommentForm'
const Article = ({ article, summary }) => {
  const date = dayjs(article.createdAt).format('MMMM D, YYYY')
  return (
    <div>
      <article>
        <VStack spacing={4} align={'start'}>
          <Heading>
            <Link as={RwLink} to={routes.article({ id: article.id })}>
              {article.title}
            </Link>
          </Heading>
          <Text>Posted at: {date}</Text>
          <Text {...(summary && { noOfLines: 2 })}>{article.body}</Text>
        </VStack>

        {!summary && (
          <Box mt={8}>
            <CommentForm postId={article.id} />
            <Heading fontSize={'md'} my={4}>
              Comments
            </Heading>
            <CommentsCell postId={article.id} />
          </Box>
        )}
      </article>
    </div>
  )
}

export default Article
