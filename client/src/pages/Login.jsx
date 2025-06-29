import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigate,
} from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FormRow, SubmitBtn } from '../components'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import axios from 'axios'

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
      await axios.post('/api/v1/auth/login', data)
      queryClient.invalidateQueries()
      toast.success('Login successful')
      return redirect('/dashboard')
    } catch (error) {
      toast.error(error.response.data.msg)
      return error
    }
  }

const Login = () => {
  const errors = useActionData()
  const navigate = useNavigate()
  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    }
    try {
      await customFetch.post('/auth/login', data)
      toast.success('take a test drive')
      navigate('/dashboard')
    } catch (error) {
      toast.error(error?.response?.data?.msg)
    }
  }
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>login</h4>
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        {errors && <p style={{ color: 'red' }}>{errors.msg}</p>}
        <SubmitBtn />
        <button type='button' className='btn btn-block' onClick={loginDemoUser}>
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Login
