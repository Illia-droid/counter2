import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./AutoClicker.module.css";

class AutoClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStopWatch: 0,
      leftWorkAutocliker: 30,
      speedAutoClicker: 3,
    };
    this.autoClickerInterval = null;
  }
  handleChangeSpeed = ({ target: { value } }) => {
    const NumberSpeed = Number(value);
    this.setState({
      speedAutoClicker: NumberSpeed,
    });
  };

  handleBlur = ({ target: { value } }) => {
    if (value === "") {
      this.setState({
        speedAutoClicker: 1,
      });
    }
  };

  changeTimerIndicators = () => {
    this.setState((state) => ({
      timerStopWatch: state.timerStopWatch + 1,
      leftWorkAutocliker: state.leftWorkAutocliker - 1,
    }));
  };

  autoClicker = () => {
    const { handleSwitchIsAutoClicking } = this.props;
    const { speedAutoClicker } = this.state;
    if (this.autoClickerInterval === null) {
      this.setState({
        leftWorkAutocliker: 30,
      });
      handleSwitchIsAutoClicking();

      this.autoClickerInterval = setInterval(() => {
        const { leftWorkAutocliker } = this.state;
        const { handlerClick } = this.props;
        handlerClick();
        this.changeTimerIndicators();

        if (leftWorkAutocliker === 1) {
          clearInterval(this.autoClickerInterval);
          this.autoClickerInterval = null;
          handleSwitchIsAutoClicking();
        }
      }, 1000 / speedAutoClicker);
    }
  };

  componentDidMount() {
    this.autoClicker();
  }
  componentWillUnmount() {
    this.autoClicker();
  }
  render() {
    const { timerStopWatch, leftWorkAutocliker, speedAutoClicker } = this.state;
    const { isAutoClicking } = this.props;
    return (
      <section className={styles.container}>
        <h2 className={styles.timer}>timerStopWatch: {timerStopWatch}</h2>
        <h2 className={styles.leftSeconds}>
          leftSeconds: {leftWorkAutocliker}
        </h2>
        <button
          className={styles.button}
          onClick={this.autoClicker}
          disabled={isAutoClicking}
        >
          AutoClick
        </button>
        <input
          className={styles.input}
          type="range"
          min="1"
          max="100"
          value={speedAutoClicker}
          onChange={this.handleChangeSpeed}
          disabled={isAutoClicking}
        />
        <h2>X:{speedAutoClicker}</h2>
      </section>
    );
  }
}

AutoClicker.propTypes = {
  isAutoClicking: PropTypes.bool.isRequired,
};
AutoClicker.defaultProps = {
  isAutoClicking: false,
};
export default AutoClicker;
