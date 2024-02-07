import { ACTIONS, SET_ACTIONS } from "../constant.ts";
export let initialState={
    albums:[],
    error_album:'',
    isLoadingAlbum:true
}
export const getalbumReducer=(state=initialState,action:any)=>{
    console.log("album reducer action ",action)
    switch (action.type) {
        case SET_ACTIONS.SET_ALBUMS:
          return {
            ...state,
            albums: action.data.albums,
            error_album: action.data.errors,
            isLoadingAlbum: action.data.isLoadingAlbum,
          };
        default:
          return state;
      }
}
export const getAlbums=()=>{
    return (
        {
            type:ACTIONS.GET_ALBUMS,
        }
    )
}