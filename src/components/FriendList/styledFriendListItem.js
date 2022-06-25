import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  flex-wrap: nowrap;
  justify-content: start;

  align-items: center;
  gap: 16px;
  min-width: 320px;
  padding: 16px;
  color: (--dark-text-color);
  background-color: var(--light-back-color);
  box-shadow: 2px 2px 3px 2px rgba(74, 95, 140, 0.35); ;
`;

export const OnlineIndicator = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => (props.isonline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 5px;
  object-fit: cover;
`;

export const NameField = styled.p`
  color: (--dark-text-color);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
`;
