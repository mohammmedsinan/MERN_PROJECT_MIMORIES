//action Types constant
import { DELETE, FETCH_ALL, LIKE, UPDATE, CREATE } from '../constant/actioTypes';

const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => (action.payload._id ? post._id !== action.payload : post));
    default:
      return posts;
  }
};
export default reducer;
