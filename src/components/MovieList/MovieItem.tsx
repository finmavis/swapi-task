import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MovieHeader from './MovieHeader';
import MovieDescription from './MovieDescription';
import MovieLink from './MovieLink';

import { MovieDataType } from 'src/shared/helpers/api';

import { Col } from 'src/shared/styles/base/grid';

import bgCardOne from 'src/shared/assets/images/bg-card-1.png';
import bgCardTwo from 'src/shared/assets/images/bg-card-2.png';
import bgCardThree from 'src/shared/assets/images/bg-card-3.png';
import bgCardFour from 'src/shared/assets/images/bg-card-4.png';
import bgCardFive from 'src/shared/assets/images/bg-card-5.png';
import bgCardSix from 'src/shared/assets/images/bg-card-6.png';
import bgCardSeven from 'src/shared/assets/images/bg-card-7.png';

import { COLOR_BACKGROUND, COLOR_WHITE } from 'src/shared/styles/themes/colors';
import {
  BOX_SHADOW_PRIMARY,
  BOX_SHADOW_PRIMARY_HOVER,
} from 'src/shared/styles/themes/box-shadow';

const ColumnWithBackground = styled(Col)`
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
  background-color: ${COLOR_BACKGROUND};
  padding: 2rem;
  color: ${COLOR_WHITE};
  transform: perspective(1px) translateZ(0);
  box-shadow: ${BOX_SHADOW_PRIMARY};
  transition: all 0.3s;
  overflow: hidden;
  border-radius: 0.5rem;

  &:hover {
    box-shadow: ${BOX_SHADOW_PRIMARY_HOVER};
  }
`;

export default function MovieItem({
  id,
  title,
  description,
  releaseDate,
}: MovieDataType) {
  return (
    <ColumnWithBackground>
      <MovieContent>
        <MovieHeader id={id} title={title} releaseDate={releaseDate} />
        <MovieDescription description={description} />
        <MovieLink id={id} />
      </MovieContent>
    </ColumnWithBackground>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
