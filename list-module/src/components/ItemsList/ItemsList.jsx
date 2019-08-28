import React from "react";
import Item from "./Item/";
import styles from "./ItemsList.module.css";
import PropTypes from "prop-types";

const ItemsList = ({ itemsList, onRemoveItem, onChangeItemValue, filter }) => {
  return (
    <div className={styles.block}>
      {itemsList.map(value =>
        isViewComponent(value, filter) ? (
          <Item
            key={value.id}
            value={value.fields}
            onRemoveItem={onRemoveItem}
            id={value.id}
            onChangeItemValue={onChangeItemValue}
          />
        ) : null
      )}
    </div>
  );
};

const isViewComponent = (componentsData, filter) => {
  let string = "";
  const fields = Object.values(componentsData.fields);
  for (let key in fields) {
    string += fields[key].value + " ";
  }
  const filterWords = filter.split(" ").filter(value => value !== "");
  for (let key in filterWords) {
    if (!string.includes(filterWords[key])) {
      return false;
    }
  }
  return true;
};
ItemsList.propTypes = {
  itemsList: PropTypes.array,
  onRemoveItem: PropTypes.func,
  filter: PropTypes.string,
  onChangeItemValue: PropTypes.func
};

export default ItemsList;
