import React, { useEffect, useState } from 'react';
import CardContainer from '../../Components/CardContainer';
import Typography from '@mui/material/Typography';
import { Hero } from '../../Components';
import { NavBar } from '../../Components';
import Cardes from '../../Components/Cardes';

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
            <Typography variant="h4" align="center" gutterBottom style={
                {
                    paddingTop: '30px',
                    fontWeight: 'bold'
                }
            }>
                الدورات المميزة
            </Typography>
            <Cardes />
            
            {console.log(data, 'courses')}
            <CardContainer courses ={data} />        </>
    );
}

export default Landing;
