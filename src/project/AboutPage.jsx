import Footer from './Footer';
import '../styles/Style.css';
 

function  AboutPage() {
    return (
       <>
        <div className="about">
  <div className="pro-img">
    <img
      src="https://cdn.hero.page/pfp/f6b3cf1a-67b1-47f4-8b7d-0a35f8ec714c-adorable-shoujo-girl-profile-cute-anime-profile-pictures-for-girls-3.png"
      className="profile-img"
    />
    <span className="pro-name">Sophia</span>
  </div>
  <div className="bio">
    <p>~ ~🎧Where words fail,music speaks.~ ~</p>
    <p>~ ~ 🎶Music is life itself✨~ ~</p>
    <p>~ ~ 💖✨✨🎼🎧🎹 ~ ~</p>
  </div>
  <div className="play-follow">
    <span>
      <p>200</p> playlist
    </span>
    <span>
      <p>100</p>Following
    </span>
    <span>
      <p> 02</p>Follwers
    </span>
  </div>
  <div className="pro-btn">
    <button>EDIT PROFILE</button>
    <button>LOG OUT</button>
  </div>
   
    
</div>

       </>
    );
  }
  
  export default  AboutPage;