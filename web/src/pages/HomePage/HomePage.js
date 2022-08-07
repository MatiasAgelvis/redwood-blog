import { Heading } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Heading>Home</Heading>
      <ArticlesCell />
    </>
  )
}

export default HomePage
