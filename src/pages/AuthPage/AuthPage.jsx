import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import { useState } from "react";

export default function AuthPage({ setUser }) {
  const [signInVisible, setSignInVisible] = useState(false)
  const onClick = () => signInVisible



  return (
    <main>

      <h1>24Hours</h1>
      <div>
        { signInVisible ? <LoginForm setUser={setUser}/> : <SignUpForm setUser={setUser}/>  }
        <button onClick={onClick}>Already have an account?</button>
      </div>
    </main>
  );
}