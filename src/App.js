import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bar from './components/Bar/Bar';
import Button from './components/Button/Button';
import styles from './App.css';

// This is the base component of our app
export default class App extends Component {
  // We inject the API as a prop so we can easily mock it
  static propTypes = {
    API: PropTypes.object.isRequired,
  };

  state = {
    bars: [],
    buttons: [],
    selectedBar: 0,
    hasLoaded: false,
  };

  /**
   * Fetch the data during willMount lifecycle hook
   */
  async componentWillMount() {
    const response = await this.props.API.getData();
    this.saveData(response);
  }

  // Returns the value of the currently selected progress bar
  getSelectedBarValue() {
    const { bars, selectedBar } = this.state;
    return bars[selectedBar];
  }

  // Sets the value of the currently selected progress bar
  setSelectedBarValue(value) {
    const { selectedBar } = this.state;
    const bars = [...this.state.bars];
    bars[selectedBar] = Math.max(value, 0);
    this.setState({ bars });
  }

  saveData(data) {
    this.setState({
      ...data,
      hasLoaded: true,
    });
  }

  // We save the selected bar to local state
  handleSelectChange = e => {
    const selectedBar = e.target.value;
    this.setState({ selectedBar });
  }

  // Return a new function with no arguments to handle the clicks
  handleButtonClick = difference =>
    () => {
      const newValue = this.getSelectedBarValue() + difference;
      this.setSelectedBarValue(newValue);
    }

  // Use array indices for keys as values never change
  render() {
    const { bars, buttons, selectedBar, hasLoaded } = this.state;

    return (
      <div className={styles.component}>
        <header className={styles.appHeader} role="banner">
          <h1 className={styles.pageTitle}>Playing with progress bars</h1>
          <div className={styles.subhead}>A react implementation</div>
        </header>
        {hasLoaded && (
          <main className={styles.main} role="main">
            <div className={styles.bars}>
              {bars.map((percent, i) => (
                <Bar key={i} percent={percent} />  // eslint-disable-line
              ))}
            </div>
            <div className={styles.controls}>
              <select
                className={styles.select}
                value={selectedBar}
                onChange={this.handleSelectChange}
              >
                {bars.map((percent, i) => (
                  <option key={i} value={i}>Bar {i + 1}</option>  // eslint-disable-line
                ))}
              </select>
              {buttons.sort((a, b) => a - b).map((value, i) => (
                <Button
                  key={i}  // eslint-disable-line
                  value={value}
                  barValue={this.getSelectedBarValue()}
                  clickHandler={this.handleButtonClick(value)}
                />
              ))}
            </div>
          </main>
        )}
      </div>
    );
  }
}
