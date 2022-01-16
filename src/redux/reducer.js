import { ACCEPT_NEW, REJECT_NEW, SET_USER } from "./actions";
import { CLEAR_USER } from "./actions";
import { SET_NEWS } from "./actions";

const userInitialState = false;

const systemInitialState = {
  new_current_id: 0,
  news: [],
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case CLEAR_USER:
      return false;
    default:
      return state;
  }
};

export const systemReducer = (state = systemInitialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: [...state.news, { ...action.payload, id: state.new_current_id }],
        new_current_id: state.new_current_id + 1,
      };
    case REJECT_NEW:
      return {
        ...state,
        news: state.news.filter((el) => el.id !== action.payload),
      };
    case ACCEPT_NEW:
      return {
        ...state,
        news: state.news.map((el) => {
          if (el.id === action.payload) {
            return { ...el, assigned: true, date: new Date() };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
};
