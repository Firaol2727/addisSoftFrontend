import { ACTIONS, SET_ACTIONS } from "../constant.ts";
import {GenreStatics} from '../../models/statics/genreStatics.ts' 
export type GenreStatType={
    genreStats:GenreStatics[];
    isloading:boolean
}
export const getGenreStaticsReducer=(state:GenreStatType={
    genreStats:[],
    isloading:true
},action:any):GenreStatType=>{
    switch (action.type) {
        case SET_ACTIONS.SET_GENRE_STATICS:
          return {
            ...state,
            genreStats: action.data.data,
            isloading: action.data.isloading,
          };
        default :
          return state;
      }
}
export const getGenreStatics=()=>{
    return (
        {
            type:ACTIONS.GET_GENRE_STATICS,
        }
    )
}