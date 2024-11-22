import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Container, IconButton, InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { UsersContext } from '../context/usersContext'
import { LoginContext } from '../context/loginContex'

const Signup = () => {
    const { users, setUsers } = useContext(UsersContext)
    const { loggedIn, setLoggedIn } = useContext(LoginContext)
    const navigate = useNavigate()

    const [signupUser, setSignupUser] = useState({ name: "", email: "", password: "" })
    const [errors, setErrors] = useState({
        name: false, nameText: "", email: false, emailText: "", password: false, passText: ""
    })
    const [showPassword, setShowPassword] = useState(false);


    useEffect(() => {
        if (loggedIn.loggedIn === true) {
            console.log("Do something")
            navigate('/')
        }
    })






    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleSignUp = () => {
        var x = { name: false, nameText: "", email: false, emailText: "", password: false, passText: "" }
        const nameRegex = /^[a-zA-Z\s]{3,}$/
        const emailRegex = /^[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,3}$/;
        const passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/

        var noErrors = true

        if (!emailRegex.test(signupUser.email)) {
            x = ({ ...x, email: true, emailText: "Enter Proper Email" })
            noErrors = false
        }
        if (!nameRegex.test(signupUser.name)) {
            x = ({ ...x, name: true, nameText: "Only aphabets allowed and lenght should be more than 3" })
            noErrors = false
        }
        if (!passRegex.test(signupUser.password)) {
            x = ({ ...x, password: true, passText: `password should contain: -a small letter, -a capital letter,- a digit,- a special char !@#$%^&*, -have lenght min 8` })
            noErrors = false
        }


        if (noErrors) {
            let emailIndex = users.find(item => (item.email).toLowerCase() === (signupUser.email).toLowerCase());
            if (!emailIndex) {
                setUsers([...users, {
                    ...signupUser, id: new Date().getTime()
                }])
                navigate('/login');


            } else {
                x = ({ ...x, email: true, emailText: "Email already Exists" })

            }
        }



        setErrors(x)
    }
    return (
        <Container fixed>
            <Box component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '45ch' } }}>
                <div style={{ justifySelf: 'center', marginTop: '15%', border: '1px solid black', padding: '3%', borderRadius: '10px' }}>
                    <h1 >Sign Up</h1>
                    <div>
                        <TextField helperText={errors.nameText} value={signupUser.name} error={errors.name} onChange={(e) => { setSignupUser({ ...signupUser, name: e.target.value }) }} id="name" label="Name" variant='outlined' />
                    </div>
                    <div>
                        <TextField helperText={errors.emailText} error={errors.email} value={signupUser.email} onChange={(e) => { setSignupUser({ ...signupUser, email: e.target.value }) }} id="email" label="Email" variant="outlined" />
                    </div>
                    <div>
                        <TextField type={showPassword ? "text" : "password"} id="password" label="Password" variant='outlined'
                            helperText={errors.passText} value={signupUser.password} error={errors.password}
                            InputProps={{ 
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}  >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }} onChange={(e) => { setSignupUser({ ...signupUser, password: e.target.value }) }} />
                    </div>


                    <Button onClick={handleSignUp} variant="contained">Sign Up</Button>
                    <p>Already a User <Link to='/login'>login</Link> </p>
                </div>
            </Box>
        </Container >
    )
}

export default Signup