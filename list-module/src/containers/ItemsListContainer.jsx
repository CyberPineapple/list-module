import React, { Component } from "react";
import { connect } from "react-redux";
import ItemsList from "../components/ItemsList/";
import { removeItemAction, changeItemValueAction } from "../actions/";
export class ItemsListContainer extends Component {
  render() {
    return <ItemsList {...this.props} />;
  }
}

export default connect(
  state => ({
    itemsList: state.itemsList,
    filter: state.filter
  }),
  {
    onRemoveItem: removeItemAction,
    onChangeItemValue: changeItemValueAction
  }
)(ItemsListContainer);
