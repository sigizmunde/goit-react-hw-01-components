import PropTypes from 'prop-types';

export const StatisticParameter = ({ param, value }) => {
  return (
    <li>
      <span class="label">{param}</span>
      <span class="quantity">{value}</span>
    </li>
  );
};

StatisticParameter.propTypes = {
  param: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
