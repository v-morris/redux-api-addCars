import { GET_CARS, ADD_CARS } from '../actions/actions';

const initialState = {
  cars: [{
    "id": 1,
    "make": "Toyota",
    "model": "Yaris"
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        cars: action.cars
      }
      case ADD_CARS:
      return {
        ...state,
        cars:[...state.cars, action.car]
      }
    default:
      return state;
  }
}

export default reducer;