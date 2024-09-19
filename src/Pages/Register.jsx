import React, { useRef } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

const Register = () => {
    
    const email = useRef();
    const password = useRef();

    const registerUser = (event) => {
      event.preventDefault();
      console.log(email.current.value);
      console.log(password.current.value);
  
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
  }
  return (
    <>
    <h1 className='text-center m-3'>Register</h1>
    <form onSubmit={registerUser}>
  <div className="mb-3">
    <label style={{
      marginLeft: "10px"
    }} htmlFor="exampleInputEmail1" className="form-label">
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
    }} htmlFor="exampleInputPassword1" className="form-label">
      Password:
    </label>
    <input type="password" className="form-control" id="password" placeholder='Enter Your Password' ref={password} />
  </div>
  <button style={{
    marginLeft: "10px"
  }} type="submit" className="btn btn-primary">
  Register
  </button>
</form>
    </>
  )
}

export default Register