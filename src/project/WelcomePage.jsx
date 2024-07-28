import '../styles/Style.css';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import { useState } from 'react';

function WelcomePage() {
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);

    function handleClick() {
        setLogin(true);
    }
    if (login) {
        return <LoginPage />
    }

    function handleClick2() {
        setSignup(true);
    }
    if (signup) {
        return <SignupPage />
    }
    return (
        <>
            <div className="container1">
                <div className="well-box">
                <img src="https://i.pinimg.com/originals/6b/ab/ee/6babeeeeadb5ccf27187166cfd250e78.jpg" alt='logo' width="200px" className="welcome-logo" />
                    <p className="welcome">welcome</p>
                    <p className="well-con">Fell Less Stressed and more minful with Music.</p>
                    <button className="well-acc" onClick={handleClick2}>CREATE ACCOUNT</button>
                    <button className="well-login" onClick={handleClick}> LOG IN </button>
                </div>
            </div>

        </>
    );
}

export default WelcomePage;