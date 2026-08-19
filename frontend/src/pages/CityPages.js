import React from 'react';
import '../styles/BrandPages.css';

const CityTemplate = ({ city, region, audience }) => (
  <div className="page">
    <h1>Treasury Management in {city}</h1>
    <p className="lead">Expert treasury solutions for {audience} in {region}.</p>
    
    <div className="section">
      <h2>{city} Business Landscape</h2>
      <p>Founders and businesses in {city} are managing increasing cash flow. Treasury management helps optimize returns while maintaining liquidity for operations.</p>
    </div>

    <div className="card">
      <h2>Why Treasury in {city}?</h2>
      <ul>
        <li>High startup and SME density</li>
        <li>Seasonal business patterns</li>
        <li>Need for working capital optimization</li>
        <li>Tax-efficient cash management</li>
      </ul>
    </div>

    <div className="section">
      <h2>Treasury for {city} Businesses</h2>
      <p>Local expertise combined with national infrastructure. Earn 5-7% on idle cash while keeping funds accessible for operations.</p>
    </div>

    <div className="cta">
      <p>Optimize your business cash flow in {city}.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">Get {city} Consultation</a>
    </div>

    <div className="compliance">
      <small><strong>Disclaimer:</strong> Finofii (ARN-176236) provides MFD services in {city} and across India. Returns are indicative. Consult a financial advisor.</small>
    </div>
  </div>
);

export const TreasuryDelhi = () => <CityTemplate city="Delhi" region="(NCR)" audience="startups & SMEs" />;
export const TreasuryNoida = () => <CityTemplate city="Noida" region="(UP)" audience="tech companies" />;
export const TreasuryMumbai = () => <CityTemplate city="Mumbai" region="(MH)" audience="financial services" />;
export const TreasuryPune = () => <CityTemplate city="Pune" region="(MH)" audience="IT & manufacturing" />;
export const TreasuryBangalore = () => <CityTemplate city="Bangalore" region="(KA)" audience="tech startups" />;
export const TreasuryHyderabad = () => <CityTemplate city="Hyderabad" region="(TG)" audience="IT & pharma" />;
export const TreasuryGurgaon = () => <CityTemplate city="Gurgaon" region="(Haryana)" audience="corporates" />;
