import { ACTIONS, SET_ACTIONS } from "../constant.ts";
import { SongType } from "../../models/song.ts";

export type SongRequestType={
  data:SongType[],
  errors:string,
  isLoading:boolean
}
let initialState={
    data:[],
    errors:'',
    isLoading:true
}
export const getsongReducer=(state:SongRequestType=initialState,action:any):SongRequestType=>{
    switch (action.type) {
        case SET_ACTIONS.SET_SONG:
          return {
            ...state,
            data: action.data.data,
            errors: action.data.errors,
            isLoading: action.data.isLoading,
          };
        case SET_ACTIONS.SET_DELETE_SONG:
          if(!action.data.errors){
              let filtered_items:SongType[] =state.data.filter((songs:SongType)=>songs._id !== action.data.data);
              console.log("filtered items",filtered_items)
            return {
              ...state,
              data:filtered_items
            }
          }
          else{
            return {
              ...state,
            }
          }
        case SET_ACTIONS.SET_ADD_SONG:
          if(!action.data.errors){
              if (action.data.data) {
                let song:SongType={
                  _id: action.data.data._id,
                  title: action.data.data.title,
                  artist: action.data.data.artist,
                  album: action.data.data.album,
                  genre: action.data.data.genre,
                  __v: 0
                }
                state.data.push(song);
              }
              let filtered_items:SongType[] =state.data
              console.log("filtered items",filtered_items)
            return {
              ...state,
              data:filtered_items
            }
          }
          else{
            return {
              ...state,
            }
          }
        default:
          return state;
      }
}


export type deleteSongLoadingType={
  errors:string;
  isLoading:boolean;
}
