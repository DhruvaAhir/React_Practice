import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LoginContext } from '../context/loginContex'
import { Box, Divider, Typography } from '@mui/material'
import { LoaderContext } from '../context/loaderContext'
import { getComments } from '../api/getComments'
import Comments from '../components/comments'

const Post = () => {
    const { id } = useParams()

    const { loggedIn } = useContext(LoginContext)
    const { setShowLoader } = useContext(LoaderContext)

    const [post, setPost] = useState({
        "post": {
            userId: '',
            id: '',
            title: '',
            body: ""
        },
        comments: []
    })

    useEffect(() => {

        setShowLoader(true)
        getComments(id, (res) => {
            setPost(res)
            setShowLoader(false)
        }, (err) => {
            console.log("err:", err)
        })

    }, [id, setShowLoader])
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
                                {
                                    post.comments.map((val, index) => {
                                        return <>
                                            <Comments comment={val} key={index} />
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
}


export default Post