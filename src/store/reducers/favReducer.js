import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITE:
      const checkExisting = state.favorites.find(
        (item) => action.payload.id === item.id
      );
      if (checkExisting) {
        return state;
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default favReducer;
