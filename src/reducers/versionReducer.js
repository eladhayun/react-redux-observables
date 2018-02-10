import { VERSION_REQUESTED, VERSION_RECEIVED } from '../actions';

const initialState = {
  version: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VERSION_REQUESTED:
      return { ...state, version: '' };
    case VERSION_RECEIVED:
      const version = action.version.value;
      return { ...state, version };
    default:
      return state;
  }
};
