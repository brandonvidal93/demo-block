import styled from 'styled-components';

export const Button = styled.button`
  background: #51AD79;
  border-radius: 3px;
  border: 0px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &[disabled] {
    opacity: 0.3;
  }
  
  &:hover {
    background: #2E6144;
  }
`;

export const ButtonDanger = styled.button`
  background: #dc3545;
  border-radius: 3px;
  border: 0px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &[disabled] {
    opacity: 0.3;
  }
  
  &:hover {
    background: #bb2d3b;
  }
`;
