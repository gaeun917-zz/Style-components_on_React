import React from 'react';
import PropTypes from 'prop-types';
import style from './hello-world.css';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  display: flex;
  align-content: center;
  justify-content: center;
  background: ${props => props.white ? "white" : "papayawhip"};
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &.purple{
      color: purple;
      border: 2px solid purple;
  }
`;
// inherit (Button) style + override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  :hover{
  color: palevioletred;
  }
`;

const ReversedButton = (props) => (
  // props.children: innerHTML
  <button {...props}
          children={props.children.split('').reverse()} />
)

const Link = ({ className, href, children }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;


const HelloWorld = ({ title }) => (
  <div>
    <Wrapper>
      <Title>{title}</Title>
      <Button>Normal</Button>
      <Button className='purple'>Purple</Button>
      <Button primary>Primary</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <Button as={ReversedButton}>Reversed</Button>
    </Wrapper>

    <Wrapper white>
      <StyledLink className='link' href='#'>Link</StyledLink>
      <Input defaultValue="@probablyup" type="text" />
      {/*inputColor which is not a standard attr, is not passed down to DOM*/}
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
    </Wrapper>
  </div>

);








HelloWorld.propTypes = {
  title: PropTypes.string,
};
export default HelloWorld;
