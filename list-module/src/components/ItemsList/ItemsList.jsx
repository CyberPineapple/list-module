import React, { PureComponent } from "react";
import Item from "./Item/Item";
import styles from "./ItemsList.module.css";

export default class ItemsList extends PureComponent {
  isViewComponent = componentsData => {
    const { filter } = this.props;
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

  render() {
    const { itemsList, removeItem, changeItemValue } = this.props;
    return (
      <div className={styles.block}>
        {itemsList.map(value =>
          this.isViewComponent(value) ? (
            <Item
              key={value.id}
              value={value.fields}
              onRemoveItem={removeItem}
              id={value.id}
              onChangeItemValue={changeItemValue}
            />
          ) : null
        )}
      </div>
    );
  }
}
