import { Link } from 'react-router-dom';

import '../styles/login.css';

function Login() {
  const handleLogin = () => {
    console.log('will be implemented');
  };

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
          <label htmlFor='password' className='pwd-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='login-pwd'
            required
          />
          <button type='submit' className='login-btn' onClick={handleLogin}>
            login
          </button>
        </form>
        <div className='forgot-account'>
          <a href='#' className='forgot-pwd'>
            forgot password?
          </a>
          <p>
            Don{"'"}t have an account?{' '}
            <Link to='/signup' className='login-signup'>
              Signup
            </Link>
          </p>
        </div>
        <div className='continue-home'>
          <Link to='/'>Continue without login {'>>'}</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
