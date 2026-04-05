import React from 'react';

const Footer = () => {
  return (
    <footer className="footer page-wrapper">
      <div className="container text-center">
        <h3 className="gradient-text" style={{fontSize: '2rem', marginBottom: '10px'}}>$ONION COIN</h3>
        <p className="text-muted" style={{marginBottom: '20px'}}>© 2024 ONION COIN - ALL RIGHTS RESERVED</p>
        <div className="social-links flex-center">
          <a href="#" className="glass-btn">Twitter</a>
          <a href="#" className="glass-btn">Telegram</a>
        </div>
      </div>
      
      <style>{`
        .footer {
          background: rgba(31, 11, 53, 0.9);
          border-top: 1px solid rgba(255, 215, 0, 0.1);
          padding: 40px 0;
          margin-top: 50px;
        }
        .social-links {
          gap: 15px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
