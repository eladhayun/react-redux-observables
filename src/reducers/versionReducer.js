import { VERSION_REQUESTED, VERSION_RECEIVED } from '../actions';

const initialState = {
  version: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VERSION_REQUESTED:
      return { ...state };
    case VERSION_RECEIVED:
      return { ...state };
    default:
      return state;
  }
};
