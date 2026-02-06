import React, { useState } from 'react';
import { auth } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail, 
  sendEmailVerification 
} from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // New state to hold success messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(''); // Clear previous success
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCredential.user);
        
        await auth.signOut();
        setSuccess("Verification email sent! Please check your inbox before logging in.");
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        if (!userCredential.user.emailVerified) {
          setError("Please verify your email first. We sent a link to " + email);
          await auth.signOut(); 
          return;
        }
      }
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError("This email is already registered. Please login instead.");
      } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError("Invalid email or password.");
      } else {
        setError("Error: " + err.message);
      }
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
      setError('');
    } catch (err) { setError(err.message); }
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Montserrat' }}>
      <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: 'auto' }}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{padding: '12px', borderRadius: '8px', border: '1px solid #ddd'}} required />
        
        {!resetSent && (
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{padding: '12px', borderRadius: '8px', border: '1px solid #ddd'}} required={!resetSent} />
        )}

        <button type="submit" style={{padding: '12px', backgroundColor: '#1cb0f6', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'}}>
          {isSignUp ? "Sign Up" : "Login"}
        </button>
      </form>

      {error && <p style={{ color: 'red', fontSize: '0.85rem', marginTop: '10px' }}>{error}</p>}
      
      {success && <p style={{ color: 'green', fontSize: '0.85rem', marginTop: '10px', fontWeight: 'bold' }}>{success}</p>}
      
      {resetSent && <p style={{ color: 'green', fontSize: '0.85rem' }}>Password reset link sent to your email!</p>}

      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={() => { setIsSignUp(!isSignUp); setSuccess(''); setError(''); }} style={{background: 'none', border: 'none', color: '#1cb0f6', cursor: 'pointer'}}>
          {isSignUp ? "Already have an account? Login" : "Need an account? Sign Up"}
        </button>
        
        {!isSignUp && (
          <button onClick={handleForgotPassword} style={{background: 'none', border: 'none', color: '#888', fontSize: '0.8rem', cursor: 'pointer'}}>
            Forgot Password?
          </button>
        )}
      </div>
    </div>
  );
}