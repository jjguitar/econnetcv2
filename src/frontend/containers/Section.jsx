import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/Section.scss';

const Section = ({ route, nameSection}) => {
	return (
    <Link to={route} className="Section">
      <div className="section-divider">
      </div>
      <div className="section-name">
        <p>{nameSection}</p>
      </div>
    </Link>
	);
}

export default Section;
