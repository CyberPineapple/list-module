import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../components/Input/Input";
import { addNewItemAction, clearStoreAction } from "../actions/";

export class InputContainer extends Component {
  render() {
    return <Input {...this.props} />;
  }
}

export default connect(
  null,
  { onAddNewItem: addNewItemAction, onClearStore: clearStoreAction }
)(InputContainer);
