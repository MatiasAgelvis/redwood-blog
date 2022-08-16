// Define your own mock data here:
export const standard = () => ({
  comments: [
    {
      id: 1,
      name: 'Rob Cameron',
      body: 'First comment',
      postId: 1,
      createdAt: Date.now(),
    },
    {
      id: 2,
      name: 'David Price',
      body: 'Second comment',
      postId: 2,
      createdAt: Date.now(),
    },
  ],
})
