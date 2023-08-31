import React, { useState } from 'react'
import {Button, Table, TableHead, TableBody, TableRow, 
        TableCell, Container} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';

const options = [
    'Delete'
  ];
  

const Import = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [deleteIndex, setDeleteIndex] = useState(0);
    const open = Boolean(anchorEl);
    const handleClick = (event, index) => {
      setAnchorEl(event.currentTarget);
      setDeleteIndex(index)
        };
    const handleClose = () => {
      setAnchorEl(null);
      props.deleteMake(deleteIndex)
    };
        console.log(props.makes)
    return (
        <Container>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}> Import </Button>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
        <TableBody>
            {props.makes.map((make, index) => (
                <TableRow key={make.MakeId}>
                    <TableCell>{make.MakeId}</TableCell>
                    <TableCell>{make.MakeName}</TableCell>
                    <TableCell>
                        <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={(event) => handleClick(event, index)}>
                            <MoreVertIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
                
            ))}
        </TableBody>
        </Table>
        <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // PaperProps={{
        //   style: {
        //     maxHeight: ITEM_HEIGHT * 4.5,
        //     width: '20ch',
        //   },
        // }}
      >
          {options.map((option) => (
          <MenuItem key={option} selected={option === 'Delete'} onClick={handleClose} index={props.index}>
            {option}
          </MenuItem>
        ))}
       
      </Menu>
     
        </Container>
    )
}

export default Import