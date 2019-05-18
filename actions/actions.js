import axios from 'axios';
export const GET_CARS = "GET_CARS";
export const ADD_CARS = "ADD_CARS"

const URL = 'https://ammon-fakey.herokuapp.com/cars';

export const getCars = () => {
  return dispatch =>{
    return axios
    .get(URL)
    .then(response => {
      dispatch(getCarsSuccess(response.data))
    })
    .catch(err => {throw err})
  }
}

export const getCarsSuccess = cars => (
  {
    type: GET_CARS,
    cars
  }
)

export const addCars = (make,model) => {
  return dispatch =>{
    return axios
    .post(URL, {make,model})
    .then(response => {
      dispatch(addCarsSuccess(response.data))
    })
    .catch(err => {throw err})
  }
}

export const addCarsSuccess = car => (
  {
    type: ADD_CARS,
    car
  }
)