import React from "react";
import InputContainer from "./containers/InputContainer";
import FilterContainer from "./containers/FilterContainer";
import ItemsListContainer from "./containers/ItemsListContainer";

function App() {
  return (
    <div className="app">
      <InputContainer />
      <FilterContainer />
      <ItemsListContainer />
    </div>
  );
}

export default App;
