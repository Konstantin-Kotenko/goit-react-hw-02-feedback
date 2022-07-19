import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomColor';
import {
  StatisticsBox,
  Title,
  StatsticsList,
  StatisticsItem,
  StatisticsLabel,
  Percentage,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <StatisticsBox>
      <Title>Upload stats</Title>
      <StatsticsList>
        {stats.map(stat => (
          <StatisticsItem backgroundColor={getRandomHexColor()} key={stat.id}>
            <StatisticsLabel>{stat.label}</StatisticsLabel>
            <Percentage>{stat.percentage}%</Percentage>
          </StatisticsItem>
        ))}
      </StatsticsList>
    </StatisticsBox>
  );
};

Statistics.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
