import React from 'react';

const BuyCoin = () => {
  return (
    <div className="page-wrapper container section-padding flex-center" style={{minHeight: '60vh'}}>
      <div className="glass-panel swap-container text-center">
         <h2 className="gradient-text" style={{fontSize: '2.5rem', marginBottom: '10px'}}>SWAP NOW</h2>
         <p className="text-muted" style={{marginBottom: '30px'}}>Exchange your ETH instantly for $ONION</p>

         <div className="input-box">
            <label>You Pay</label>
            <div className="input-group">
               <input type="number" placeholder="0.0" defaultValue="1" />
               <span className="currency">ETH</span>
            </div>
         </div>

         <div className="icon-down">⬇️</div>

         <div className="input-box">
            <label>You Receive</label>
            <div className="input-group">
               <input type="number" placeholder="0.0" defaultValue="1000000" readOnly/>
               <span className="currency">$ONION</span>
            </div>
         </div>

         <button className="glass-btn swap-btn" style={{marginTop: '30px', width: '100%', padding: '15px', fontSize: '1.2rem'}}>
            CONNECT WALLET
         </button>
      </div>

      <style>{`
        .swap-container {
           width: 100%;
           max-width: 450px;
           padding: 40px;
           border: 2px solid rgba(144, 43, 245, 0.5);
        }
        .input-box {
           background: rgba(0, 0, 0, 0.3);
           border-radius: 15px;
           padding: 15px;
           text-align: left;
           border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .input-box label {
           font-size: 0.9rem;
           color: var(--text-muted);
           margin-bottom: 10px;
           display: block;
        }
        .input-group {
           display: flex;
           justify-content: space-between;
           align-items: center;
        }
        .input-group input {
           background: transparent;
           border: none;
           color: white;
           font-size: 1.8rem;
           font-weight: 700;
           width: 100%;
           outline: none;
        }
        .currency {
           font-weight: 800;
           background: var(--bg-dark);
           padding: 5px 12px;
           border-radius: 10px;
           color: var(--gold-primary);
        }
        .icon-down {
           margin: 15px 0;
           font-size: 1.5rem;
           text-align: center;
        }
        .swap-btn:hover {
           background: var(--accent-purple);
           color: white;
        }
      `}</style>
    </div>
  );
};

export default BuyCoin;
