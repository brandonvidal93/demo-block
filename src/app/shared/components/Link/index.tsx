import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: #4B6154;
  &:hover {
    color: #2E6144;
  }
`;
