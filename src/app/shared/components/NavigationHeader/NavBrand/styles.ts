import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BrandDiv = styled.div`
  padding: 5px;
  margin-right: 15px;
`;

export const LogoImg = styled.img`
  max-height: 50px;
  max-width: 150px;
`;

export const LogoSpan = styled.span`
  color: #2E6144;
  font-size: calc(18px + 1vmin);
  font-weight: bold;
`;

export const BrandLink = styled(Link)`
  text-decoration: none;
`;

export default {};
