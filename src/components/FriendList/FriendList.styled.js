import styled from 'styled-components';

export const List = styled.ul`
  width: 300px;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.space.ml};
  background-color: ${({ theme }) => theme.colors.white};
`;
