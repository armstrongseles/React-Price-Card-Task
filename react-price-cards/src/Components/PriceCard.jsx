import React from 'react';
import './PriceCard.css'; // optional for specific styling

const PriceCard = ({ title, price, features, buttonLabel }) => {
  return (
    <div className="price-card">
      <h2>{title}</h2>
      <h3>{price}</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={feature.isAvailable ? '' : 'text-muted'}>
            {feature.name}
          </li>
        ))}
      </ul>
      <button>{buttonLabel}</button>
    </div>
  );
};

export default PriceCard;
