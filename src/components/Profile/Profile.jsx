import PropTypes from 'prop-types';
import {
  UserProfile,
  UserInfo,
  UserImg,
  UserName,
  Tag,
  Location,
  StatsList,
  StatsItem,
  StatsNumber,
  StatsLabel,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <UserInfo>
        <UserImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </UserInfo>
      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsNumber>{stats.followers}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsNumber>{stats.views}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsNumber>{stats.likes}</StatsNumber>
        </StatsItem>
      </StatsList>
    </UserProfile>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
