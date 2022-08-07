import { Heading, Text } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <Heading>AboutPage</Heading>
      <main>
        <Text>
          This site was created to demonstrate my mastery of Redwood: Look on my
          works, ye mighty, and despair!
        </Text>
      </main>
    </>
  )
}

export default AboutPage
