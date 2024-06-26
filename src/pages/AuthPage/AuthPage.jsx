import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main className="auth-container">
      <h1 className="auth-header">SignUp/Login</h1>
      <span>To Create Notes</span>
      <button 
        className="auth-toggle-btn" 
        onClick={() => setShowSignUp(!showSignUp)}
      >
        {showSignUp ? 'Log In' : 'Sign Up'}
      </button>
      <div className="auth-form-container">
        {showSignUp ? (
          <SignUpForm setUser={setUser} />
        ) : (
          <LoginForm setUser={setUser} />
        )}
      </div>
    </main>
  );
}
