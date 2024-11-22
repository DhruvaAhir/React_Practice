import { Card, CardContent, Divider, Fade, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PostCard = ({ post }) => {
    const navigate = useNavigate()
    return (
        <Card onClick={() => { navigate(`post/${post.id}`); console.log(post.id) }} sx={{ maxWidth: 560, height: 130 }} >
            <CardContent>
                <Tooltip TransitionComponent={Fade}
                    TransitionProps={{ timeout: 1000 }} title={post.title} >

                    <Typography variant='h5' noWrap>
                        {post.title}
                    </Typography>
                </Tooltip>
                <Divider />
                <Typography sx={{ mt: 1, p: 1 }} variant='body2' >
                    {post.body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PostCard