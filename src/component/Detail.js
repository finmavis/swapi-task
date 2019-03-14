import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetailHeader from './DetailHeader';
import DetailDescription from './DetailDescription';
import DetailList from './DetailList';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(22, 22, 22, 0.87);
  color: #fff;
  font-size: 1.6rem;
  padding: 3rem;
`;

const Detail = ({
  title,
  director,
  producer,
  description,
  characters,
  planets,
  species,
  starships,
  vehicles,
}) => (
    <Wrapper>
      <DetailHeader title={title} director={director} producer={producer} />
      <DetailDescription description={description} />
      <DetailList label='Characters' list={characters} />
      <DetailList label='Planets' list={planets} />
      <DetailList label='Species' list={species} />
      <DetailList label='Starships' list={starships} />
      <DetailList label='Vehicles' list={vehicles} />
    </Wrapper>
  );

Detail.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
  description: PropTypes.string,
  characters: PropTypes.array,
  planets: PropTypes.array,
  species: PropTypes.array,
  starships: PropTypes.array,
  vehicles: PropTypes.array,
};

export default Detail;
