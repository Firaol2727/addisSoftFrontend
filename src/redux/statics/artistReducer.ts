import { ACTIONS, SET_ACTIONS } from "../constant.ts";
import {ArtistStatics} from '../../models/statics/artistStatics.ts' 
export type ArtistStatType={
    artistStats:ArtistStatics[];
    isloading:boolean
}
export const getArtistStaticsReducer=(state:ArtistStatType={
    artistStats:[],
  isloading:true
},action:any):ArtistStatType=>{

    switch (action.type) {
        case SET_ACTIONS.SET_ARTIST_STATICS:
          return {
            ...state,
            artistStats: action.data.data,
            isloading: action.data.isloading,
          };
        default :
          return state;
      }

}
export const getArtistStatics=()=>{
    return (
        {
            type:ACTIONS.GET_ARTIST_STATICS,
        }
    )
}