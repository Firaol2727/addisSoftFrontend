import { SongType } from "../../models/song.ts"
import { ACTIONS } from "../constant.ts"
export const getSongs=()=>{
    return (
        {
            type:ACTIONS.GET_SONGS,
        }
    )
}
export const deleteSong=(song_id:String)=>{
    return {
        type:ACTIONS.DELETE_SONG,
        data:song_id
    }
}
export const addSong=(song:SongType)=>{
    return {
        type:ACTIONS.ADD_SONG,
        data:song
    }
}
