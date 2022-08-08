// Define your own mock data here:

const article = {
  title:
    'Commodo mollit aliqua ullamco elit nostrud cupidatat adipisicing sunt excepteur nisi est ut ad.',
  body: 'Labore ipsum consequat eu eu in cupidatat. Voluptate veniam excepteur ut sit ipsum ullamco tempor ullamco nulla consequat labore excepteur est. Elit irure aliqua do consequat. Tempor aute veniam nostrud pariatur non cillum mollit velit deserunt. Et labore ex est quis culpa enim adipisicing. Anim proident in reprehenderit labore velit in irure id ipsum pariatur cupidatat laboris Lorem. Commodo pariatur pariatur ex ipsum velit mollit. Irure adipisicing anim aute culpa mollit nulla. Aliqua cupidatat aute proident ut magna fugiat occaecat. Eiusmod esse sit ad.',
  createdAt: 'Feb 24 2080',
}

export const standard = () => ({
  posts: [
    { id: 42, ...article },
    { id: 43, ...article },
    { id: 44, ...article },
  ],
})
