import React, { useContext } from 'react';
import '../styles/ExperienceItem.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';

const ExperienceItem = ({ exp }) => {
  // console.log(exp)
	// const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		// addToCart(item);
	}

  const dateFn = (time) => {
    let format = 'yyyy-mm-dd'
    const dateToday = new Date(time);
    // console.log(dateToday)
    const map = {
        dd: dateToday.getDate(),
        mm: dateToday.getMonth() + 1,
        yyyy: dateToday.getFullYear()
    }
    return format.replace(/dd|mm|yyyy/gi, matched => map[matched])
  }

	return (
		<div className="ExperienceItem">
      <div className="Experience-img__container">
        {/* <img src={exp.images[0]} alt={exp.title} /> */}
      </div>
      <div className="experience-details">
        <p className='experience-details__title'>{exp.name}</p>
        <p>{dateFn(exp.date)}</p>
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
