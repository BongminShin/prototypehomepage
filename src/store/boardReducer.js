import { CREATE, UPDATE, DELETE } from "./boardActionTypes";
import { initialData } from "./initialData";

export default function(storeData, action){
    switch(action.type){
        case CREATE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].concat([action.payload])
            }
        case UPDATE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].map(p => p.id === action.payload.id ? action.payload: p)
            }
        case DELETE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].filter(p => p.id !== action.payload)
            }
        default:
            return storeData || initialData.boardData;
    }
}