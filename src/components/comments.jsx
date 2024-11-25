import { Box, Tooltip, Typography } from '@mui/material'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import React from 'react'

const Comments = ({ comment }) => {
    return (
        <Box sx={{ p: 1, mt: 2.5 }}>

            <Box sx={{ display: 'flex' }}>

                <AccountCircleTwoToneIcon sx={{ mx: 1 }} />
                <Tooltip title={comment.email} placement="top-start">
                    <Typography variant='body1'>
                        {comment.name}
                    </Typography>
                </Tooltip>

            </Box>
            <Typography sx={{ p: 1, mx: 1.2 }} variant='body2'>
                {comment.body}
            </Typography>

        </Box>
    )
}

export default Comments