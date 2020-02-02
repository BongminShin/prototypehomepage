import { WRITERS, BOARDCONTEXTS, COMPONENTSSUBMENU } from "./dataTypes";

export const initialData = {
    boardData:{
        [BOARDCONTEXTS]:[
            { id: 1, name: "Trail Shoes", category: "Running", price: 100 },
            { id: 2, name: "Thermal Hat", category: "Running", price: 12 },
            { id: 3, name: "Heated Gloves", category: "Running", price: 82.50 }
        ],
        [WRITERS]:[
            { id: 1, name: "Ben", city: "London", products:[1] },
            { id: 2, name: "Joey", city: "New York", products:[2, 3] }
        ]        
    },
    stateData: {
        editing: false,
        selectedId: -1,
        selectedType:BOARDCONTEXTS
    },
    menuData:{ 
        [COMPONENTSSUBMENU]:[
                { id: "1", name: "user#1" },
                { id: "2", name: "user#2" },
                { id: "3", name: "user#3" }
            ]
    }
}