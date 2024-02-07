import { call, put } from "redux-saga/effects";
import { ACTIONS, SET_ACTIONS } from "../constant.ts";
import axios from "axios";
import BASE_API from "../../constants/API.constant.ts";

function* editSongSaga(action){
    let data=[];
    let errors='';
    let isLoading:boolean=true;

    // console.log("Songs saga ",action)
    if (action.type==ACTIONS.UPDATE_SONG) {
        yield put({ type: SET_ACTIONS.SET_UPDATE_SONG, data: { 
            status:0,
            errors:'',
            isLoading:true} });
        try {
            let response=yield call(axios.post, BASE_API+`/song/update/${action.data.song_id}`,{
                query:action.data.query
            });
            data=response.data ;
            yield put({
                type:SET_ACTIONS.SET_UPDATE_SONG,
                data:{
                    status:1,
                    errors:'',
                    isLoading:false
                }
            });
        } catch (error) {
            console.log(error);
            let status=0;
            errors=error.message;
            isLoading=false;
            yield put({
                type:SET_ACTIONS.SET_SONG,
                data:{
                    status,
                    errors,
                    isLoading
                }
            });
        }
        }
    else if (action.type==ACTIONS.FETCH_SONG) {
        yield put({
            type:SET_ACTIONS.SET_FETCH_SONG,
            data:{
                song:null,
                errors:"",
                isLoading:true
            }
        });
        try {
            console.log("action data",action.data)
            let song_id=action.data.song_id
            let response=yield call(axios.get, BASE_API+`/song/detail/${song_id}`);
            let data=response.data ;
             yield put({
                type:SET_ACTIONS.SET_FETCH_SONG,
                data:{
                    song:data,
                    errors:"",
                    isLoading:false
                }
            })
        } catch (error) {
            yield put({
                type:SET_ACTIONS.SET_FETCH_SONG,
                data:{
                    song:null,
                    errors:"error some thing went wrong !",
                    isLoading:false
                }
            });
        }
    }
}
export default editSongSaga;