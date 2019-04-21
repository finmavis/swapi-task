// Dependencies core
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import { ReactComponent as BackLogo } from '../shared/assets/icon/back.svg';

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: #fff;
  margin-bottom: 3rem;
  text-align: center;
`;

const Back = styled.div`
  align-self: flex-start;
  margin-bottom: 1.5rem;

  a {
    font-family: inherit;
    font-size: 1.6rem;
    color: #9d9d9d;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  svg {
    fill: #9d9d9d;
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const Title = styled.h2`
  font-family: 'Star Jedi', 'Open Sans', sans-serif;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
`;

const Team = styled.p`
  font-family: inherit;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const DetailHeader = ({ title, director, producer }) => (
  <Header>
    <Back>
      <Link to='/'>
        <BackLogo />
        &ensp;Back to list
      </Link>
    </Back>
    <Title>{title}</Title>
    <Team>Director : {director}</Team>
    <Team>Producer : {producer}</Team>
  </Header>
);

DetailHeader.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
};

export default DetailHeader;
