import { Link } from 'react-router-dom';

import '../styles/signup.css';

function Login() {
  return (
    <div className='login-main'>
      <div className='login-component'>
        <form className='login-form'>
          <label htmlFor='email' className='email-label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='login-email'
            autoComplete='off'
            required
          />
          <label htmlFor='new-password' className='pwd-label'>
            New Password
          </label>
          <input
            type='password'
            name='new-password'
            id='new-password'
            className='login-pwd'
            required
          />
          <label htmlFor='verify-password' className='pwd-label'>
            Verify Password
          </label>
          <input
            type='password'
            name='verify-password'
            id='verify-password'
            className='login-pwd'
            required
          />
          <button type='submit' className='login-btn'>
            signup
          </button>
        </form>
        <div className='forgot-account'>
          <p>
            Already have an account?{' '}
            <Link to='/login' className='login-signup'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
