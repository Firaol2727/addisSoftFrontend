import { ACTIONS, SET_ACTIONS } from "../constant.ts";
import {AlbumStatics} from '../../models/statics/albumStatics.ts' 
export type AlbumStatType={
    albumStats:AlbumStatics[];
    isloading:boolean
}
export const getalbumStaticsReducer=(state:AlbumStatType={
    albumStats:[],
  isloading:true
},action:any):AlbumStatType=>{
    switch (action.type) {
        case SET_ACTIONS.SET_ALBUM_STATICS:
          return {
            ...state,
            albumStats: action.data.data,
            isloading: action.data.isloading,
          };
        default :
          return state;
      }
}
export const getAlbumStatics=()=>{
    return (
        {
            type:ACTIONS.GET_ALBUM_STATICS,
        }
    )
}