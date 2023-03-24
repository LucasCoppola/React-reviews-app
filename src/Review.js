import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextReview = () => {
    setIndex((prevIndex) => {
      if (prevIndex >= people.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const prevReview = () => {
    setIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return people.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const randomReview = () => {
    const randomNumber = Math.ceil(Math.random() * people.length - 1);
    setIndex(randomNumber);
  };

  return (
    <div className="review">
      <div className="container-img">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h2>{name}</h2>
      <h4>{job}</h4>
      <p>{text}</p>
      <div>
        <FaChevronLeft className="prev-btn" onClick={prevReview} />
        <FaChevronRight className="next-btn" onClick={nextReview} />
      </div>
      <button className="random-btn" onClick={randomReview}>
        Surprise Me
      </button>
    </div>
  );
};

export default Review;
