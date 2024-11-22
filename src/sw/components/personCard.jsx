import { Box, Card, CardContent, Grid2, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const PersonCard = ({ person }) => {
    const [personData, setPersonData] = useState()
    console.log(personData);
    const dataRef = useRef({})
    useEffect(() => {
        var data;
        const fetchpersonData = async () => {
            data = {
                ...data,
                homeworld: console.log((await axios({ method: 'get', url: person.homeworld })).data)
            }
        }

        dataRef.current = data;
        fetchpersonData()
        // setPersonData(data)
    }, [])


    return (
        <Card sx={{ width: 400, m: 2 }} >

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {person.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid2 container spacing={2}>
                        <Grid2 item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                                Gender: {person.gender}
                            </Typography>
                        </Grid2>
                        <Grid2 item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                                Height: {person.height}
                            </Typography>
                        </Grid2>
                        <Grid2 item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                                Hair: {person.hair_color}
                            </Typography>
                        </Grid2>
                    </Grid2>
                    <Grid2 container spacing={2}>
                        <Grid2 item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                                Birth Year: {person.birth_year}
                            </Typography>
                        </Grid2>
                        <Grid2 item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                                Mass: {person.mass}
                            </Typography>
                        </Grid2>
                        <Grid2 item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                                Skin Color: {person.skin_color}
                            </Typography>
                        </Grid2>
                    </Grid2>
                    <Grid2 container spacing={2}>
                        <Grid2 item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                                Home World: {JSON.stringify(dataRef.current)}
                            </Typography>
                        </Grid2>
                        <Grid2 item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                                Mass: {person.mass}
                            </Typography>
                        </Grid2>
                        <Grid2 item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                                Skin Color: {person.skin_color}
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Box>

            </CardContent>

        </Card>
    )
}

export default PersonCard