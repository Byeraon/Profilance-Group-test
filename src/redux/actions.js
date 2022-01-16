export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export const SET_NEWS = "SET_NEWS";
export const SET_NUMBER = "SET_NUMBER";

export const ACCEPT_NEW = "ACCEPT_NEW";
export const REJECT_NEW = "REJJECT_NEW";

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};

export const acceptNew = (id) => {
  return {
    type: ACCEPT_NEW,
    payload: id,
  };
};

export const rejectNew = (id) => {
  return {
    type: REJECT_NEW,
    payload: id,
  };
};

export const setUser = (state) => {
  return {
    type: SET_USER,
    payload: state,
  };
};

export const setNews = (state) => {
  return {
    type: SET_NEWS,
    payload: state,
  };
};
