import { TOGGLE_DRAWER } from './UITypes';

export function toggleDrawerCreator() {
  return {
    type: TOGGLE_DRAWER
  };
}

export const toggleDrawer = () => {
  return dispatch => {
    dispatch(toggleDrawerCreator());
  };
};
