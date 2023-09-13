import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.css";
import BntSwitchRow from "./BntSwitchRow";
class Counter extends Component {
  render() {
    const {
      count,
      isAdd,
      step,
      handleChangeStep,
      handleBlur,
      handlerClick,
      handleSwitchRow,
    } = this.props;
    return (
      <section className={styles["counter-section"]}>
        <h2 className={styles.count}>count: {count}</h2>
        <h2 className={styles.step}>step: {step}</h2>
        <button className={styles.button} onClick={handlerClick}>
          {isAdd ? "plus" : "minus"}
        </button>
        <BntSwitchRow handleSwitchRow={handleSwitchRow} />
        <input
          className={styles.input}
          type="number"
          value={step}
          onChange={handleChangeStep}
          onBlur={handleBlur}
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
