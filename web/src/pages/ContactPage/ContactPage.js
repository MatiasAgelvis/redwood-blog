import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react'

import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

const ErrorAlert = ({ name, ...props }) => {
  return (
    <Alert
      as={FieldError}
      borderRadius="md"
      status="error"
      variant="solid"
      name={name}
      {...props}
    />
  )
}

const InputWrapper = ({ name, label, children, ...props }) => {
  return (
    <Box w="full" {...props}>
      <FormLabel as={Label} htmlFor={name}>
        {label}
      </FormLabel>
      {children}
      <ErrorAlert name={name} mt={1} />
    </Box>
  )
}

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const toast = useToast()
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(
    CREATE_CONTACT,
    {
      onCompleted: () => {
        toast({
          title: 'Thank you for your submission!',
          status: 'success',
          isClosable: true,
        })
        formMethods.reset()
      },
    },
    {
      onError: (error) => {
        toast({
          title: 'Submission failed!',
          description: error,
          status: 'error',
          isClosable: true,
        })
      },
    }
  )

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Heading>Contact</Heading>
      <Form
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
      >
        <Center>
          <VStack spacing={8} justify="start" w="30vw">
            {error && (
              <Alert borderRadius="md" status="error" variant="solid">
                <AlertIcon />
                <FormError error={error} />
              </Alert>
            )}
            <InputWrapper name={'name'} label={'Name'}>
              <Input
                as={TextField}
                name={'name'}
                validation={{ required: true }}
              />
            </InputWrapper>

            <InputWrapper name={'email'} label={'Email'}>
              <Input
                as={TextField}
                name={'email'}
                validation={{ required: true }}
              />
            </InputWrapper>

            <InputWrapper name={'message'} label={'Message'}>
              <Textarea
                as={TextAreaField}
                name="message"
                validation={{ required: true }}
              />
            </InputWrapper>

            <Submit disabled={loading}>
              <Button as={Box} disabled={loading}>
                {loading ? <Spinner /> : 'Submit'}
              </Button>
            </Submit>
          </VStack>
        </Center>
      </Form>
    </>
  )
}

export default ContactPage
