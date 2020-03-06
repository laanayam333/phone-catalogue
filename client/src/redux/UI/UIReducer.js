import { TOGGLE_DRAWER } from './UITypes';

const initialState = {
  drawerIsOpen: false
};

const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerIsOpen: !state.drawerIsOpen
      };

    default:
      return state;
  }
};

export default UIReducer;
