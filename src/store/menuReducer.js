import { SELECT_MENU_DATA } from "./menuActions"
import { initialData } from "./initialData";

export default function(storeData, action){
    console.log(action.type);
    switch(action.type){
        case SELECT_MENU_DATA:
            return initialData.menuData;
        default:
            return storeData || initialData.menuData;
    }
}