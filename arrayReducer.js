export const arrayReducer = (state = [0, 0, 0, 99], action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.map((value, i) => {
        if (action.payload.index === i) {
          return (value += 1);
        }
        return value;
      });

      break;

    case "DECREMENT":
      return state.map((value, i) => {
        if (action.payload.index === i) {
          return (value += 1);
        }
        return value;
      });

      break;

    default:
      return state;
  }
};
