import React from 'react';

const Roadmap = () => {
  const phases = [
    {
      title: "Phase 1",
      tasks: ["Spreading the Onion", "Setup Community", "Patience period", "Setups & merges"]
    },
    {
      title: "Phase 2",
      tasks: ["Running the Tech", "Marketing and Callings Strategy", "100k+ globalized Influencer Launch"]
    },
    {
      title: "Phase 3",
      tasks: ["Collecting the Layers", "Elite adships and partnerships"]
    },
    {
      title: "Phase 4",
      tasks: ["Onion layered Matrix Natives", "Staking"]
    }
  ];

  return (
    <div className="page-wrapper container section-padding">
      <div className="text-center" style={{marginBottom: '50px'}}>
         <h1 className="gradient-text" style={{fontSize: '4rem'}}>ROAD MAP</h1>
         <p className="text-muted">The layered journey to the moon.</p>
      </div>

      <div className="roadmap-grid">
        {phases.map((phase, idx) => (
           <div key={idx} className="glass-panel phase-card">
              <h3 className="gradient-text-alt">{phase.title}</h3>
              <ul>
                 {phase.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                 ))}
              </ul>
           </div>
        ))}
      </div>

      <style>{`
        .roadmap-grid {
           display: flex;
           flex-wrap: wrap;
           gap: 30px;
           justify-content: center;
        }
        .phase-card {
           padding: 30px;
           width: 250px;
           display: flex;
           flex-direction: column;
           transition: transform 0.3s;
           border-top: 3px solid var(--gold-primary);
        }
        .phase-card:hover {
           transform: translateY(-10px);
        }
        .phase-card h3 {
           margin-bottom: 20px;
           font-size: 1.5rem;
           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
           padding-bottom: 10px;
        }
        .phase-card ul {
           list-style: none;
           padding: 0;
           margin: 0;
           flex-grow: 1;
        }
        .phase-card li {
           margin-bottom: 10px;
           font-size: 0.95rem;
           display: flex;
           align-items: center;
        }
        .phase-card li::before {
           content: '•';
           color: var(--gold-primary);
           font-size: 1.5rem;
           margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Roadmap;
