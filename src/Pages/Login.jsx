import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebaseConfig';

const Login = () => {

  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault()
    
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };


  return (
    <>
    <h1 className='text-center m-3'>LOGIN</h1>
    <form onSubmit={loginUser}>
  <div className="mb-3">
    <label style={{
      marginLeft: "10px"
    }}  className="form-label ">
      Email address:
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      aria-describedby="emailHelp"
      placeholder='Enter Your Email'
      ref={email}
    />
  </div>
  <div className="mb-3">
    <label style={{
      marginLeft: "10px"
    }} className="form-label">
      Password:
    </label>
    <input type="password" className="form-control" id="password" placeholder='Enter Your Password' ref={password} />
  </div>
  <button style={{
    marginLeft: "10px"
  }} type="submit" className="btn btn-primary">
    Login
  </button>
</form>

  </>
  );
};

export default Login;