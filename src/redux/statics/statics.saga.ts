
import {takeEvery,put, call} from 'redux-saga/effects';
import {ACTIONS,SET_ACTIONS} from '../constant.ts';
import axios from 'axios';
import BASE_API from '../../constants/API.constant.ts';
function* getStaticsSaga(action){
    let state ={
        data:[],
        isloading:true
        }
        console.log("action statics Artists Genres",action)
    
    if (action.type==ACTIONS.GET_ALBUM_STATICS) {
        
        try {
            yield put({
                type:SET_ACTIONS.SET_ALBUM_STATICS,
                data:state
            });
            let response=yield call(axios.get, BASE_API+'/analytics/countNoOfSongsInEachAlbum');
            console.log("response  data",response);
            let data=response.data ;
            yield put({
                type:SET_ACTIONS.SET_ALBUM_STATICS,
                data:{
                    data:data,
                    isloading:false
                }
            });
        } catch (error) {
            yield put({
                type:SET_ACTIONS.SET_ALBUM_STATICS,
                data:state
            });
        }
    }
    else if (action.type==ACTIONS.GET_ARTIST_STATICS) {
        yield put({
            type:SET_ACTIONS.SET_ARTIST_STATICS,
            data:state
        });
        try {
            let response=yield call(axios.get, BASE_API+'/analytics/countNoOfSongsAndAlbumsOfEachArtist');
            console.log("response  data",response);
            let data=response.data ;
            yield put({
                type:SET_ACTIONS.SET_ARTIST_STATICS,
                data:{
                    data,
                    isloading:false
                }
            });
        } catch (error) {
            yield put({
                type:SET_ACTIONS.SET_ARTIST_STATICS,
                data:{
                    ...state,
                    isloading:false
                }
            });
        }
    }
    else if (action.type==ACTIONS.GET_GENRE_STATICS) {
        yield put({
            type:SET_ACTIONS.SET_GENRE_STATICS,
            data:{
                data:[],
                isloading:false
            }
        });
        try {
            let response=yield call(axios.get, BASE_API+'/analytics/countNoOfSongsInEveryGenre');
            console.log("response  data",response);
            let data=response.data ;
            yield put({
                type:SET_ACTIONS.SET_GENRE_STATICS,
                data:{
                    data,
                    isloading:false
                }
            });
        } catch (error) {
            yield put({
                type:SET_ACTIONS.SET_GENRE_STATICS,
                data:{
                    ...state,
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
export default getStaticsSaga;