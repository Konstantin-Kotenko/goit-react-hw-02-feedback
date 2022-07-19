import styled from 'styled-components';

export const TransactionsTable = styled.table`
  width: 768px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.space.ml};
  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: 0 0 10px -1px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`;
export const TableBody = styled.tbody`
  color: ${({ theme }) => theme.colors.text};
`;
export const TableRaw = styled.tr`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: ${({ theme }) => theme.borders.normal},
      ${({ theme }) => theme.colors.border};
  }
  &:nth-of-type(2n) {
    background-color: ${({ theme }) => theme.colors.background};
  }
  &:hover,
  &:nth-of-type(2n):hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
export const HeadCell = styled.th`
  padding: ${({ theme }) => theme.space.m};
  &:not(:last-child) {
    border-right: 1px solid #e4e4e4;
  }
`;
export const TableData = styled.td`
  padding: ${({ theme }) => theme.space.m};
  &:not(:last-child) {
    border-right: ${({ theme }) => theme.borders.normal},
      ${({ theme }) => theme.colors.muted};
  }
`;
