import React, { Component } from "react";
import Counter from "./Counter";
import styles from "./CounterSection.module.css";
import AutoClicker from "./AutoClicker";

class CounterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      isAutoClicking: false,
      isAdd: true,
      count: 0,
    };
  }
  handlerClick = () => {
    const { isAdd, step } = this.state;

    this.setState((state) => ({
      count: isAdd ? state.count + Number(step) : state.count - Number(step),
    }));
  };
  handleSwitchRow = () => {
    this.setState((state) => ({
      isAdd: !state.isAdd,
    }));
  };

  handleChangeStep = ({ target: { value } }) => {
    const NumberValue = Number(value);
    this.setState((prevState) => ({
      step:
        NumberValue >= 1 && NumberValue <= 1000000
          ? NumberValue
          : prevState.step,
    }));
  };

  handleBlur = ({ target: { value } }) => {
    if (value === "") {
      this.setState({ step: 1 });
    }
  };

  render() {
    const { step, isAutoClicking, count, isAdd } = this.state;
    return (
      <div className={styles["counter-section-container"]}>
        <Counter
          step={step}
          count={count}
          isAdd={isAdd}
          handleChangeStep={this.handleChangeStep}
          handleBlur={this.handleBlur}
          isAutoClicking={isAutoClicking}
          handlerClick={this.handlerClick}
          handleSwitchRow={this.handleSwitchRow}
        />
        <AutoClicker
          isAutoClicking={isAutoClicking}
          handlerClick={this.handlerClick}
        />
      </div>
    );
  }
}

export default CounterSection;
