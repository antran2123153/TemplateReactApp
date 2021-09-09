import {
  OPEN_SIDE_CONTACT,
  CLOSE_SIDE_CONTACT,
  TOGGLE_SIDE_CONTACT,
  TOGGLE_SIDE_BAR,
  CLOSE_SIDEBAR,
} from "./sidebar_types";

export const openSideContact = () => {
  return { type: OPEN_SIDE_CONTACT };
};

export const closeSideContact = () => {
  return { type: CLOSE_SIDE_CONTACT };
};

export const toggleSideContact = () => {
  return { type: TOGGLE_SIDE_CONTACT };
};

export const toggleSidebar = () => {
  return { type: TOGGLE_SIDE_BAR };
};

export const closeSidebar = () => {
  return { type: CLOSE_SIDEBAR };
};
