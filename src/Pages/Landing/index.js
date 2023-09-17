
import React, { useEffect, useState } from 'react';
import CardContainer from '../../Components/CardContainer';
import Typography from '@mui/material/Typography';
import { Footer, Hero } from '../../Components';
import { NavBar } from '../../Components';
import Cardes from '../../Components/Cardes';
import About from '../../Components/About';

const Landing = () => {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/MennatullahAsh/goldenApi/courses')
            .then(response => response.json())
            .then(data => setData1(data))
            .catch(error => console.error('ERROR', error));

        fetch('https://my-json-server.typicode.com/MennatullahAsh/goldenApi-Diploma/diplomaA')
            .then(response => response.json())
            .then(data => setData2(data))
            .catch(error => console.error('ERROR', error));

        fetch('https://my-json-server.typicode.com/MennatullahAsh/apiDiploma2/diplomaB')
            .then(response => response.json())
            .then(data => setData3(data))
            .catch(error => console.error('ERROR', error));

        fetch('https://my-json-server.typicode.com/MennatullahAsh/apiDiploma3/diplomaC')
            .then(response => response.json())
            .then(data => setData4(data))
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
                marginTop: '-60px',
                textAlign: 'center',
                fontSize: '70px',
                fontWeight: 'bolder'
            }}> _________ </h1>
            <Cardes />

            <CardContainer courses={data1} />
            <Typography variant="h3" align="center" gutterBottom style={
                {
                    paddingTop: '30px',
                    fontWeight: 'bold',
                    color: "#E82A36",
                }
            }>
                دبلوماتنا
            </Typography>
            <h1 style={{
                marginTop: '-60px',
                textAlign: 'center',
                fontSize: '70px',
                fontWeight: 'bolder'
            }}> ______ </h1>
            <CardContainer courses={data2} />
            <CardContainer courses={data3} />
            <CardContainer courses={data4} />
            <Footer />
        </>
    );
}

export default Landing;
