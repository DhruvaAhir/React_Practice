import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/loginContex'
import { UsersContext } from '../context/usersContext'
import { Box, Button, Typography, } from '@mui/material'
import PostCard from '../components/postCard'
import { LoaderContext } from '../context/loaderContext'
import { getPosts } from '../api/getPosts'
import { getUserData } from '../api/getUserData'


const Home = () => {
    const { loggedIn } = useContext(LoginContext)
    const { setShowLoader } = useContext(LoaderContext)
    const { users } = useContext(UsersContext)
    const [user] = useState(users.find(val => val.id === loggedIn.id))
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setShowLoader(true)
        
        getUserData(loggedIn.accessToken, (res) => {
            console.log(res)
        }, (err) => {
            console.log("User data Error", err)
        })
        getPosts(loggedIn.id, (res) => {
            setPosts(res);
            setShowLoader(false);
        }, (err) => {
            console.log("Post Error", err)
        })
    }, [loggedIn.accessToken, loggedIn.id, setShowLoader])


    return (
        <>
            <Typography noWrap variant='h2'>{user.name} </Typography>

            <Box >
                <div style={{ display: 'flex' }}>

                    <Typography variant='h4'>Posts</Typography>
                    <Button variant='contained' sx={{ mr: .4, px: 4, ml: 'auto' }} onClick={() => { navigate('/addpost') }} >Add</Button>
                </div>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                        },
                    }}
                >
                    {posts &&
                        posts.map((post, index) => {

                            return (
                                <PostCard key={post.id} post={post} />
                            )

                        })
                    }
                </Box >
            </Box>

        </>
    )
}

export default Home