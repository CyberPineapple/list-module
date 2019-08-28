import React, { PureComponent } from "react";
import styles from "./Input.module.css";
import { inputFieldList } from "../../constants/InputFieldList";

export default class Input extends PureComponent {
  state = {
    fields: inputFieldList
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState(prev => ({
      fields: {
        ...prev.fields,
        [name]: {
          ...prev.fields[name],
          value: value.trimStart()
        }
      }
    }));
  };

  isEmptyFields = () => {
    const { fields } = this.state;
    const fieldValues = Object.values(fields);
    for (let key in fieldValues) {
      if (fieldValues[key].value === "") return true;
    }
    return false;
  };

  handleClick = () => {
    const { fields } = this.state;
    const { onAddNewItem } = this.props;
    if (this.isEmptyFields()) {
      return;
    } else {
      onAddNewItem({ ...fields });
      this.setState({
        fields: inputFieldList
      });
    }
  };

  render() {
    const { fields } = this.state;
    const { onClearStore } = this.props;
    return (
      <div className={styles.block}>
        {Object.values(fields).map(value => (
          <input
            key={value.name}
            type="text"
            value={value.value}
            onChange={this.handleChange}
            className={styles.input}
            placeholder={value.title}
            name={value.name}
          />
        ))}
        <button onClick={this.handleClick} className={styles.button}>
          Добавить
        </button>
        <button onClick={onClearStore} className={styles.button}>
          Очистить
        </button>
      </div>
    );
  }
}
