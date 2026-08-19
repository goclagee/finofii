import React from 'react';

const CityTemplate = ({ city, region, audience }) => (
  <div className="page">
    <h1>Treasury Management in {city}: Expert Solutions for {audience}</h1>
    <h2>{city} Business Landscape</h2>
    <p>Founders and businesses in {city} {region} are managing increasing cash flow. Treasury management helps optimize returns while maintaining liquidity.</p>
    <h2>Why {city}?</h2>
    <ul>
      <li>High startup density</li>
      <li>Seasonal business patterns</li>
      <li>Need for working capital optimization</li>
      <li>Tax-efficient cash management</li>
    </ul>
    <h2>Treasury for {city} Businesses</h2>
    <p>Local expertise + national infrastructure. Earn 5-7% on your idle cash while keeping funds accessible for operations.</p>
    <a href="https://wa.me/919311361888" className="btn-whatsapp">Get {city} Consultation</a>
  </div>
);

export const TreasuryDelhi = () => <CityTemplate city="Delhi" region="(NCR)" audience="Startups & SMEs" />;
export const TreasuryNoida = () => <CityTemplate city="Noida" region="(UP)" audience="Tech Companies" />;
export const TreasuryMumbai = () => <CityTemplate city="Mumbai" region="(MH)" audience="Financial Services" />;
export const TreasuryPune = () => <CityTemplate city="Pune" region="(MH)" audience="IT & Manufacturing" />;
export const TreasuryBangalore = () => <CityTemplate city="Bangalore" region="(KA)" audience="Tech Startups" />;
export const TreasuryHyderabad = () => <CityTemplate city="Hyderabad" region="(TG)" audience="IT & Pharma" />;
export const TreasuryGurgaon = () => <CityTemplate city="Gurgaon" region="(Haryana)" audience="Corporates" />;
