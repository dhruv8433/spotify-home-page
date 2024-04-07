const InitialState = {
  song: null,
};

export const setSong = "SET_SONG"

export const songReducer = (state = InitialState, action) => {
  switch (action.type) {
    case setSong:
      return {
        ...state,
        song: action.payload,
      };
    default:
      return state;
  }
};
