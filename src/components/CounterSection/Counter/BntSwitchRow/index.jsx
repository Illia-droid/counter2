import React, { Component } from "react";
import PropTypes from "prop-types";
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
BntSwitchRow.propTypes = {
  handleSwitchRow: PropTypes.func.isRequired,
};
BntSwitchRow.defaultProps = {
  handleSwitchRow: () => {},
};
export default BntSwitchRow;
