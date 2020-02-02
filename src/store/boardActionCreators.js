import { WRITERS, BOARDCONTEXTS } from "./dataTypes";
import { CREATE, UPDATE, DELETE } from './boardActionTypes';

let idCounter = 100;

export const saveBoardContext = (boardContext) => {
    console.log("saveProduct")
    return createSaveEvent(BOARDCONTEXTS, boardContext);
}

export const saveWriter = (writer) => {
    return createSaveEvent(WRITERS, writer);
}

const createSaveEvent = (dataType, payload) => {
    if(!payload.id){
        return {
            type: CREATE,
            dataType: dataType,
            payload: { ...payload, id: idCounter++ }
        }
    } else {
        return {
            type: UPDATE,
            dataType: dataType,
            payload: payload
        }
    }
}

export const deleteBoardContext = (boardContext) => {
   return {
       type: DELETE,
       dataType:BOARDCONTEXTS,
       payload:boardContext.id
   } 
}

export const deleteWriter = (writer) => {
    return {
        type:DELETE,
        dataType:WRITERS,
        payload: writer.id
    }
}