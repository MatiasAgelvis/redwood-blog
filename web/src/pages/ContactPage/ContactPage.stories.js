import ContactPage from './ContactPage'

export const generated = (args) => {
  mockGraphQLMutation('CreateContactMutation', (variables, { ctx }) => {
    ctx.delay(1000)
    return {
      createContact: {
        name: variables.input.name,
        email: variables.input.email,
        message: variables.input.message,
      },
    }
  })
  return <ContactPage {...args} />
}

export default { title: 'Pages/ContactPage' }
