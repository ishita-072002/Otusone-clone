import image from '../assets/home_welcome.png';

const AboutSection = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <div className="position-relative d-inline-block">
            {/* Circle Background */}
            <div
              style={{
                backgroundColor: '#72145b',
                borderRadius: '50%',
                width: '350px',
                height: '350px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0,
              }}
            ></div>

            {/* Foreground Image */}
            <img
              src={image}
              alt="About Otusone"
              className="img-fluid position-relative"
              style={{ zIndex: 1, maxHeight: '380px' }}
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="col-md-7">
          <h6 className="fw-bold mb-2">Welcome</h6>
          <h2 className="fw-bold mb-3">We are a creative agency</h2>
          <p className="text-muted mb-4 small">
            At OTUSONE, we specialize in cutting-edge technologies that shape the future and act as catalysts for efficient service transformation for our clients. We are a pioneering firm in software development, offering dedicated services in iOS and Android mobile application development, website development, and digital marketing solutions.
            Our focus is on assisting you throughout the entire process, from conceptualization and design to programming, execution, testing, and bug fixing. Trust OTUSONE to help you scale and enhance your applications.
          </p>

          <button className="btn text-white px-4 py-2" style={{ backgroundColor: '#72145b' }}>
            More About us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
