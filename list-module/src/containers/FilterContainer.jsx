import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from "../components/Filter/";
import { changeFilterAction } from "../actions";

export class FilterContainer extends Component {
  render() {
    return <Filter {...this.props} />;
  }
}

export default connect(
  state => ({
    filter: state.filter
  }),
  {
    onChangeFilter: changeFilterAction
  }
)(FilterContainer);
