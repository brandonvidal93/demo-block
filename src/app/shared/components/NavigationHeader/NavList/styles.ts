import styled from 'styled-components';

export const NavListUl = styled.ul`
  display: flex;
`;

export const NavListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 3px solid #f8f9fa;
  border-bottom 3px solid #f8f9fa;
  transition: all 0.2s ease-out;

  &:hover {
    border-bottom: 3px solid #2E6144;
  }
`;

export default {};