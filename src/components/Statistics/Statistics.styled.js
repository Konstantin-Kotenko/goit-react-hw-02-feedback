import styled from 'styled-components';

export const StatisticsBox = styled.section`
  width: 450px;
  box-shadow: 0 0 10px -1px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.space.ml};
  background-color: ${({ theme }) => theme.colors.white};
`;
export const Title = styled.h2`
  padding: ${({ theme }) => theme.space.l} 0;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;
export const StatsticsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StatisticsItem = styled.li`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  flex-basis: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.ml} 0;
  cursor: pointer;
  border-top: ${({ theme }) => theme.borders.normal},
    ${({ theme }) => theme.colors.muted};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ backgroundColor }) => {
    return backgroundColor;
  }};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  &:not(:last-child) {
    border-right: ${({ theme }) => theme.borders.normal},
      ${({ theme }) => theme.colors.muted};
  }
  &:hover {
    transform: scale(1.03);
  }
`;
export const StatisticsLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
export const Percentage = styled.span`
  margin-top: ${({ theme }) => theme.space.s};
  font-size: ${({ theme }) => theme.fontSizes.l};
`;
