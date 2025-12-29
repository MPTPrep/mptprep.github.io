import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) await createUserWithEmailAndPassword(auth, email, password);
      else await signInWithEmailAndPassword(auth, email, password);
    } catch (err) { alert(err.message); }
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Montserrat' }}>
      <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: 'auto' }}>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} style={{padding: '10px'}} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} style={{padding: '10px'}} />
        <button type="submit" style={{padding: '10px', backgroundColor: '#1cb0f6', color: '#fff', border: 'none', borderRadius: '8px'}}>{isSignUp ? "Sign Up" : "Login"}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)} style={{background: 'none', border: 'none', color: '#1cb0f6', marginTop: '10px', cursor: 'pointer'}}>
        {isSignUp ? "Already have an account? Login" : "Need an account? Sign Up"}
      </button>
    </div>
  );
}