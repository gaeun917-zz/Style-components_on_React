import React from 'react';
import PropTypes from 'prop-types';
import style from './hello-world.css';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const HelloWorld = ({ title }) => (
  <Title className={style.helloWorld}>{title}</Title>
);








HelloWorld.propTypes = {
  title: PropTypes.string,
};
export default HelloWorld;
