import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../context/loginContex'
import axios from 'axios'
import { LoaderContext } from '../context/loaderContext'
import { postPost } from '../api/postPost'
import { useNavigate } from 'react-router-dom'

const AddPost = () => {
    const { loggedIn } = useContext(LoginContext)
    const { setShowLoader } = useContext(LoaderContext)

    const navigate = useNavigate()
    const [post, setPost] = useState({
        title: "",
        body: ""
    })
    const [errors, setErrors] = useState({ title: false, titleHelpText: '' })

    useEffect(() => {
        const validateData = () => {
            if (post.title === "") {
                setErrors({ title: true, titleHelpText: 'Please enter a title' })
            } else {
                setErrors({ title: false, titleHelpText: '' })
            }
        }
        validateData()
    }, [post])


    const makePost = () => {
        if (!errors.title) {

            const payload = { ...post, userId: loggedIn.id }
            setShowLoader(true)
            console.log("payload", payload)
            postPost(payload, (res) => {
                console.log('response data:', res.data);
                setShowLoader(false)
                alert("post added ")
                navigate('/')
            }, (err) => {
                console.log(err)
            })

        } else {
            alert('Please fill in all fields')
        }
    }

    return (
        <>


            <form style={{}}>

                <Box sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' }, justifySelf: 'center', p: 5, pt: 15, backgroundColor: '#FFFFFF' }}
                    component="form" noValidate autoComplete="off" >

                    <Typography variant='h3'>
                        Make  Post
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                        <TextField value={post.title} onChange={(e) => { setPost({ ...post, title: e.target.value }) }} required error={errors.title} helperText={errors.titleHelpText} id="post-title" label="Title"
                        /><br />
                        <TextField value={post.body} onChange={(e) => { setPost({ ...post, body: e.target.value }) }} id="post-body" label="Body" multiline />
                    </Box>

                    <div>
                        <Button onClick={makePost} variant='contained' sx={{ m: 2, px: 4, }}>Add</Button>
                    </div>

                </Box>
            </form>


        </>
    )
}

export default AddPost