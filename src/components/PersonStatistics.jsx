import PropTypes from 'prop-types';
import { StatisticParameter } from './StaticticParameter';

export const PersonStatistics = stats => {
  const { followers, views, likes } = stats;
  return (
    <ul class="stats">
      <StatisticParameter param="Followers" value={followers} />
      <StatisticParameter param="Views" value={views} />
      <StatisticParameter param="Likes" value={likes} />
    </ul>
  );
};

PersonStatistics.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
