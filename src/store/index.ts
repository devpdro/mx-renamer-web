import { createStore } from "redux";

import fileReducer from "./reducers/reducers";

const store = createStore(fileReducer);

export default store;
