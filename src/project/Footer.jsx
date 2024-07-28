import '../styles/Style.css';

function Footer({ setPageTab }) {

  return (
    <>
      <div className="footer">
        <div className="foot-icon">
           
          <p onClick={() => setPageTab('Home')}>Home</p>
        </div>
        <div className="foot-icon">
          
          <p onClick={() => setPageTab('Search')}>Search</p>
        </div>
        <div className="foot-icon">
         
          <p onClick={() => setPageTab('Library')}>Library</p>
        </div>
        <div className="foot-icon">
         
          <p onClick={() => setPageTab('About')}>About</p>
        </div>
      </div>
    </>
  );
}

export default Footer;