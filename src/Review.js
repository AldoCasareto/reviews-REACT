import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const previous = () => {
    let newIndex = index - 1;
    newIndex < 0 ? setIndex(people.length - 1) : setIndex(newIndex);
  };

  const next = () => {
    let newIndex = index + 1;
    newIndex > people.length - 1 ? setIndex(0) : setIndex(newIndex);
  };

  const random = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    setIndex(randomNumber);
    // setIndex(randomNumber);
  };

  return (
    <>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn' onClick={previous}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={next}>
            <FaChevronRight />
          </button>
          <button className='random-btn' onClick={random}>
            Random quote
          </button>
        </div>
      </article>
    </>
  );
};

export default Review;
