import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import webDevImage from '../assets/Web_Development.png'; // Replace with your actual image path
import MERN from '../assets/MERN.png';

const services = [
  "Web Development",
  "Mobile App Development",
  "Software Development",
  "UI/UX Design",
  "Graphic Designing",
  "Video Editing",
];

const techStacks = [
  { name: "MERN", icon: {MERN} },
  { name: "MEAN", icon: "../assests/MEAN.png" },
  { name: "Javascript", icon: "../assests/JavaScript.png" },
  { name: "Wordpress", icon: "../assests/Wordpress.png" },
];

const ExpertiseSection = () => {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-2">Our Expertise</h2>
      <p className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>
        Elevate your business through our Service. We provide solutions that align with your goals and aspirations.
      </p>

      <div className="row">
        {/* Left Tabs */}
        <div className="col-md-5 mb-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`d-flex justify-content-between align-items-center px-4 py-3 mb-3 rounded ${
                idx === 0 ? 'bg-purple text-white fw-bold' : 'bg-light text-dark'
              }`}
              style={{ cursor: 'pointer' }}
            >
              {service}
              <FaArrowUpRightFromSquare />
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="col-md-6">
          <h4 className="fw-bold mb-4">Web Development</h4>

          {/* Tech Icons */}
          <div className="d-flex gap-4 mb-4 flex-wrap">
            {techStacks.map((tech, index) => (
              <div key={index} className="text-center">
                <img src={tech.icon} alt={tech.name} style={{ width: '60px' }} />
                <div className="mt-2">{tech.name}</div>
              </div>
            ))}
          </div>

          {/* Image */}
          <img src={webDevImage} alt="Web Development" className="img-fluid rounded" />

          {/* Bottom Caption */}
          <p className="mt-3 text-center text-muted" style={{ fontSize: '0.9rem' }}>
          We excel in web development, crafting dynamic and user-friendly websites tailored to your needs. Our team specializes in creating responsive designs, optimizing performance, and ensuring seamless functionality. Trust us to bring your online presence to life with our expertise in web development
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
