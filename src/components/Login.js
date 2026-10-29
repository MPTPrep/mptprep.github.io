import React, { useState } from 'react';
import { auth } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail, 
  sendEmailVerification 
} from 'firebase/auth';

const translations = {
  en: {
    toggleBtn: 'FR',
    welcomeBack: 'Welcome Back',
    createAccount: 'Create Account',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    signUpBtn: 'Sign Up',
    loginBtn: 'Login',
    needAccount: 'Need an account? Sign Up',
    alreadyAccount: 'Already have an account? Login',
    forgotPassword: 'Forgot Password?',
    resetSentMsg: 'Password reset link sent to your email!',
    backToLogin: 'Back to login',
    enterEmailFirst: 'Please enter your email address first.',
    verifyEmailSuccess: 'Verification email sent! Please check your inbox before logging in.',
    verifyEmailRequired: (email) => `Please verify your email first. We sent a link to ${email}`,
    emailInUse: 'This email is already registered. Please login instead.',
    invalidCredentials: 'Invalid email or password.',
    errorPrefix: 'Error: '
  },
  fr: {
    toggleBtn: 'EN',
    welcomeBack: 'Bienvenue',
    createAccount: 'Créer un compte',
    emailPlaceholder: 'Courriel',
    passwordPlaceholder: 'Mot de passe',
    signUpBtn: "S'inscrire",
    loginBtn: 'Se connecter',
    needAccount: "Pas de compte? S'inscrire",
    alreadyAccount: 'Vous avez déjà un compte? Se connecter',
    forgotPassword: 'Mot de passe oublié?',
    resetSentMsg: 'Un lien de réinitialisation a été envoyé à votre courriel!',
    backToLogin: 'Retour à la connexion',
    enterEmailFirst: 'Veuillez d’abord saisir votre adresse courriel.',
    verifyEmailSuccess: 'Courriel de vérification envoyé! Veuillez vérifier votre boîte de réception avant de vous connecter.',
    verifyEmailRequired: (email) => `Veuillez d'abord vérifier votre courriel. Un lien a été envoyé à ${email}`,
    emailInUse: 'Ce courriel est déjà enregistré. Veuillez plutôt vous connecter.',
    invalidCredentials: 'Courriel ou mot de passe invalide.',
    errorPrefix: 'Erreur : '
  }
};

export default function Login() {
  const [lang, setLang] = useState('en'); // 'en' or 'fr'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const t = translations[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCredential.user);
        
        await auth.signOut();
        setSuccess(t.verifyEmailSuccess);
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        if (!userCredential.user.emailVerified) {
          setError(t.verifyEmailRequired(email));
          await auth.signOut(); 
          return;
        }
      }
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError(t.emailInUse);
      } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError(t.invalidCredentials);
      } else {
        setError(t.errorPrefix + err.message);
      }
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError(t.enterEmailFirst);
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
      setError('');
    } catch (err) { setError(err.message); }
  };

  return (
    <div style={{ position: 'relative', padding: '40px', textAlign: 'center', fontFamily: 'Montserrat' }}>
      
      {/* Language Toggle Button */}
      <button 
        onClick={toggleLanguage}
        aria-label="Toggle language"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '6px 14px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '0.85rem',
          color: '#333'
        }}
      >
        {t.toggleBtn}
      </button>

      <h2>{isSignUp ? t.createAccount : t.welcomeBack}</h2>
      
      {resetSent ? (
        /* Post-Reset State: Hides the form and shows success + back button */
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', maxWidth: '300px', margin: '20px auto' }}>
          <p style={{ color: 'green', fontSize: '0.9rem', fontWeight: 'bold' }}>{t.resetSentMsg}</p>
          <button 
            onClick={() => { setResetSent(false); setEmail(''); setError(''); }} 
            style={{background: 'none', border: 'none', color: '#1cb0f6', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem'}}
          >
            ← {t.backToLogin}
          </button>
        </div>
      ) : (
        /* Normal Form State */
        <>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: 'auto' }}>
            <input 
              type="email" 
              placeholder={t.emailPlaceholder} 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              style={{padding: '12px', borderRadius: '8px', border: '1px solid #ddd'}} 
              required 
            />
            
            <input 
              type="password" 
              placeholder={t.passwordPlaceholder} 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              style={{padding: '12px', borderRadius: '8px', border: '1px solid #ddd'}} 
              required 
            />

            <button type="submit" style={{padding: '12px', backgroundColor: '#1cb0f6', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'}}>
              {isSignUp ? t.signUpBtn : t.loginBtn}
            </button>
          </form>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={() => { setIsSignUp(!isSignUp); setSuccess(''); setError(''); }} style={{background: 'none', border: 'none', color: '#1cb0f6', cursor: 'pointer'}}>
              {isSignUp ? t.alreadyAccount : t.needAccount}
            </button>
            
            {!isSignUp && (
              <button onClick={handleForgotPassword} style={{background: 'none', border: 'none', color: '#888', fontSize: '0.8rem', cursor: 'pointer'}}>
                {t.forgotPassword}
              </button>
            )}
          </div>
        </>
      )}

      {error && <p style={{ color: 'red', fontSize: '0.85rem', marginTop: '10px' }}>{error}</p>}
      
      {success && <p style={{ color: 'green', fontSize: '0.85rem', marginTop: '10px', fontWeight: 'bold' }}>{success}</p>}
      
      <div style={{ marginTop: '35px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '560px', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_VeZb9iEV0Q"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
      
    </div>
  );
}