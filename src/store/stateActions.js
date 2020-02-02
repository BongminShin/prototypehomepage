import { BOARDCONTEXTS, WRITERS } from "./dataTypes";

export const STATE_START_EDITING = "state_start_editing";
export const STATE_END_EDITING = "state_end_editing";
export const STATE_START_CREATING = "state_start_creating";

export const startEditingProduct = (product) => ({
    type:STATE_START_EDITING,
    dataTypes: BOARDCONTEXTS,
    payload: product
});

export const startEditingSupplier = (supplier) => ({
    type:STATE_START_EDITING,
    dataTypes: WRITERS,
    payload: supplier
});

export const endEditing = () => {
    console.log("endProduct")
    return { type:STATE_END_EDITING }
};

export const startCreatingProduct = () => ({
    type:STATE_START_CREATING,
    dataTypes: BOARDCONTEXTS
})

export const startCreatingSupplier = () => {
    console.log("come");
    return {
        type:STATE_START_CREATING,
        dataTypes: WRITERS
    }
}