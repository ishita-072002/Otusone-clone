import officeImage from '../assets/Otusone banner.png';

const Hero = () => {
  return (
    <div
      className="text-center text-white d-flex align-items-center"
      style={{
        backgroundImage: `url(${officeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        borderRadius: '20px',
        margin: '20px 120px 30px 120px',
        position: 'relative',
      }}
    >
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <h1 className="fw-bold mb-4">
          Let us handle the IT, so you can focus on soaking up the sunshine
        </h1>
        <p className="fs-5">
          "Crafting Cutting-Edge Solutions for Your Business" encapsulates our commitment to delivering
          innovative and tailored IT services that propel your business forward. At OTUSONE LLP
        </p>
      </div>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: '20px',
          zIndex: 1,
        }}
      ></div>
    </div>
  );
};

export default Hero;
