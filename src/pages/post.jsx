import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LoginContext } from '../context/loginContex'
import { Box, Divider,  Tooltip, Typography } from '@mui/material'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

const Post = () => {
    const { id } = useParams()
    const { loggedIn } = useContext(LoginContext)
    const [post, setPost] = useState({})

    // console.log(id)
    console.log(post)
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        const fetchData = async () => {
            const userPost = await axios({ method: 'get', url: url })
            const comments = await axios({ method: 'get', url: `${url}/comments` })
            setPost({ post: userPost.data, comments: comments.data })
        }
        fetchData()
    }, [id])
    if (post.post) {

        if (loggedIn.id === post.post.userId) {

            return (
                <>
                    {
                        post.post &&
                        <Box sx={{ p: 1, pt: 4 }} >
                            <Typography variant='h4'>
                                {post.post.title}
                            </Typography>
                            <Typography variant='body1'>
                                {post.post.body}
                            </Typography>
                            <Divider sx={{ my: 2, p: 0 }} />
                            <Box sx={{ mt: 4 }}>

                                <Typography variant='h5'>Comments</Typography>
                                <Box sx={{ p: 2, backgroundColor: 'white' }}>
                                    {post.comments &&
                                        post.comments.map(val => {
                                            return <>
                                                <Box sx={{ p: 1, mt: 2.5 }}>

                                                    <Box sx={{ display: 'flex' }}>

                                                        <AccountCircleTwoToneIcon sx={{ mx: 1 }} />
                                                        <Tooltip title={val.email} placement="top-start">
                                                            <Typography variant='body1'>
                                                                {val.name}
                                                            </Typography>
                                                        </Tooltip>

                                                    </Box>
                                                    <Typography sx={{ p: 1, mx:1.2}} variant='body2'>
                                                        {val.body}
                                                    </Typography>

                                                </Box>
                                            </>
                                        })
                                    }
                                </Box>
                            </Box>
                        </Box>
                    }
                </>
            )
        } else {
            return <>

                <Box sx={{ p: 1, pt: 4 }} >
                    <Typography variant='h4'>You dont have access to this page
                    </Typography>
                </Box>
            </>
        }
    } else {
        return <>
            <Box >
                <h1>Loading...</h1>
            </Box>
        </>
    }
}

export default Post