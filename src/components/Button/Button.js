import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

/**
 *  Export a functional stateless component
 *  Destructure the arguments for easy access
 *  Provide aria labels for screen readers
 */
const Button = ({ clickHandler, value, barValue }) => (
  <button
    onClick={clickHandler}
    className={styles.component}
    disabled={barValue === 0 && value < 0}
    aria-label={`Update selected bar by ${value}%`}
  >
    {value}
  </button>
);

Button.propTypes = {
  barValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
