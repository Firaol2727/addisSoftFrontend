
import { SongType } from "../../models/song.ts";
import { ACTIONS, SET_ACTIONS } from "../constant.ts";
export type fetchSongRequestType={
  song:SongType|null
  errors:string,
  isLoading:boolean
}
export type updateSongRequestType={
  status:number
  errors:string,
  isLoading:boolean
}
export const updateSong=(song_id:string,query:{})=>{
    return ({
        type:ACTIONS.UPDATE_SONG,
        data:{
            song_id,
            query:query
        }
    })
}

export const fetchSong=(song_id:string)=>{
  return (
    {type:ACTIONS.FETCH_SONG,
    data:{
        song_id
    }}
  )
}


export const updateSongReducer=(state:updateSongRequestType={status:0,errors:"",isLoading:false},action:any):
updateSongRequestType=>{
  console.log("state",state)
  switch (action.type) {
    case SET_ACTIONS.SET_UPDATE_SONG:
      return ({
        ...state,
        status:action.data.status,
        errors: action.data.errors,
        isLoading: action.data.isLoading,
      });
    default:
      return state;
  }
}
export const fetchSongReducer=(state:fetchSongRequestType={song:null,errors:"",isLoading:true},action:any):fetchSongRequestType=>{
  console.log("state",state)
  switch (action.type) {
    case SET_ACTIONS.SET_FETCH_SONG:
      return ({
        ...state,
        song: action.data.song,
        errors: action.data.errors,
        isLoading: action.data.isLoading,
      });
    default:
      return state;
  }
}
