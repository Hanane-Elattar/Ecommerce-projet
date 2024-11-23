import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoginVisible, setIsLoginVisible] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [registeredUser, setRegisteredUser] = useState(null);
    const navigate = useNavigate();

    const validateRegisterInputs = () => {
        if (!email || !password || !confirmPassword) {
            setErrorMessage('Tous les champs sont obligatoires');
            return false;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Les mots de passe ne correspondent pas');
            return false;
        }

        setErrorMessage('');
        return true;
    };

    const handleRegister = () => {
        if (validateRegisterInputs()) {
            setRegisteredUser({ email, password });
            setSuccessMessage('Inscription réussie ! Veuillez vous connecter.');
            setIsLoginVisible(true);
            setErrorMessage('');
        }
    };

    const handleLogin = () => {
        
        if (email === 'Admin@gmail.com' && password === 'Admin1234') {
            setSuccessMessage('Connexion réussie ! Redirection vers le Dashboard...');
            setErrorMessage('');
            setTimeout(() => {
                navigate('/dashboard'); 
            }, 2000);
        } else if (registeredUser && email === registeredUser.email && password === registeredUser.password) {
            setSuccessMessage('Connexion réussie ! Redirection vers l\'accueil...');
            setErrorMessage('');
            setTimeout(() => {
                navigate('/'); 
            }, 2000);
        } else {
            setErrorMessage('Email ou mot de passe invalide');
        }
    };

    return (
        <div className="page-wrapper">
            <div className="login-container">
                <div className="button-container">
                    <button onClick={() => setIsLoginVisible(true)} className={isLoginVisible ? "active" : ""}>
                        Se connecter
                    </button>
                    <button onClick={() => setIsLoginVisible(false)} className={!isLoginVisible ? "active" : ""}>
                        S'inscrire
                    </button>
                </div>

                {isLoginVisible ? (
                    <div className="form-container">
                        <h2>Se connecter</h2>
                        <label htmlFor="email">Email ou identifiant</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        /><br />
                        <label htmlFor="password">Mot de passe</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        /><br />
                        <button onClick={handleLogin}>Se connecter</button>
                    </div>
                ) : (
                    <div className="form-container">
                        <h2>S'inscrire</h2>
                        <label htmlFor="regEmail">Email</label>
                        <input 
                            type="email" 
                            id="regEmail" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        /><br />
                        <label htmlFor="regPassword">Mot de passe</label>
                        <input 
                            type="password" 
                            id="regPassword" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        /><br />
                        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        /><br />
                        <button onClick={handleRegister}>S'inscrire</button>
                    </div>
                )}

                {errorMessage && <div className="error-message" style={{ color: 'red' }}>{errorMessage}</div>}
                {successMessage && <div className="success-message" style={{ color: 'green' }}>{successMessage}</div>}
            </div>
        </div>
    );
}

export default Login;
