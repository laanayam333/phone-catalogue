import { OPEN_DRAWER } from './UITypes';

const initialState = {
  showDrawer: false
};

const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        showDrawer: true
      };

    default:
      return state;
  }
};

export default UIReducer;
