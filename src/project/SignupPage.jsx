import { useEffect, useState } from 'react';
import LoginPage from './LoginPage';
import '../styles/Style.css';
import WelcomePage from './WelcomePage';
function SignupPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const [login, setLogin] = useState(false);
  const [back, setBack] = useState(false);

  const [count, setCount] = useState(0);

  useEffect(() => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
          "username": username,
          "password": password
      });

      const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
      };

      fetch("http://localhost:3344/user/sign-up", requestOptions)
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
  }, [count]);

  function handleClick() {
      setLogin(true);
      setCount(count + 1);
  }
  if (login) {
      return <LoginPage />
  }

  function handleClick2() {
      setBack(true);
  }
  if (back) {
      return <WelcomePage />
  }

  return (
    <>
     <div className="container3">
<div className="form-box">
<img src="https://i.pinimg.com/originals/6b/ab/ee/6babeeeeadb5ccf27187166cfd250e78.jpg" width="100px" className="login-logo" />
 <div className="sing-in-up">
 <p className="login" onClick={handleClick}>
        SIGN IN
      </p>
      <p className="login" onClick={handleClick2}>
        SIGN UP
      </p>
 </div>
 <form action="" name="form">
   <div className="input-box">
     <ion-icon name="mail-outline" />
     <input type="text" name="Username" value={username}
                 onChange={(e) => setUsername(e.target.value)} />
     <label>Username</label>
   </div>
   <div className="input-box">
     <ion-icon name="lock-closed-outline" />
     <input type="password" name="password" value={password}
                 onChange={(e) => setPassword(e.target.value)} />
     <label> Create Password</label>
   </div>
   <div className="input-box">
     <ion-icon name="lock-closed-outline" />
     <input type="password" name="password" />
     <label>Confirm Password</label>
   </div>
   <div className="log-forget">
        <button className="login-btn"  onClick={handleClick}>Sign up</button>
      </div>
 </form>
</div>
</div>

    </>
 );


}
  export default SignupPage;