
import {takeEvery,put, call} from 'redux-saga/effects';
import {ACTIONS,SET_ACTIONS} from '../constant.ts';
import axios from 'axios';
import BASE_API from '../../constants/API.constant.ts';
function* getAlbumsSaga(action){
    let albums=[];
    let error_album='';
    let isLoadingAlbum:boolean=true;
    console.log("Album Saga is called called !")
    yield put({ type: SET_ACTIONS.SET_ALBUMS, data: { albums, error_album, isLoadingAlbum} });
    try {
        let response=yield call(axios.get, BASE_API+'/song/getArtistsAlbums?limit=4');
        albums=response.data ;
        isLoadingAlbum=false;
        yield put({
            type:SET_ACTIONS.SET_ALBUMS,
            data:{
                albums,
                error_album,
                isLoadingAlbum
            }
        });
    } catch (error) {
        error_album=error
        isLoadingAlbum=false;
        yield put({
            type:SET_ACTIONS.SET_ALBUMS,
            data:{
                albums,
                error_album,
                isLoadingAlbum
            }
        });
    }

}

export default getAlbumsSaga;