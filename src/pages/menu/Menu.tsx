import React  from 'react';
import {  MusicNoteOutlined} from '@mui/icons-material';
import { List,ListItem } from '@mui/material';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import musicLogo from '../../images/musiclogo2.png';
import './menu.style.css';
export default function MenuList() {
    return (
        <div style={{position:"fixed",width:"19.5%"}}>
            <img src={musicLogo} alt='' style={{ 
                width:"100%",
                height:"190px"
            }}/>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <a href="/">
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <MusicNoteOutlined />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="All Songs" />
            </ListItem>
            </a>
            <a href="/statics">
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <FolderIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Statics"  />
            </ListItem>
            </a>
            
        </List>
        </div>

    )
}