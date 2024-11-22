import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { LoginContext } from '../context/loginContex'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { loggedIn, setLoggedIn } = useContext(LoginContext)
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
                            navigate('/login')
                        }} color="inherit">Login</Button >
                        <Button onClick={() => {
                            navigate('/post/23')
                        }} color="inherit">Not Auth</Button >
                        <Button onClick={() => {
                            setLoggedIn({ loggedIn: false, email: null, id: null })
                        }} color="inherit">Logout</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    )
}

export default Navbar