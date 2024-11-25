import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../context/loginContex'
import axios from 'axios'

const AddPost = () => {
    const { loggedIn } = useContext(LoginContext)

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
            console.log("payload", payload)
            axios({ method: 'post', url: 'https://jsonplaceholder.typicode.com/posts', data: payload })
                .then((res) => {
                    console.log('response:', res);
                    console.log('response data:', res.data);
                }).catch((error) => { console.log(error) })

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