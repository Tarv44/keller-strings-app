import styled from 'styled-components';

const Button = styled.button`
  background: var(--color-primary);
  border-radius: 5px;
  color: #ffffff;
  font-family: 'Libre Franklin';
  font-size: 18px;
  width: 240px;
  padding: 6px 0;
  text-align: center;
  display: block;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`

export default Button