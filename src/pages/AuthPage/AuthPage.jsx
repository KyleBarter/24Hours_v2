import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import { useState } from "react";

export default function AuthPage({ setUser }) {
  const [signInVisible, setSignInVisible] = useState(false)
  const onClick = () => setSignInVisible(!signInVisible)
  const signUpText = 'Already have an account?'
  const logInText = 'Create an account'

  const buttonText = signInVisible ?  signUpText : logInText;

  return (
    <div className="auth-page">
      <h1>24Hours</h1>
      <>
        { signInVisible ?  <SignUpForm setUser={setUser}/> : <LoginForm setUser={setUser}/> }
        <button onClick={onClick}>{buttonText}</button>
      </>
    </div>


  );
}