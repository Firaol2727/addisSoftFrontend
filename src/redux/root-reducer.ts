import { combineReducers } from "@reduxjs/toolkit";
import {getsongReducer} from './song/song.reducer.ts';
import { getalbumReducer } from "./album/album.reducer.ts";
import { getNoAlbumsReducer,getNoArtistsReducer,getNoGenresReducer,getNoSongsReducer } from "./noSong/noSong.reducer.ts";
import { getalbumStaticsReducer } from "./statics/albumStatics.red.ts";
import {getArtistStaticsReducer} from './statics/artistReducer.ts'
import { getGenreStaticsReducer } from "./statics/genreStaticsRed.ts";
import { openEditReducer } from "./homeState/homeState.redux.ts";
import { fetchSongReducer, updateSongReducer} from "./edit/editSong.reducer.ts";
export default combineReducers({
    // HOME PAGE   
    getsongReducer,
    getalbumReducer,

    // STATIC PAGE 
    getNoAlbumsReducer,
    getNoArtistsReducer,
    getNoGenresReducer,
    getNoSongsReducer,

    getalbumStaticsReducer,
    getArtistStaticsReducer,
    getGenreStaticsReducer,
    //  edit Home Page 
    fetchSongReducer,
    updateSongReducer

})