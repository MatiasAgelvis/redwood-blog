import { AuthContext } from '@redwoodjs/auth/dist/AuthProvider'
import CommentForm from './CommentForm'

export const notLogged = (args) => {
  return <CommentForm {...args} />
}

export const logged = (args) => {
  mockCurrentUser({
    id: 42,
    name: 'Test von Foobar Jr.',
    email: 'TestvonFoobarJr@mail.com',
  })
  mockGraphQLMutation('CreateCommentMutation', (variables, { ctx }) => {
    const id = Math.floor(Math.random() * 1000)
    ctx.delay(1000)

    return {
      createComment: {
        id,
        name: variables.input.name,
        body: variables.input.body,
        createdAt: new Date().toISOString(),
      },
    }
  })
  return <CommentForm {...args} />
}

export default { title: 'Components/CommentForm' }
