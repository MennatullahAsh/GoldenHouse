import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import style from './style.css'

export default function MediaCard({ courses }) {
    if (!courses) {
        return null;
    }
    const { id, url, title, time, axes, description } = courses;

    return (
        <Card className='card' sx={{ maxWidth: 325 }} >
            <CardMedia
                sx={{ height: 230 }}
                image={url}
                title={title}
            />
            <CardContent className='cardContent'>
                <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                    <div>
                        <Typography gutterBottom variant="h5" component="div" fontSize="21px" fontWeight="200">
                            {title}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body2" color="#E82A36">
                            {time}
                        </Typography>
                    </div>
                </div>
                <Typography className='description' variant="body2" color="#000">
                    {description}
                </Typography>
            </CardContent>
            <CardActions className='btnCarde'>
                <Link to={`/Details/${id}`} size="small"
                    color="primary" className='btnDetails'
                >  تفاصيل أكثر</Link>
                <Link to={`/Sign`} size="small"
                    color="primary" className='btnSign'
                >  سجل الآن  </Link>
            </CardActions>
        </Card>
    );
}
