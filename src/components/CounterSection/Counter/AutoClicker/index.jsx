import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./AutoClicker.module.css";

class AutoClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStopWatch: 0,
      leftWorkAutocliker: 30,
    };
    this.autoClickerInterval = null;
  }
  changeTimerIndicators = () => {
    this.setState((state) => ({
      timerStopWatch: state.timerStopWatch + 1,
      leftWorkAutocliker: state.leftWorkAutocliker - 1,
    }));
  };

  autoClicker = () => {
    const { handleSwitchIsAutoClicking } = this.props;
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
      }, 1000);
    }
  };

  componentDidMount() {
    this.autoClicker();
  }
  componentWillUnmount() {
    this.autoClicker();
  }
  render() {
    const { timerStopWatch, leftWorkAutocliker } = this.state;
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
