import PropTypes from 'prop-types';
import { StatisticParameter } from './StaticticParameter';

export const PersonStatistics = stats => {
  return <ul class="stats">{stats.map(item => StatisticParameter(item))}</ul>;
};

PersonStatistics.propTypes = {
  stats: PropTypes.array.isRequired,
};
