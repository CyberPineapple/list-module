export const initialState = {
  itemsList: JSON.parse(localStorage.getItem("itemsList")) || [],
  filter: ""
};
