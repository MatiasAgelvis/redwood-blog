import { render, screen, waitFor } from '@redwoodjs/testing/web'

import Comment from './Comment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components
const COMMENT = {
  name: 'John Doe',
  body: 'This is my comment',
  createdAt: Date.now(),
}

describe('Comment', () => {
  it('renders successfully', () => {
    render(<Comment comment={COMMENT} />)

    expect(screen.getByText(COMMENT.name)).toBeInTheDocument()
    expect(screen.getByText(COMMENT.body)).toBeInTheDocument()
  })

  it('renders a delete button if the user is a moderator', async () => {
    mockCurrentUser({ roles: 'moderator' })

    render(<Comment comment={COMMENT} />)

    await waitFor(() =>
      expect(screen.getByLabelText('Delete Comment Button')).toBeTruthy()
    )
  })

  it('does not render a delete button if the user is not a moderator', async () => {
    mockCurrentUser()

    render(<Comment comment={COMMENT} />)

    await waitFor(() =>
      expect(screen.queryByLabelText('Delete Comment Button')).toBeNull()
    )
  })
})
