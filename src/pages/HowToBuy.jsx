import React from 'react';

const HowToBuy = () => {
  const steps = [
    {
       icon: "👛",
       title: "Get an $ONION Wallet",
       desc: "Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io."
    },
    {
       icon: "🔌",
       title: "Load some ETH",
       desc: "Have ETH in your wallet to switch to $ONION. If you don't have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet."
    },
    {
       icon: "🔄",
       title: "Go to Uniswap",
       desc: "Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $ONION token address into Uniswap, select Onion, and confirm."
    },
    {
       icon: "💎",
       title: "Exchange ETH for $ONION",
       desc: "Switch ETH for $ONION. We have ZERO taxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility."
    }
  ];

  return (
    <div className="page-wrapper container section-padding">
      <div className="text-center" style={{marginBottom: '50px'}}>
         <h1 className="gradient-text" style={{fontSize: '4rem'}}>HOW TO BUY</h1>
         <p className="text-muted">Follow these simple steps to get your hands on $ONION.</p>
      </div>

      <div className="how-to-grid">
         {steps.map((step, idx) => (
            <div key={idx} className="glass-panel how-card">
               <div className="icon-wrapper">{step.icon}</div>
               <h3>{step.title}</h3>
               <p>{step.desc}</p>
            </div>
         ))}
      </div>

      <style>{`
        .how-to-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
           gap: 30px;
        }
        .how-card {
           padding: 40px 30px;
           text-align: center;
           position: relative;
           overflow: hidden;
        }
        .how-card::before {
           content: '';
           position: absolute;
           top: 0; left: 0; right: 0; height: 5px;
           background: linear-gradient(90deg, var(--gold-primary), var(--accent-pink));
        }
        .icon-wrapper {
           font-size: 3rem;
           margin-bottom: 20px;
           display: inline-block;
           background: rgba(255, 255, 255, 0.05);
           padding: 20px;
           border-radius: 50%;
           box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
        }
        .how-card h3 {
           margin-bottom: 15px;
           color: var(--gold-primary);
           font-size: 1.4rem;
        }
        .how-card p {
           color: var(--text-muted);
           line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default HowToBuy;
