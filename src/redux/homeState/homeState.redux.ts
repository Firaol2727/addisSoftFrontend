import {ACTIONS} from '../constant.ts'
export const openEditDialogue=()=>{
    return {
        type:ACTIONS.OPEN_EDIT_DIALOGUE
    }
}
export const openDelete=(opendelete:boolean)=>{
    return {
        type:ACTIONS.OPEN_DELETE_DIALOGUE,
        opendelete:opendelete
    }
}
export const openEditReducer=(initialstate=false,action):boolean=>{
    console.log("open edit data ",initialstate)
    console.log("Action is ",action)
    if (action.type==ACTIONS.OPEN_EDIT_DIALOGUE) {
        initialstate=!initialstate;
        return initialstate;
    }
    return initialstate;
}
export const openDeleteReducer=(data):boolean=>{
    console.log("open delete data ",data)
    return true;
}