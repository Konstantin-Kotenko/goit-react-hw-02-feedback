import styled from 'styled-components';

export const Friend = styled.li`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: ${({ theme }) => theme.space.m};
  padding: ${({ theme }) => theme.space.m};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.border};
  box-shadow: 0 0 10px -1px;
  border-radius: ${({ theme }) => theme.radii.normal};
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: ${({ theme }) => theme.radii.round};
  margin-left: ${({ theme }) => theme.space.m};
  display: inline-block;
  background-color: ${({ theme, isOnline }) =>
    isOnline ? theme.colors.green : theme.colors.red};
`;
export const Avatar = styled.img`
  padding: ${({ theme }) => theme.space.m};
  width: 48px;
`;
export const FriendName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.ml};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;
