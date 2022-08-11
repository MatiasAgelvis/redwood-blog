import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormLabel,
  Heading,
  Spinner,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import {
  FieldError,
  Form,
  Label,
  Submit,
  TextAreaField,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { QUERY as CommentsQuery } from 'src/components/CommentsCell'

const CREATE_COMMENT = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      name
      body
      createdAt
    }
  }
`

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

const CommentForm = ({ postId, ...props }) => {
  const { isAuthenticated, currentUser } = useAuth()
  // console.log(currentUser)
  const name = isAuthenticated
    ? currentUser.name
      ? currentUser.name
      : currentUser.email
    : 'Somehow this comment passed without authentication'

  const toast = useToast()
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_COMMENT, {
    onCompleted: () => {
      toast({
        title: 'Thank you for your submission!',
        status: 'success',
        isClosable: true,
      })
      formMethods.reset()
    },

    onError: (error) => {
      toast({
        title: 'Submission failed!',
        description: error,
        status: 'error',
        isClosable: true,
      })
    },
    refetchQueries: [{ query: CommentsQuery, variables: { postId } }],
  })
  const onSubmit = (data) => {
    create({
      variables: {
        input: { postId: postId, name: name, ...data },
      },
    })
  }

  return (
    <Box {...props}>
      {isAuthenticated ? (
        <Form onSubmit={onSubmit} error={error} formMethods={formMethods}>
          <VStack>
            <Heading alignSelf={'start'} fontSize={'md'}>
              Leave a Comment
            </Heading>
            <InputWrapper name={'body'}>
              <Textarea
                as={TextAreaField}
                name={'body'}
                validation={{ required: true }}
                disabled={!isAuthenticated}
                placeholder={!isAuthenticated ? 'Login to leave a comment' : ''}
              />
            </InputWrapper>

            <Submit disabled={loading || !isAuthenticated}>
              <Button as={Box} disabled={loading || !isAuthenticated}>
                {loading ? <Spinner /> : 'Submit'}
              </Button>
            </Submit>
          </VStack>
        </Form>
      ) : (
        <Alert status="info" borderRadius={'md'} w="fit-content">
          <AlertIcon />
          Login to comment
        </Alert>
      )}
    </Box>
  )
}

export default CommentForm
