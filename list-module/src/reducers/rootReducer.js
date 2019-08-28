import { initialState } from "../store/initialState";
import {
  ADD_NEW_ITEM,
  REMOVE_ITEM,
  CHANGE_FILTER,
  EDIT_ITEM,
  CLEAR_STORE
} from "../constants/actionsType";

export const rootReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_NEW_ITEM: {
      const { itemsList } = state;
      const newItemList = [...itemsList, { fields: payload, id: Date.now() }];
      localStorage.setItem("itemsList", JSON.stringify(newItemList));
      return {
        ...state,
        itemsList: newItemList
      };
    }
    case REMOVE_ITEM: {
      const newItemList = state.itemsList.filter(value => {
        return value.id !== payload;
      });
      localStorage.setItem("itemsList", JSON.stringify(newItemList));
      return {
        ...state,
        itemsList: newItemList
      };
    }
    case CHANGE_FILTER: {
      return { ...state, filter: payload };
    }
    case EDIT_ITEM: {
      const newItemList = state.itemsList;
      for (let key in newItemList) {
        if (newItemList[key].id === payload.id) {
          newItemList[key].fields = payload.value;
        }
      }
      localStorage.setItem("itemsList", JSON.stringify(newItemList));
      return {
        ...state,
        itemsList: newItemList
      };
    }
    case CLEAR_STORE: {
      localStorage.clear();
      return initialState;
    }
    default:
      return state;
  }
};
