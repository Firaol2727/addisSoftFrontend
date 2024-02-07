
import {takeEvery,put, call,all} from 'redux-saga/effects';
import {ACTIONS} from './constant.ts'
import axios from 'axios';
import songsSaga from './song/song.saga.ts';
import getAlbumsSaga from './album/album.saga.ts';
import getNoOfAlbumsArtistsSongsGenres from './noSong/noSong.saga.ts';
import getStaticsSaga from './statics/statics.saga.ts';
import editSongSaga from './edit/editSong.saga.ts';
function* rootSaga() {
    yield all [
        yield takeEvery(ACTIONS.GET_ALBUMS,getAlbumsSaga),
        yield takeEvery(
            [
                ACTIONS.GET_SONGS,
                ACTIONS.DELETE_SONG,
                ACTIONS.ADD_SONG,
            ],
            songsSaga),
        yield takeEvery(
            [
                ACTIONS.GET_NO_OF_ALBUMS,
                ACTIONS.GET_NO_OF_SONGS,
                ACTIONS.GET_NO_OF_ARTISTS,
                ACTIONS.GET_NO_OF_GENRES
            ],getNoOfAlbumsArtistsSongsGenres),
        yield takeEvery(
            [
                ACTIONS.GET_ALBUM_STATICS,
                ACTIONS.GET_ARTIST_STATICS,
                ACTIONS.GET_GENRE_STATICS,
            ],getStaticsSaga),
        yield takeEvery(
            [
                ACTIONS.UPDATE_SONG,
                ACTIONS.FETCH_SONG,
            ],editSongSaga)
    ]
}
export default rootSaga;