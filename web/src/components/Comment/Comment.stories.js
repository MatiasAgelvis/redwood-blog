import Comment from './Comment'

export const generated = (args) => {
  return <Comment {...args} />
}

export default {
  title: 'Components/Comment',
  args: {
    comment: {
      name: 'Comentator',
      createdAt: Date.now(),
      body: 'Veniam id eiusmod sint est nisi laborum adipisicing aliqua sit quis.',
    },
  },
}
