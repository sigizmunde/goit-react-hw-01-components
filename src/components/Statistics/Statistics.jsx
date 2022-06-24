import PropTypes from 'prop-types';

import {
  Section,
  Title,
  StatList,
  StatItem,
  getRandomHexColor,
} from './styledStatistics';

export const Statistics = ({ title = null, stats }) => {
  return (
    <Section className="statistics" as="section">
      {title && <Title className="title">{title}</Title>}

      <StatList className="stat-list">
        {stats.map(item => {
          return (
            <StatItem
              className="item"
              key={item.id}
              generatedColor={getRandomHexColor()}
            >
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage + '%'}</span>
            </StatItem>
          );
        })}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ),
};
