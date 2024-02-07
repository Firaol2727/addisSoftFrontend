import React, { useEffect } from "react";
import './statics.style.css';
import MenuList from "../menu/Menu.tsx";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import { NoSongType } from "../../redux/noSong/noSong.reducer.ts";
import { getNoSongs,getNoAlbums,getNoArtists,getNoGenres } from "../../redux/noSong/noSong.reducer.ts";
import { AlbumStatType, getAlbumStatics } from "../../redux/statics/albumStatics.red.ts";
import  {ArtistStatType, getArtistStatics} from "../../redux/statics/artistReducer.ts";
import {GenreStatType, getGenreStatics}  from "../../redux/statics/genreStaticsRed.ts";
import { GenreStatics } from "../../models/statics/genreStatics.ts";
import { AlbumStatics } from "../../models/statics/albumStatics.ts";
import { ArtistStatics } from "../../models/statics/artistStatics.ts";
export default function Statics() {
    const dispatch=useDispatch();
    let noOfSong:NoSongType=useSelector((state:any)=>{
        return state.getNoSongsReducer
    });
    let noOfAlbums:NoSongType=useSelector((state:any)=>{
        return state.getNoAlbumsReducer
    });
    let noOfArtists:NoSongType=useSelector((state:any)=>{
        return state.getNoArtistsReducer
    });
    let noOfGenres:NoSongType=useSelector((state:any)=>{
        return state.getNoGenresReducer
    });
    let albumStatics:AlbumStatType=useSelector((state:any)=>{
        return state.getalbumStaticsReducer
    });
    let artistStatics :ArtistStatType=useSelector((state:any)=>{
        return state.getArtistStaticsReducer
    });
    let genreStatis :GenreStatType=useSelector((state:any)=>{
        return state.getGenreStaticsReducer
    });
    console.log("genre statics ",genreStatis)
    useEffect(()=>{
        dispatch(getNoSongs())
        dispatch(getNoArtists())
        dispatch(getNoAlbums())
        dispatch(getNoGenres())
        // statics 
        dispatch(getAlbumStatics())
        dispatch(getArtistStatics())
        dispatch(getGenreStatics())
    },[])
    return (
        <div className="stat-musiclist">
            <div className='stat-sidebar'>
            {<MenuList/>}
            </div>
            <div className='stat-mainbody'>
                <div className="stat-number">
                    <div className="stat-display-data backgroundColor-lightgreen color-white">
                        <p className="display-number" >{noOfSong.no}</p>
                        <p className="display-title">Songs</p>
                    </div>
                    <div className="stat-display-data backgroundColor-yellow color-white">
                        <p className="display-number">{noOfAlbums.no}</p>
                        <p className="display-title">Albums</p>
                    </div>
                    <div className="stat-display-data backgroundColor-green color-white">
                        <p className="display-number" >{noOfArtists.no}</p>
                        <p className="display-title">Artists</p>
                    </div>
                    <div className="stat-display-data backgroundColor-lightyellow color-white">
                        <p className="display-number" >{noOfGenres.no}</p>
                        <p className="display-title">Genres</p>
                    </div>

                </div>
                <div className="stat-tables">
                    <div className="stat-tables-two">
                        {!genreStatis.isloading &&  tableGenres(genreStatis.genreStats)}
                        {!albumStatics.isloading && tableAlbums(albumStatics.albumStats)}
                    </div>
                    {!artistStatics.isloading && tableArtists(artistStatics.artistStats)}
                </div>
            </div>
        </div>
    )
}


function tableAlbums(albums:AlbumStatics[]) {
    return (
        <div className="table-display">
            <TableContainer component={Paper} >
                <TableHead > 
                    <TableCell align="center" sx={{color:"brown",fontSize:"20px"}}>Album Statics</TableCell></TableHead>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead  className="backgroundColor-yellow">
                        <TableRow sx={{color:"white"}} >
                            <TableCell >No</TableCell>
                            <TableCell className="" align="left">Album</TableCell>
                            <TableCell className='' align="left">Total Songs</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {albums.map((album) => (
                            <TableRow
                            key={album.album}
                            >
                                <TableCell >
                                </TableCell>
                                <TableCell >
                                    {album.album?album.album:'Single'}
                                </TableCell>
                                <TableCell >
                                    {album.noOfSongs}
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
            </TableContainer>
        </div>
    )
}
function tableGenres(genres:GenreStatics[]) {
    return (
        <div className="table-display">
            <TableContainer component={Paper} >
                <TableHead> 
                <TableCell align="center" sx={{color:"brown",fontSize:"20px"}}>   Genres Statics</TableCell>

                 </TableHead>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead className="backgroundColor-yellow" >
                        <TableRow >
                            <TableCell>No</TableCell>
                            <TableCell className="" align="left">Genre</TableCell>
                            <TableCell className='' align="left">Total Songs</TableCell>
                            <TableCell align="left">Album</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {genres.map((genre) => (
                            <TableRow
                            key={genre.genre}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell >
                                
                            </TableCell>
                            <TableCell >
                                {genre.genre}
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">
                                {genre.noOfSongs}
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
            </TableContainer>
        </div>
    )
}
function tableArtists(artists:ArtistStatics[]) {
    return (
        <div className="table-display">
            <TableContainer component={Paper} >
                <TableHead>
                <TableCell align="center" sx={{color:"brown",fontSize:"20px"}}>
                Artist Statics</TableCell>
                </TableHead>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead className="backgroundColor-yellow" >
                        <TableRow >
                            <TableCell>No</TableCell>
                            <TableCell className="" align="left">Artist Name</TableCell>
                            <TableCell className='' align="left">Total Songs</TableCell>
                            <TableCell align="left">Total Albums</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {artists.map((artist) => (
                            <TableRow
                            key={artist.artist}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell >
                                
                            </TableCell>
                            <TableCell >
                                {artist.artist}
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">{artist.noOfSongs}</TableCell>
                            <TableCell align="left">{artist.numberOfAlbums}</TableCell>
                            </TableRow>
                        ))}
                        
                        </TableBody>
                    </Table>
            </TableContainer>
        </div>
    )
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
}