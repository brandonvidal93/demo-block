import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonNav = styled.button`
  background: #B1E6C8;
  border: 0px;
  border-radius: 3px;
  width: 20px;
  padding: 0.1rem;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background: #69E09D;
  }
`;