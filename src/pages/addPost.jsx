import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../context/loginContex'
import axios from 'axios'

const AddPost = () => {
    const { loggedIn, setLoggedIn } = useContext(LoginContext)

    const [post, setPost] = useState({
        title: "",
        body: ""
    })
    const [errors, setErrors] = useState({ title: false, titleHelpText: '' })


    useEffect(() => {
    })

    const makePost = () => {
        const payload = { ...post, userId: loggedIn.id }
        console.log("payload", payload)
        axios({ method: 'post', url: 'https://jsonplaceholder.typicode.com/posts', data: payload })
            .then((res) => {
                console.log('response:', res);
                console.log('response data:', res.data);
            }).catch((error) => { console.log(error) })

    }

    return (
        <>


            <form style={{}}>

                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' }, justifySelf: 'center', p: 5, pt: 15, backgroundColor: '#FFFFFF' }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant='h3'>
                        Make  Post
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <TextField value={post.title} onChange={(e) => { setPost({ ...post, title: e.target.value }) }}
                            required error={errors.title} helperText={errors.titleHelpText}
                            id="post-title"
                            label="Title"
                        /><br />
                        <TextField value={post.body} onChange={(e) => { setPost({ ...post, body: e.target.value }) }}
                            id="post-body"
                            label="Body"
                            multiline
                        />

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