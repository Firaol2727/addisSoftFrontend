import React, { useEffect, useState } from "react";
import { Selector, useDispatch, useSelector } from "react-redux";
import './home.style.css'; 
import { Add, Close, Delete, Edit, MusicNote} from '@mui/icons-material';
import { Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, DialogContent, DialogContentText, List,ListItem, TextField, Typography } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import personnote from '../../images/musicbackground.jpg';
import musicIcon from '../../images/music_icon.png';
import MenuList from '../menu/Menu.tsx';
import {IconButton} from '@mui/material';
import {getSongs,deleteSong, addSong} from '../../redux/song/song.action.ts'//deleteSong

import {getAlbums} from "../../redux/album/album.reducer.ts";
// import { batch } from 'redux-batch-enhancer';
import { SongType } from "../../models/song.ts";
import { Dispatch } from "@reduxjs/toolkit";
// Dialogue Box import 

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import DialogTitle from '@mui/material/DialogTitle';
// Delete Import  type
import {SongRequestType, deleteSongLoadingType} from "../../redux/song/song.reducer.ts";
import { Link } from "react-router-dom";

export default function Home() {
    const dispatch=useDispatch();
    let getsong_Request:SongRequestType =useSelector((state:any)=>{
        return state.getsongReducer
    })
    
    let {
        albums,
        error_album,
        isLoadingAlbum
    }=useSelector((state:any)=>state.getalbumReducer)
    useEffect(()=>{
        console.log("use effect is running ")
            dispatch(getSongs())
            dispatch(getAlbums())
            
    },[])
    const [openWindow,setOpenWindow]=useState<boolean>(false);
    const handleOpenWindow=()=>{
        setOpenWindow(!openWindow)
    }
    const [title,settitle]=useState('');
    const [album,setalbum]=useState('');
    const [artist,setartist]=useState('');
    const [genre,setgenre]=useState('');
    const addSong_Status=useSelector((selector:any)=>selector.getsongReducer)
    const handleAddForm=()=>{
        dispatch(addSong({
            title, album, artist, genre,
            _id: "",
            __v: 0
        }))
        setOpenWindow(false)
    }
    return (
        <div className="home-musiclist">
            <div className='home-sidebar'>
            {<MenuList/>}
            </div>
            <div className='home-mainbody'>
                    <div className="home-up" >
                        <div className="home-title">
                        </div>
                    </div>
                    <div className='home-song'>
                        {artistList(albums)}
                        <br />
                        <Button sx={{
                                backgroundColor:"green",
                                color:"white",
                                borderRadius:"8px",
                                width:"300px",
                                
                            }} variant="outlined" startIcon={<Add />} onClick={handleOpenWindow}>
                                New Song
                            </Button>
                        <br />
                        {!getsong_Request.isLoading && SongList(getsong_Request.data) }
                        {getsong_Request.isLoading && <CircularProgress/>}
                        {
                            <Dialog
                                open={openWindow}
                                onClose={handleOpenWindow}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogContent>
                                    <center><h3 color="green">Add Song</h3></center>
                                <TextField variant='standard' label='Title' onChange={(e)=>settitle(e.target.value)}  /> <br />
                                <TextField variant='standard' label='Album' onChange={(e)=>setalbum(e.target.value)}/> <br />

                                <TextField variant='standard' label='Artist' onChange={(e)=>setartist(e.target.value)}  /> <br />
        
                                <TextField variant='standard' label='Genre' onChange={(e)=>setgenre(e.target.value)} /> <br />
                                  <br /><br />
                            
                                  <center><Button variant='contained' sx={{backgroundColor:"brown"}} onClick={handleAddForm}> + Add </Button> </center>
                                </DialogContent>

                            </Dialog>
      }
                    </div>
                
            </div>
        </div>
    )
} 
function SongList(data:SongType[]) {
    let dispatch=useDispatch();
    const handleDeleteSong=(id:string)=>{
        dispatch(deleteSong(id))
    }
   

    return (
        <div>
        <div className='home-song-list-display'>
            <div>
                {/** SONG DISPLAY IN TABLE FORM  */}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead  >
                        <TableRow >
                            <TableCell></TableCell>
                            <TableCell className="" align="left">Title</TableCell>
                            <TableCell className='' align="left">Artist</TableCell>
                            <TableCell align="left">Album</TableCell>
                            <TableCell align="left">Genre</TableCell>
                            <TableCell align='left'>

                            </TableCell>
                            <TableCell align='left'></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map((song:SongType) => (
                            <TableRow
                            key={song.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell >
                                <img src={musicIcon} alt="" className='image_music_icon'/>
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">{song.title}</TableCell>
                            <TableCell align="left">{song.artist}</TableCell>
                            <TableCell align="left">{song.album}</TableCell>
                            <TableCell align="left">{song.genre}</TableCell>
                            <TableCell align="left">
                            
                            <Link to={`/editSong/${song._id}`}>
                                <Button sx={{
                                                                    color:"blue",
                                                                    borderRadius:"8px"
                                                                }} 
                                                                variant="outlined" startIcon={<Edit/>}
                                                            >
                                                                Edit
                                                            </Button>
                            </Link>
                            
                                
                                </TableCell>
                            <TableCell align="left">
                            <IconButton  onClick={()=>{handleDeleteSong(song._id)}} sx={{
                                color:"red",
                                borderRadius:"8px"
                            }}  >
                                <Delete />
                            </IconButton>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div> 
        </div>
        {/** SONG DISPLAY IN lIST FORM IN MOBILE VIEW   */}
        <div className='home-song-list-display-mobile'>
            <List >
        {data.map((music:SongType) => (
            <ListItem key={music._id}>
            <ListItemIcon>
                <MusicNote />
            </ListItemIcon>
            <ListItemText primary={music.title} secondary={music.album} />
            <Link to={`/editSong/${music._id}`}>
                <IconButton aria-label="edit" >
                                <Edit />
                            </IconButton>
            </Link>
            <IconButton aria-label="delete" onClick={()=>{handleDeleteSong(music._id)}} >
                <Delete />
            </IconButton>
            </ListItem>
        ))}
        </List>
        </div>

       </div>
    )
}


function artistList(albums) {
    return (
        <div className='home-display-artist'>
                    <div className='artist-display' >
                        {
                        albums.map((album) => (
                        <Card  key={album.album} className='artist-card'  sx={{ maxWidth: 150 }}>
                        <CardActionArea className='backgroundblue'>
                            <CardMedia
                            component="img"
                            height="140"
                            image={personnote}
                            alt="green iguana"
                            />
                            <CardContent className=''>
                            <Typography className='' gutterBottom variant="h7" component="div">
                                {album.album}
                            </Typography>
                            <p className='font-12'> {album.artist}</p>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        ))
                    }
                    </div>
        </div>
    );
}