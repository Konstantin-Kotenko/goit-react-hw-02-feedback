import styled from 'styled-components';

export const UserProfile = styled.div`
  margin: 0 auto;
  width: 300px;
  box-shadow: 0px 0px 10px -1px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  margin-top: ${({ theme }) => theme.space[4]}px;
`;

export const UserInfo = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserImg = styled.img`
  display: block;
  border-radius: ${({ theme }) => theme.radii.round};
  width: 150px;
  padding: ${({ theme }) => theme.space[5]}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: ${({ theme }) => theme.space[2]}px;
  margin-bottom: ${({ theme }) => theme.space[0]};
`;

export const Tag = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin-top: ${({ theme }) => theme.space[2]}px;
  margin-bottom: ${({ theme }) => theme.space[0]};
  color: ${({ theme }) => theme.colors.primary};
`;
export const Location = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin-top: ${({ theme }) => theme.space[2]}px;
  margin-bottom: ${({ theme }) => theme.space[0]};
  color: ${({ theme }) => theme.colors.primary};
`;
export const StatsList = styled.ul`
  width: 300px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const StatsItem = styled.li`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => theme.borders.normal};
  padding: ${({ theme }) => theme.space.s} 0;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const StatsNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.black};
`;
export const StatsLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.black};
`;
