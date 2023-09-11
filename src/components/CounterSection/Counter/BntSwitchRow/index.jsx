import React, { Component } from "react";
import styles from "./BntSwitchRow.module.css";

class BntSwitchRow extends Component {
  render() {
    const { handleSwitchRow } = this.props;
    return (
      <button className={styles["button"]} onClick={handleSwitchRow}>
        switch row
      </button>
    );
  }
}

export default BntSwitchRow;
