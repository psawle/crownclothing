import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import FormInput from '../../components/form-input/FormInput';
import Button from '../../components/button/Button';
import { UserContext } from '../../context/Context';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/Firebase';

import './login.styles.scss';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
  email: '',
  password: '',
};

export const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const {setCurrentUser} = useContext(UserContext)
  const navigate = useNavigate()

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(response)
      resetFormFields();
      navigate('/shop')
      toast.success('Login successful!', {
        position: "top-right",
      });
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          toast.error('Incorrect password for email', {
            position: "top-right",
          });
          break;
        case 'auth/user-not-found':
          toast.error('No user associated with this email', {
            position: "top-right",
          });
          break;
        default:
          toast.error('An unexpected error occurred', {
            position: "top-right",
          });
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
   
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='login-container'>
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit} >
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
    </div>
  );
};

// export default SignInForm;