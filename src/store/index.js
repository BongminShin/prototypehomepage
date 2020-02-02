import { createStore, combineReducers } from "redux";
import boardReducer from "./boardReducer";
import stateReducer from "./stateReducer";
import menuReducer from "./menuReducer";

export default createStore(combineReducers(
    { 
        boardData: boardReducer,
        stateData: stateReducer,
        menuData:  menuReducer
    }
));

export { saveBoardContext, saveWriter, deleteBoardContext, deleteWriter } from "./boardActionCreators";