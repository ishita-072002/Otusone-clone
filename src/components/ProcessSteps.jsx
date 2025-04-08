const ProcessSteps = () => {
    const steps = [
      'CLIENT MEET',
      'PROJECT INITIATION & PLANNING',
      'DESIGN PHASE',
      'DEVELOPMENT & TESTING',
      'DEPLOYMENT & MAINTENANCE',
    ];
  
    return (
      <div className="container text-center my-5">
        <h2 className="fw-bold text-secondary mb-4">How we works</h2>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {steps.map((step, idx) => (
            <button
              key={idx}
              className="btn fw-semibold text-white px-4 py-2"
              style={{
                backgroundColor: '#72145b',
                boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
                borderRadius: '8px',
              }}
            >
              {step}
            </button>
          ))}
        </div>
        <hr className="my-5" />
      </div>
    );
  };
  
  export default ProcessSteps;
  