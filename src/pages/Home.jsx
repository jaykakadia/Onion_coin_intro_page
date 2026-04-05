import React from 'react';
import { NavLink } from 'react-router-dom';
import heroImg from '../assets/hero-onion.png';
import chestImg from '../assets/chest.png';

const Home = () => {
  return (
    <div className="page-wrapper main-page">
      {/* Hero Section */}
      <section className="hero-section container flex-center">
        <div className="hero-content text-center">
          <h1 className="main-title gradient-text animate-float" style={{fontSize: '6rem', margin: '20px 0'}}>$ONION</h1>
          <img src={heroImg} alt="Onion King" className="hero-img animate-float" />
          <div className="flex-center" style={{gap: '20px', marginTop: '30px'}}>
             <button className="glass-btn">Buy Now</button>
             <button className="glass-btn glass-btn-outline">Chart</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section container section-padding">
        <div className="about-grid">
          <div className="about-text">
            <h2>ABOUT <span className="gradient-text">$ONION</span></h2>
            <button className="glass-btn" style={{margin: '15px 0'}}>ONION COIN COIN</button>
            <p style={{lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--text-muted)'}}>
              $ONION is the ultimate memecoin pushing boundaries. It's not just a coin, it's an entire layered ecosystem. 
              Join the peel and discover decentralized fortune.
            </p>
          </div>
          <div className="about-img">
            <img src={chestImg} alt="Onion Chest" style={{width: '100%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)'}} fetchpriority="high" />
          </div>
        </div>
      </section>
      
      {/* Features Outline */}
      <section className="feature-section container section-padding text-center">
         <h2>OUR <span className="gradient-text">FEATURES</span></h2>
         <div className="feature-grid" style={{ marginTop: '50px' }}>
            <div className="glass-panel feature-card">
               <h3 className="gradient-text-alt">DARK WEB</h3>
               <p>Deep hidden layers of memetic wealth waiting to be uncovered.</p>
               <button className="glass-btn glass-btn-outline" style={{marginTop: '20px', fontSize: '0.8rem'}}>READ MORE</button>
            </div>
            <div className="glass-panel feature-card">
               <h3 className="gradient-text-alt">LEAK ALERTS</h3>
               <p>Real-time updates on onion trends and community bounties.</p>
               <button className="glass-btn glass-btn-outline" style={{marginTop: '20px', fontSize: '0.8rem'}}>READ MORE</button>
            </div>
            <div className="glass-panel feature-card">
               <h3 className="gradient-text-alt">STRONG PASSWORDS</h3>
               <p>Secure, transparent, and completely immutable token contracts.</p>
               <button className="glass-btn glass-btn-outline" style={{marginTop: '20px', fontSize: '0.8rem'}}>READ MORE</button>
            </div>
         </div>
      </section>

      <style>{`
        .hero-section {
          min-height: 80vh;
        }
        .hero-img {
          width: 100%;
          max-width: 600px;
          border-radius: 20px;
          filter: drop-shadow(0 0 40px rgba(216, 69, 255, 0.4));
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .feature-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
           gap: 30px;
        }
        .feature-card {
           padding: 40px 20px;
           transition: transform 0.3s;
        }
        .feature-card:hover {
           transform: translateY(-10px);
           border-color: var(--accent-pink);
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; }
          .main-title { font-size: 4rem !important; }
        }
      `}</style>
    </div>
  );
};

export default Home;
