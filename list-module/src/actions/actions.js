import {
  ADD_NEW_ITEM,
  REMOVE_ITEM,
  CHANGE_FILTER,
  EDIT_ITEM,
  CLEAR_STORE
} from "../constants/actionsType";

export const addNewItemAction = value => ({
  type: ADD_NEW_ITEM,
  payload: value
});

export const removeItemAction = value => ({
  type: REMOVE_ITEM,
  payload: value
});

export const changeFilterAction = value => ({
  type: CHANGE_FILTER,
  payload: value
});

export const changeItemValueAction = (value, id) => ({
  type: EDIT_ITEM,
  payload: {
    value,
    id
  }
});

export const clearStoreAction = () => ({
  type: CLEAR_STORE
});
