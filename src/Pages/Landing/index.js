import React, { useEffect, useState } from 'react';
import CardContainer from '../../Components/CardContainer';
import Typography from '@mui/material/Typography';
import { Hero } from '../../Components';
import { NavBar } from '../../Components';
import Cardes from '../../Components/Cardes';
import About from '../../Components/About';

const Landing = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/MennatullahAsh/goldenApi/courses')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('ERROR', error));
    }, []);
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Typography variant="h3" align="center" gutterBottom style={
                {
                    paddingTop: '30px',
                    fontWeight: 'bold',
                    color: "#E82A36",
                }
            }>
                الدورات المميزة
            </Typography>
            <h1 style={{
                marginTop: '-55px',
                textAlign: 'center',
                fontSize:'70px',
                fontWeight:'bolder'
            }}> _________ </h1>
            <Cardes />

            {console.log(data, 'courses')}
            <CardContainer courses={data} />        </>
    );
}

export default Landing;
