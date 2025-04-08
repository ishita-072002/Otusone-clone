import { FaDollarSign, FaChartLine, FaCheckCircle, FaHandsHelping, FaTruck, FaGlobeAsia } from 'react-icons/fa';

const features = [
  {
    icon: <FaDollarSign size={32} className="text-primary" />,
    title: 'Competitive Price',
    desc: 'Affordable pricing Offering Competitive Prices to Suit Your Budget',
  },
  {
    icon: <FaChartLine size={32} className="text-success" />,
    title: 'Strategic growth',
    desc: 'Growth-oriented Strategize for Growth with Our Comprehensive Approach.',
  },
  {
    icon: <FaCheckCircle size={32} className="text-info" />,
    title: 'Quality Product',
    desc: 'Unquestionable quality Delivering Quality Products to Exceed Your Expectations.',
  },
  {
    icon: <FaHandsHelping size={32} className="text-primary" />,
    title: '24/7 Support',
    desc: "We're always here to help you with any questions or issues you may have.",
  },
  {
    icon: <FaTruck size={32} className="text-danger" />,
    title: 'Timely dispatch',
    desc: 'Expedited shipping We understand the importance of getting your application to market fast.',
  },
  {
    icon: <FaGlobeAsia size={32} className="text-dark" />,
    title: 'Localized',
    desc: 'We can develop your app to be culturally relevant and accessible to users in different regions',
  },
];

const KeyFeatures = () => {
  return (
    <div className="container mb-5">
      <h3 className="fw-bold mb-2">Key Features</h3>
      <p className="text-muted">Elevating Experiences, One Click at a Time.</p>
      <div className="row mt-4">
        {features.map((feature, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="p-4 bg-white shadow rounded-3 h-100">
              <div className="mb-3">{feature.icon}</div>
              <h5 className="fw-bold text-dark">{feature.title}</h5>
              <p className="text-muted mb-0">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
