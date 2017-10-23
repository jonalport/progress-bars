import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bar.css';

/**
 * Functional component rendering a progress bar
 */
const Bar = ({ percent }) => {
  let progressClasses = styles.progress;

  // Add an extra class to the progress bar to indicate progress over 100%
  if (percent > 100) {
    progressClasses = `${progressClasses} ${styles.overOneHundred}`;
  }

  // String representation of % width, not exceeding 100%
  const width = `${Math.min(percent, 100)}%`;

  return (
    <div
      className={styles.component}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div className={progressClasses} style={{ width }} />
      <div className={styles.label}>{percent}%</div>
    </div>
  );
};

Bar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default Bar;
