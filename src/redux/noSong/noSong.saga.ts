
import {takeEvery,put, call} from 'redux-saga/effects';
import {ACTIONS,SET_ACTIONS} from '../constant.ts';
import axios from 'axios';
import BASE_API from '../../constants/API.constant.ts';
function* getNoOfAlbumsArtistsSongsGenresSaga(action){
    let state ={
        data:0,
        isloading:true
        }
        console.log("action in no of albums Artists Genres",action)
    // yield put({ type: SET_ACTIONS.SET_SONG, data: { data, errors, isloadingAlbum: true } });
    if (action.type==ACTIONS.GET_NO_OF_ALBUMS) {
        
        try {
            yield put({
                type:SET_ACTIONS.SET_NO_OF_ALBUMS,
                data:{
                    data:0,
                    isloading:false
                }
            });
            let response=yield call(axios.get, BASE_API+'/analytics/countNoOfAlbums');
            console.log("response  data",response);
            let data=response.data ;
            yield put({
                type:SET_ACTIONS.SET_NO_OF_ALBUMS,
                data:{
                    data:data,
                    isloading:false
                }
            });
        } catch (error) {
            yield put({
                type:SET_ACTIONS.SET_NO_OF_ALBUMS,
                data:{
                    data:0,
                    isloading:false
                }
            });
        }
    }
    else if (action.type==ACTIONS.GET_NO_OF_SONGS) {
        yield put({
            type:SET_ACTIONS.SET_NO_OF_SONGS,
            data:{
                data:0,
                isloading:false
            }
        });
        try {
            let response=yield call(axios.get, BASE_API+'/analytics/countNoOfSongs');
            console.log("response  data",response);
            let data=response.data ;
            yield put({
                type:SET_ACTIONS.SET_NO_OF_SONGS,
                data:{
                    data,
                    isloading:false
                }
            });
        } catch (error) {
            yield put({
                type:SET_ACTIONS.SET_ALBUMS,
                data:{
                    ...state,
                    isloading:false
                }
            });
        }
    }
    else if (action.type==ACTIONS.GET_NO_OF_ARTISTS) {
        yield put({
            type:SET_ACTIONS.SET_NO_OF_ARTISTS,
            data:{
                data:0,
                isloading:false
            }
        });
        try {
            let response=yield call(axios.get, BASE_API+'/analytics/countNoOfArtist');
            console.log("response  data",response);
            let data=response.data ;
            yield put({
                type:SET_ACTIONS.SET_NO_OF_ARTISTS,
                data:{
                    data,
                    isloading:false
                }
            });
        } catch (error) {
            yield put({
                type:SET_ACTIONS.SET_ALBUMS,
                data:{
                    ...state,
                    isloading:false
                }
            });
        }
    }
    else if (action.type==ACTIONS.GET_NO_OF_GENRES)  {
        yield put({
            type:SET_ACTIONS.SET_NO_OF_GENRES,
            data:{
                data:0,
                isloading:false
            }
        });
        try {
            let response=yield call(axios.get, BASE_API+'/analytics/countNoOfGenres');
            console.log("response  data",response);
            let data=response.data ;
            yield put({
                type:SET_ACTIONS.SET_NO_OF_GENRES,
                data:{
                    data,
                    isloading:false
                }
            });
        } catch (error) {
            yield put({
                type:SET_ACTIONS.SET_ALBUMS,
                data:{
                    data:0,
                    isloading:false
                }
            });
        }
    }
    else {
        yield put ({
            type:SET_ACTIONS.SET_NO_OF_ALBUMS,
            data:state
        })
    }

}
export default getNoOfAlbumsArtistsSongsGenresSaga;