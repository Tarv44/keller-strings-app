import React from 'react';
import styled from 'styled-components';

const SubmenuDropdown = (props) => {
  return (
    <Submenu>
      {props.selected.dropdown}
    </Submenu>
  );
};
export default SubmenuDropdown;

const Submenu = styled.div`
  display: flex;
  position: absolute;
  width: 76%;
  align-self: center;
  top: 100%;
  background: var(--color-grey-1);
  display: none;
  padding: 35px 50px;
  z-index: 98;
  text-align: left;
  @media screen and (min-width: 481px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1025px) {
    display: flex;
    width: 779px;
  }
  @media screen and (min-width: 1200px) {
    width: 912px;
  }
  @media screen and (min-width: 1440px) {
    width: 1100px;
  }
`