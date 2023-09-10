import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import style from './style.css';

import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Footer from '../../Components/Footer';
function Details() {
    const { id } = useParams();
    const [house, setHouse] = useState({});

    useEffect(() => {
        async function fetchHouse() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/MennatullahAsh/mockApi/house/${id}`);
                if (!response.ok) {
                    throw new Error("Network Error");
                }
                const house = await response.json();
                setHouse(house);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHouse();
    }, [id]);

    return (
      <p></p>
    );
}

export default Details;
