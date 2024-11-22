import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/loginContex'
import { UsersContext } from '../context/usersContext'
import { Box, Button, Typography, } from '@mui/material'
import axios from 'axios'
import PostCard from '../components/postCard'

const Home = () => {
    const { loggedIn } = useContext(LoginContext)
    const { users } = useContext(UsersContext)
    const [user] = useState(users.find(val => val.id === loggedIn.id))
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    console.log(posts)
    useEffect(() => {
        console.log("API Calling")
        if (posts.length === 0) {
            axios({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/posts/'
            }).then((response) => { setPosts(response.data.filter(val => val.userId === loggedIn.id)) })
        }

    }, [posts.length, loggedIn.id])


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
                    {
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