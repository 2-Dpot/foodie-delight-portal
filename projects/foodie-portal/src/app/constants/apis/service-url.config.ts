export const serviceUrlConstants = {
  GET_RESTAURANTS: {
     url:"/restaurants",
     method:"GET"
  },
  GET_RESTAURANT_BY_ID: {
    url:"/restaurants/:id",
    method:"GET"
  },
  UPDATE_RESTAURANT: {
    url:"/restaurants/:id",
    method:"PUT"
  },
  DELETE_RESTAURANT: {
    url:"/restaurants/:id",
    method:"DELETE"
  },
  ADD_RESTAURANT: {
    url:"/restaurants",
    method:"POST"
  }
}