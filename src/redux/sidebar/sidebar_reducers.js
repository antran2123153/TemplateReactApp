import {
  OPEN_SIDE_CONTACT,
  CLOSE_SIDE_CONTACT,
  TOGGLE_SIDE_CONTACT,
  TOGGLE_SIDE_BAR,
  CLOSE_SIDEBAR,
} from "./sidebar_types";

const initialState = {
  sidecontactOpen: false,
  sidebarOpen: false,
};

const sidebarReducer = (state = initialState, { type }) => {
  switch (type) {
    case OPEN_SIDE_CONTACT:
      return {
        ...state,
        sidecontactOpen: true,
      };

    case CLOSE_SIDE_CONTACT:
      return {
        ...state,
        sidecontactOpen: false,
      };

    case TOGGLE_SIDE_CONTACT:
      return {
        ...state,
        sidecontactOpen: !state.sidecontactOpen,
      };

    case TOGGLE_SIDE_BAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };

    case CLOSE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: false,
      };

    default:
      return state;
  }
};

export default sidebarReducer;
