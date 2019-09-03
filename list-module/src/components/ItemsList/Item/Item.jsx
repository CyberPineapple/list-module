import React, { PureComponent, Fragment } from "react";
import styles from "./Item.module.css";
import PropTypes from "prop-types";

export default class Item extends PureComponent {
  state = {
    isEdit: false,
    fields: this.props.value
  };

  isEmptyFields = () => {
    const { fields } = this.state;
    const fieldValues = Object.values(fields);
    for (let key in fieldValues) {
      if (fieldValues[key].value === "") return true;
    }
    return false;
  };

  handleClickEditButton = () => {
    this.setState({
      isEdit: true
    });
  };

  handleClickDeleteButton = () => {
    const { onRemoveItem, id } = this.props;
    onRemoveItem(id);
  };

  handleClickSaveButton = () => {
    const { onChangeItemValue, id } = this.props;
    const { fields } = this.state;
    if (this.isEmptyFields()) {
      return;
    } else {
      onChangeItemValue({ ...fields }, id);
      this.setState({
        isEdit: false
      });
    }
  };

  handleChange = ({ target: { name, value } }) => {
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

  render() {
    const { isEdit, fields } = this.state;
    return (
      <div className={styles.block}>
        {!isEdit && (
          <Fragment>
            <div className={styles.textBlock}>
              {Object.values(fields).map(value => (
                <p key={value.name} className={styles[value.name]}>
                  {value.value}
                </p>
              ))}
            </div>
            <button
              className={styles.button}
              onClick={this.handleClickEditButton}
            >
              Изменить
            </button>
          </Fragment>
        )}
        {isEdit && (
          <Fragment>
            <div className={styles.inputBlock}>
              {Object.values(fields).map(value => (
                <input
                  type="text"
                  value={value.value}
                  placeholder={value.title}
                  className={styles.input}
                  onChange={this.handleChange}
                  name={value.name}
                  key={value.name}
                />
              ))}
            </div>
            <button
              onClick={this.handleClickSaveButton}
              className={styles.button}
            >
              Сохранить
            </button>
          </Fragment>
        )}
        <button
          className={styles.button}
          onClick={this.handleClickDeleteButton}
        >
          Удалить
        </button>
      </div>
    );
  }
}

Item.propTypes = {
  value: PropTypes.object,
  onChangeItemValue: PropTypes.func,
  onRemoveItem: PropTypes.func,
  id: PropTypes.number
};
