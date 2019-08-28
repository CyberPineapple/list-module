import React, { PureComponent } from "react";
import styles from "./Filter.module.css";

export default class Filter extends PureComponent {
  handleChange = ({ target: { value } }) => {
    const { onChangeFilter } = this.props;
    onChangeFilter(value);
  };

  render() {
    const { filter } = this.props;
    return (
      <input
        type="text"
        placeholder="Для поиска введите значение"
        onChange={this.handleChange}
        value={filter}
        className={styles.input}
      />
    );
  }
}
