import React, { PureComponent, Fragment } from "react";
import styles from "./Item.module.css";
import PropTypes from "prop-types";

export default class Item extends PureComponent {
  state = {
    isVisibleDeleteButton: false,
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

  handleDoubleClick = () => {
    this.setState({
      isEdit: true
    });
  };

  handleMouseOver = () => {
    this.setState({
      isVisibleDeleteButton: true
    });
  };

  handleMouseLeave = () => {
    this.setState({
      isVisibleDeleteButton: false
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
    const { isVisibleDeleteButton, isEdit, fields } = this.state;
    return (
      <div
        className={styles.block}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        onDoubleClick={this.handleDoubleClick}
      >
        {isVisibleDeleteButton && (
          <button
            className={styles.deleteButton}
            onClick={this.handleClickDeleteButton}
          ></button>
        )}
        {!isEdit &&
          Object.values(fields).map(value => (
            <p key={value.name} className={styles[value.name]}>
              {value.value}
            </p>
          ))}
        {isEdit && (
          <Fragment>
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
            <button
              onClick={this.handleClickSaveButton}
              className={styles.buttonSave}
            >
              Сохранить
            </button>
          </Fragment>
        )}
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
