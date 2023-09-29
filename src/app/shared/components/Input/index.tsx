import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid #51AD79;
  border-radius: 3px;
  margin-bottom: 1px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`;
