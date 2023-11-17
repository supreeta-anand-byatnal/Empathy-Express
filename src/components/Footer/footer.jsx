import React from 'react';
import './footer.css'; 

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Random Acts of Kindness Project. All rights reserved.</p>
       
      </div>
    </footer>
  );
}

export default Footer;
