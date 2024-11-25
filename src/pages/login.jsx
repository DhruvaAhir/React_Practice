import React, { useContext, useRef, useState } from 'react'
import { LoginContext } from '../context/loginContex'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Container, IconButton, InputAdornment, TextField } from '@mui/material'
import { UsersContext } from '../context/usersContext'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import axios from 'axios'
import { LoaderContext } from '../context/loaderContext'
import { postLogin } from '../api/postlogin'

const Login = () => {

    const { users } = useContext(UsersContext)
    const { loggedIn, setLoggedIn } = useContext(LoginContext)
    const { showLoader, setShowLoader } = useContext(LoaderContext)
    const [loginUser, setLoginUser] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({ email: false, emailText: "", password: false, passText: "" })
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()
    const emailRef = useRef()



    const handleLogin = () => {
        var x = { ...errors }
        if (loginUser.email === "" && loginUser.password === "") {
            x = ({ password: true, email: true, emailText: "Enter Email", passText: "Enter Password" })
        } else if (loginUser.password === "") {
            x = ({ password: true, email: false, emailText: "", passText: "Enter Password" })
        } else if (loginUser.email === "") {
            x = ({ password: false, email: true, emailText: "Enter Email", passText: "" })
        } else {
            let emailIndex = users.find(item => item.email.toLowerCase() === (loginUser.email).toLowerCase());

            if (emailIndex) {
                if (loginUser.password === emailIndex.password) {


                    setShowLoader(true)
                    postLogin({
                        username: 'emilys',
                        password: 'emilyspass',
                        expiresInMins: 30,
                    }, (res) => {
                        console.log(res)
                        setLoggedIn({ loggedIn: true, id: emailIndex.id, email: emailIndex.email, accessToken: res.data.accessToken })
                        setShowLoader(false)
                    }, (err) => {
                        console.log("err", err)

                    })
                    navigate('/')
                } else {
                    x = ({ password: true, email: false, emailText: "", passText: "Inncorrect" })
                }
            } else {
                x = ({ password: false, email: true, emailText: "Cant find", passText: "" })
            }
        }
        setErrors(x)





    }
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Container fixed>
            <Box component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '40ch' } }}>
                <div style={{ justifySelf: 'center', marginTop: '15%', border: '1px solid black', padding: '3%', borderRadius: '10px' }}>
                    <h1 >Login</h1>
                    <div>
                        <TextField helperText={errors.emailText} ref={emailRef} error={errors.email} value={loginUser.email} onChange={(e) => { setLoginUser({ ...loginUser, email: e.target.value }) }} id="email" label="Email" variant="outlined" />
                    </div>
                    <div>
                        <TextField helperText={errors.passText} value={loginUser.password} error={errors.password} type={showPassword ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword}  >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }} onChange={(e) => { setLoginUser({ ...loginUser, password: e.target.value }) }} id="password" label="Password" variant='outlined' />
                    </div>
                    <Button onClick={handleLogin} variant="contained">Submit</Button>
                    <p>Not a User <Link to='/signup'>sign Up</Link> </p>
                </div>
            </Box>
        </Container>
    )
}

export default Login