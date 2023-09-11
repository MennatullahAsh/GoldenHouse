import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import style from './style.css'
import { width } from '@mui/system';

export default function MediaCard({ courses }) {

    if (!courses) {
        return null;
    }

    const { id, url, title, time, axes } = courses;

    return (
        
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
                sx={{ height: 230 }}
                image={url} 
                title={title}
            />
            <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <Typography gutterBottom variant="h5" component="div" fontSize="21px" fontWeight="200">
                            {title}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body2"  color="#E82A36">
                            {time}
                        </Typography>
                    </div>
                </div>
            </CardContent>
                {/* <Typography variant="body2" color="text.secondary">
                    محاور الدورة: {axes.join(', ')}
                </Typography> */}
            <CardActions className='btnCarde'>
                <Link to={`/Details/${id}`} size="small"
                    color="primary"  className='btnDetails'
                    >  تفاصيل أكثر</Link>
                <Link to={`/Sign`} size="small"
                    color="primary" className='btnSign'
                >  سجل الآن  </Link>

            </CardActions>
        </Card>
    );
}
