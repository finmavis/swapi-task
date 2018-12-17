import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MovieHeader from './MovieHeader';
import MovieDescription from './MovieDescription';
import MovieLink from './MovieLink';

import { Col } from './styles/Grid';

import bgCardOne from './assets/images/bg-card-1.png';
import bgCardTwo from './assets/images/bg-card-2.png';
import bgCardThree from './assets/images/bg-card-3.png';
import bgCardFour from './assets/images/bg-card-4.png';
import bgCardFive from './assets/images/bg-card-5.png';
import bgCardSix from './assets/images/bg-card-6.png';
import bgCardSeven from './assets/images/bg-card-7.png';

const ColCustom = styled(Col)`
  &:nth-child(1) > * {
    background: url(${bgCardOne});
  }

  &:nth-child(2) > * {
    background: url(${bgCardTwo});
  }

  &:nth-child(3) > * {
    background: url(${bgCardThree});
  }

  &:nth-child(4) > * {
    background: url(${bgCardFour});
  }

  &:nth-child(5) > * {
    background: url(${bgCardFive});
  }

  &:nth-child(6) > * {
    background: url(${bgCardSix});
  }

  &:nth-child(7) > * {
    background: url(${bgCardSeven});
  }
`;

const MovieContent = styled.div`
  display: block;
  background-color: #232323;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  color: #fff;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: box-shadow;
  box-shadow: 0px 0px 10px 3px transparent, 0px 0px 10px rgba(0, 0, 0, 0);
  border-radius: 0.3rem;

  &:hover {
    box-shadow: 0px 0px 10px 3px #2098d1, 0px 0px 10px rgba(0, 0, 0, 0);
  }
`;

const MovieItem = ({ id, title, description, releaseDate }) => (
  <ColCustom>
    <MovieContent>
      <MovieHeader id={id} title={title} releaseDate={releaseDate} />
      <MovieDescription description={description} />
      <MovieLink id={id} />
    </MovieContent>
  </ColCustom>
);

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default MovieItem;
