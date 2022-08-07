import { Heading, Link, Text, VStack } from '@chakra-ui/react'

import { Link as RwLink, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <div>
      <article>
        <VStack spacing={4} align={'start'}>
          <Heading>
            <Link as={RwLink} to={routes.article({ id: article.id })}>
              {article.title}
            </Link>
          </Heading>
          <Text>Posted at: {article.createdAt}</Text>
          <Text>{article.body}</Text>
        </VStack>
      </article>
    </div>
  )
}

export default Article
