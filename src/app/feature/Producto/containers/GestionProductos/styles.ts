import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;

  /* Media query para pantallas más pequeñas */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DivRow = styled.div`
  flex: 0 0 50%;
  width: 50%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  /* Media query para pantallas más pequeñas */
  @media (max-width: 768px) {
    flex: 0 0 100%;
    width: 100%;
  }
`;
