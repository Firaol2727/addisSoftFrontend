import { ACTIONS, SET_ACTIONS } from "../constant.ts";
export type NoSongType={
    no:number;
    isloading:boolean
}
export const getNoSongsReducer=(state:NoSongType={
  no:0,
  isloading:true
},action:any):NoSongType=>{
  if (action.data) {
    switch (action.type) {
        case SET_ACTIONS.SET_NO_OF_SONGS:
          return {
            ...state,
            no: action.data.data,
            isloading: action.data.isloading,
          };
        default :
          return state;
      }
    }
  else{
    return state;
  }
}
export const getNoAlbumsReducer=(state={
  no:0,
  isloading:true
},action:any):NoSongType=>{
    switch (action.type) {
        case SET_ACTIONS.SET_NO_OF_ALBUMS:
          return {
            ...state,
            no: action.data.data,
            isloading: action.data.isloading,
          };
        default:
          return state;
      }
}
export const getNoArtistsReducer=(state={
  no:0,
  isloading:true
},action:any): NoSongType=>{
    switch (action.type) {
        case SET_ACTIONS.SET_NO_OF_ARTISTS:
          return {
            ...state,
            no: action.data.data,
            isloading: action.data.isloading,
          };
        default:
          return state;
      }
}
export const getNoGenresReducer=(state={
  no:0,
  isloading:true
},action:any):NoSongType=>{
  console.log("genres reducer ",action)
    switch (action.type) {
        case SET_ACTIONS.SET_NO_OF_GENRES:
          return {
            ...state,
            no: action.data.data,
            isloading: action.data.isloading,
          };
        default:
          return state;
      }
}
export const getNoSongs=()=>{
    console.log("Action get song ")
    return (
        {
            type:ACTIONS.GET_NO_OF_SONGS,
        }
    )
}
export const getNoAlbums=()=>{
    console.log("Action album")
    return (
        {
            type:ACTIONS.GET_NO_OF_ALBUMS,
        }
    )
}
export const getNoArtists=()=>{
    console.log("Action artist")
    return (
        {
            type:ACTIONS.GET_NO_OF_ARTISTS,
        }
    )
}
export const getNoGenres=()=>{
    console.log("Action genres")
    return (
        {
            type:ACTIONS.GET_NO_OF_GENRES,
        }
    )
}