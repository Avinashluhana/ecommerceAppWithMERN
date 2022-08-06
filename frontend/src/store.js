import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./Redux/reducer/productReducer";

const reducer = combineReducers({
  products: productReducer,
});

const initialSate = {};

// const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;


const store = createStore(
  reducer,
  initialSate,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
