import React, { useContext } from 'react';
import '../styles/ExperienceItem.scss';
import { dateFn } from '../utils/dateFn'
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';

const ExperienceItem = ({ exp }) => {
  // console.log(exp)
	// const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		// addToCart(item);
	}

	return (
		<div className="ExperienceItem">
      <div className="Experience-img__container">
        {/* <img src={exp.images[0]} alt={exp.title} /> */}
      </div>
      <div className="experience-details">
        <p className='experience-details__title'>{exp.name}</p>
        <p>
          {!exp.load && dateFn(exp.date)}
        </p>
      </div>
			<div className="experience-info">
				<figure onClick={() => handleClick(exp)} >
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ExperienceItem;
