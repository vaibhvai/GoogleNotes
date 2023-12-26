import * as React from "react";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// import {LightbulbCircleOutlined as Lightbulb, ArchitectureOutlined as Archive, DeleteOutlineOutlined as Delete} from '@mui/icons-material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
const NavList = () => {

     const navlist =[
    
       {id: '1', name:'Notes', icon: <LightbulbOutlinedIcon/>},
       {id :'2', name: 'Archive', icon: <ArchiveOutlinedIcon/>} ,
       {id :'3', name: 'Delete', icon: <DeleteOutlineIcon/>}
]
    
  return (
   
      <List>
        {
        navlist.map(list => (
          <ListItem button key={list.id}>
            <ListItemIcon>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </ListItem>
        ))}
      </List>
    
  );
}

export default NavList;
