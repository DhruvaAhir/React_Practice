import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <div>    <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" onClick={() => { navigate('/') }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Home
                        </Typography>
                    </Button>
                    <Box sx={{ ml: 'auto' }} >
                        <Button onClick={() => {
                            navigate('/planets')
                        }} color="inherit">planets</Button >
                        <Button onClick={() => {
                            navigate('/vehicles')
                        }} color="inherit">vehicles</Button >
                        <Button onClick={() => {
                            navigate('/films')
                        }} color="inherit">Films </Button >
                        <Button onClick={() => {
                            navigate('/spaceships')
                        }} color="inherit">SpaceShips</Button >
                        <Button onClick={() => {
                            navigate('/species')
                        }} color="inherit">Species</Button >
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    )
}

export default Navbar