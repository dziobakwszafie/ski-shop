import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./SkisStuff/reducers/reducer";
import SkisStuff from "./SkisStuff/SkisStuff";

const store = createStore(allReducers);

export default index;
