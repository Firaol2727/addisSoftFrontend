import { Button, CircularProgress, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { redirect, useParams } from 'react-router-dom';

import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';
import { updateSongRequestType,fetchSongRequestType } from '../../redux/edit/editSong.reducer';
// import actions
import { updateSong,fetchSong } from '../../redux/edit/editSong.reducer.ts'
const EditSong=()=>{
    const { id } = useParams<{ id: string }>();
    const dispatch=useDispatch();
    const updatesong_request:updateSongRequestType=useSelector((selector:any)=>selector.updateSongReducer)
    const fetchsong_request:fetchSongRequestType=useSelector((selector:any)=>{
        console.log("selector",selector)
        return selector.fetchSongReducer
    })
    console.log("id",id);
    console.log("update song" ,updatesong_request)
    console.log("fetch song ",fetchsong_request);
    const [title,settitle]=useState(fetchsong_request.song?.title);
    const [album,setalbum]=useState(fetchsong_request.song?.title);
    const [artist,setartist]=useState(fetchsong_request.song?.title);
    const [genre,setgenre]=useState(fetchsong_request.song?.title);
    if (updatesong_request.status==1) {
        window.open('/',"_self")
    }
    const handleEditForm=()=>{
        dispatch(updateSong(id!,{title,album,artist,genre}))
    }
    useEffect(()=>{
        dispatch(fetchSong(id!));
    },[])
    return (
        <div>

            { !fetchsong_request.isLoading &&  <center>
                <div > 
                <h3> Edit Song Form </h3>
                <form style={
                {
                    border:" 1px solid brown"
                }
            } >
                    <center>
                        <TextField variant='standard' label='Title' onChange={(e)=>settitle(e.target.value)}  defaultValue={fetchsong_request.song?.title}/> <br />
                        <TextField variant='standard' label='Album' onChange={(e)=>setalbum(e.target.value)}  defaultValue={fetchsong_request.song?.album}/> <br />

                        <TextField variant='standard' label='Artist' onChange={(e)=>setartist(e.target.value)}  defaultValue={fetchsong_request.song?.artist}/> <br />
 
                        <TextField variant='standard' label='Genre' onChange={(e)=>setgenre(e.target.value)}  defaultValue={fetchsong_request.song?.genre}/> <br />

                        <br />
                        {updatesong_request.isLoading && <CircularProgress />} <br />
                        {updatesong_request.errors && <p style={{color:"red"}}> Error Some thing went wrong !</p>}
                        <br />
                        <Button variant='contained' onClick={handleEditForm}> update </Button>
                        <br />
                        <br />
                        <br />
                    </center>
                   
                </form>
                </div>
            </center>}
            {
                fetchsong_request.isLoading  && <CircularProgress />

            }
        </div>
    )
}
export default EditSong;