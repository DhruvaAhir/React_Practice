import { Box, Button, Card } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PersonCard from '../components/personCard';

const Home = () => {

    const [people, setPeople] = useState();
    const [url, setUrl] = useState("https://swapi.dev/api/people?page=1")
    console.log(people)
    useEffect(() => {
        const fetchPeople = async () => {
            const fetcheddata = await axios({ method: 'get', url: url })
            setPeople(fetcheddata.data);
        }
        fetchPeople()
    }, [url])


    if (people) {
        return (
            <>
                <h1>People</h1>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {people.results.map((person, index) => (
                        <PersonCard key={index} person={person} />
                    ))}
                </Box >
                <Button disabled={!people.previous} onClick={() => { setUrl(people.previous) }} >prev</Button> <Button disabled={!people.next} onClick={() => { setUrl(people.next) }}>Next</Button>
            </>
        )
    }
    else {

        return (
            <h1>Loading...</h1>
        )
    }
}

export default Home