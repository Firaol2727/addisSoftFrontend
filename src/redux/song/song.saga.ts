
import {takeEvery,put, call, all} from 'redux-saga/effects';
import {ACTIONS,SET_ACTIONS} from '../constant.ts';
import BASE_API from '../../constants/API.constant.ts';
import axios from 'axios';
function* songsSaga(action){
    let data=[];
    let errors='';
    let isLoading:boolean=true;
    // console.log("Songs saga ",action)
    if (action.type==ACTIONS.GET_SONGS) {
        yield put({ type: SET_ACTIONS.SET_SONG, data: { data, errors, isloading: true } });
        try {
            let response=yield call(axios.get, BASE_API+'/song/list');
            data=response.data ;
            yield put({
                type:SET_ACTIONS.SET_SONG,
                data:{
                    data,
                    errors:'',
                    isLoading:false
                }
            });
        } catch (error) {
            console.log(error);
            errors=error
            isLoading=false;
            yield put({
                type:SET_ACTIONS.SET_SONG,
                data:{
                    data,
                    errors,
                    isLoading
                }
            });
        }
        }
    else if (action.type==ACTIONS.DELETE_SONG) {
        yield put({
            type:SET_ACTIONS.SET_DELETE_SONG_REQUEST,
            data:{
                errors:"",
                isLoading:true
            }
        });
        try {
            console.log("action data",action.data)
            let song_id=action.data
            let response=yield call(axios.post, BASE_API+'/song/remove',{id:song_id});
            console.log("response  data",response);
            let data=response.data ;
            // yield all(

            // )
            console.log("going to yield")
            yield all([
                yield put({
                type:SET_ACTIONS.SET_DELETE_SONG,
                data:{
                    data:song_id,
                    isLoading: false,
                }
            }),
             yield put({
                type:SET_ACTIONS.SET_DELETE_SONG_REQUEST,
                data:{
                    errors:'',
                    isLoading: false,
                }
            })
            ])
            
        } catch (error) {
            yield put({
                type:SET_ACTIONS.SET_DELETE_SONG_REQUEST,
                data:{
                    errors: 'Error Something went wrong!',
                    isLoading: false,
                }
            });
        }
    }
    else if (action.type==ACTIONS.ADD_SONG) {
        yield put({
            type:SET_ACTIONS.SET_ADD_SONG,
            data:{
                errors:"",
                isLoading:true
            }
        });
        try {
            console.log("action data",action.data)
            let song=action.data
            let response=yield call(axios.post, BASE_API+'/song/create',{
                title:song.title,
                album:song.album,
                genre:song.genre,
                artist:song.artist
            });
            console.log("response  data",response);
            let data=response.data ;
            // yield all(

            // )
            console.log("going to yield")
            yield all([
                yield put({
                type:SET_ACTIONS.SET_ADD_SONG,
                data:{
                    data:data,
                    isLoading: false,
                }
            }),
             yield put({
                type:SET_ACTIONS.SET_ADD_SONG,
                data:{
                    errors:'',
                    isLoading: false,
                }
            })
            ])
            
        } catch (error) {
            yield put({
                type:SET_ACTIONS.SET_ADD_SONG,
                data:{
                    errors: 'Error Something went wrong!',
                    isLoading: false,
                }
            });
        }
    }
}

export default songsSaga;