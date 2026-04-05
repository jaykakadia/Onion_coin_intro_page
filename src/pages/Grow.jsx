import React from 'react';

const Grow = () => {
  return (
    <div className="page-wrapper container section-padding">
      <div className="text-center" style={{marginBottom: '50px'}}>
         <h1 className="gradient-text" style={{fontSize: '4rem'}}>TOKENOMICS</h1>
         <p className="text-muted">Grow your bag. See our robust token ecosystem.</p>
      </div>

      <div className="tokenomics-layout">
        <div className="chart-placeholder">
           {/* Visual representation of chart */}
           <div className="pie-chart animate-float"></div>
        </div>
        <div className="token-details">
           <div className="glass-panel list-item">
              <span className="bullet"></span> Initial Onion Seed Supply: 1,000,000,000 $ONION
           </div>
           <div className="glass-panel list-item">
              <span className="bullet"></span> Layer 1 - Liquidity Pool: 35%
           </div>
           <div className="glass-panel list-item">
              <span className="bullet"></span> Layer 2 - Community Staking Rewards: 20%
           </div>
           <div className="glass-panel list-item">
              <span className="bullet"></span> Layer 3 - Future Farming: 20%
           </div>
           <div className="glass-panel list-item">
              <span className="bullet"></span> Layer 4 - Developer Bulbs: 15%
           </div>
           <div className="glass-panel list-item">
              <span className="bullet"></span> Layer 5 - Strategic Plantings: 5%
           </div>
        </div>
      </div>

      <style>{`
        .tokenomics-layout {
           display: grid;
           grid-template-columns: 1fr 1.5fr;
           gap: 50px;
           align-items: center;
        }
        .chart-placeholder {
           display: flex;
           justify-content: center;
        }
        .pie-chart {
           width: 300px;
           height: 300px;
           border-radius: 50%;
           background: conic-gradient(
              var(--accent-purple) 0% 35%, 
              var(--gold-primary) 35% 55%, 
              var(--accent-pink) 55% 75%, 
              #4a148c 75% 90%, 
              #7b1fa2 90% 100%
           );
           box-shadow: 0 0 50px rgba(255, 215, 0, 0.2);
           border: 4px solid var(--bg-dark);
        }
        .token-details {
           display: flex;
           flex-direction: column;
           gap: 15px;
        }
        .list-item {
           padding: 15px 20px;
           font-size: 1.1rem;
           font-weight: 600;
           display: flex;
           align-items: center;
        }
        .bullet {
           width: 12px;
           height: 12px;
           background: var(--gold-primary);
           border-radius: 50%;
           display: inline-block;
           margin-right: 15px;
           box-shadow: 0 0 10px var(--gold-primary);
        }
        @media (max-width: 768px) {
           .tokenomics-layout { grid-template-columns: 1fr; }
           .pie-chart { width: 250px; height: 250px; }
        }
      `}</style>
    </div>
  );
};

export default Grow;
