import { INCREMENT, DECREMENT } from "../actions/actions";
import { FIRSTNAME, LASTNAME } from "../types/types";

const initialState = {
  counter: 0,
  founter: 0,
};

const initialName = {
  [FIRSTNAME]: "sundar",
  [LASTNAME]: "chauhan",
};

const initialNamee = {
  firstNamee: "sundar1",
  lastNamee: "chauhan1",
};

const initials = {
  name: '',
  address: '',
};

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1, founter: state.founter - 1 };
//     case "DECREMENT":
//       return { counter: state.counter - 1, founter: state.founter + 1 };
//     default:
//       return state;
//   }
// }

export const rootReducer1 = (state = initialName, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        [FIRSTNAME]: action.payload[FIRSTNAME],
        [LASTNAME]: action.payload[LASTNAME],
      };
    case DECREMENT:
      return {
        [FIRSTNAME]: action.payload[FIRSTNAME],
        [LASTNAME]: action.payload[LASTNAME],
      };
    default:
      return state;
  }
};

export const rootReducer2 = (state = initialNamee, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        firstNamee: action.payload.firstNamee,
        lastNamee: action.payload.lastNamee,
      };
    case DECREMENT:
      return {
        firstNamee: action.payload.firstNamee,
        lastNamee: action.payload.lastNamee,
      };
    default:
      return {
        firstNamee: "Sundar",
        lastNamee: "Pandit",
      };
  }
};

const initialArray = [
  { id: 1, name: "sundar" },
  { id: 2, name: "Abhi" },
  { id: 3, name: "sandeep" },
  { id: 4, name: "sandeep" },
  { id: 5, name: "sandeep" },
];

export const rootReducer3 = (state = initialArray, action) => {
  switch (action.type) {
    case "Add":
      state.id = state.length + 1;
      state.name = action.payload.name;
     // const state = [...state, { state.id, state.name }]
     // state.push([{state.id, state.name}])
     // return state;
      break
    case "increment":
      state[action.payload.index].id = 25;
      state[action.payload.index].name = action.payload.value;
     // return state;
      break
    case "decrement":
      state[action.payload.index].id = 25;
      state[action.payload.index].name = action.payload.value;
    //  return state;
      break
   // default:
     // return state;
  }
  return state;
};

export const rootReducer4 = (state = { name: 'Namo', address: 'Gujrat'}, action) => {
  switch (action.type) {
    case "increment":
      return (state = action.payload.name + action.payload.address);
    case "decrement":
      return (state = action.payload.name + action.payload.address);
    case "precrement":
      return (state = action.payload.name + action.payload.address);
   
  }

}

