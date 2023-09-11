import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.css";
import AutoClicker from "./AutoClicker";
import BntSwitchRow from "./BntSwitchRow";
class Counter extends Component {
  /**
   *
   * @param {number} step
   */
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true,
      isAutoClicking: false,
    };
  }

  handlerClick = () => {
    const { isAdd } = this.state;
    const { step } = this.props;

    this.setState((state) => ({
      count: isAdd ? state.count + Number(step) : state.count - Number(step),
    }));
  };

  handleSwitchRow = () => {
    this.setState((state) => ({
      isAdd: !state.isAdd,
    }));
  };
  handleSwitchIsAutoClicking = () => {
    const { isAutoClicking } = this.state;
    this.setState({
      isAutoClicking: !isAutoClicking,
    });
  };
  render() {
    const { count, isAdd, isAutoClicking } = this.state;
    const { step } = this.props;
    return (
      <section className={styles['counter-section']}>
        <h2 className={styles.count}>count: {count}</h2>
        <h2 className={styles.step}>step: {step}</h2>
        <button className={styles.button} onClick={this.handlerClick} disabled={isAutoClicking}>
          {isAdd ? "plus" : "minus"}
        </button>
        <BntSwitchRow handleSwitchRow={this.handleSwitchRow} />
        <AutoClicker
          handlerClick={this.handlerClick}
          handleSwitchIsAutoClicking={this.handleSwitchIsAutoClicking}
          isAutoClicking={isAutoClicking}
        />
      </section>
    );
  }
}

Counter.propTypes = {
  step: PropTypes.number.isRequired,
};
Counter.defaultProps = {
  step: 1,
};
export default Counter;
