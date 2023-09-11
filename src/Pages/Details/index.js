import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import style from './style.css'

function Details() {
    const { id } = useParams();
    const [course, setCourse] = useState({});

    useEffect(() => {
        async function fetchCourse() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/MennatullahAsh/goldenApi/courses/${id}`);
                if (!response.ok) {
                    throw new Error("Network Error");
                }
                const courseData = await response.json();
                setCourse(courseData);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCourse();
    }, [id]);

    return (
        <>
            <div className='container'>
                <div className='info'>
                    <p className='title'> {course.title}
                        <span className='time'>{course.time}</span> </p>
                    <p className='axes'>
                        <span>المحاور الرئيسية للدورة</span>
                        <br />
                        {course.axes && course.axes.map((axis, index) => (
                            <div key={index}>{axis}</div>
                        ))}
                    </p>

                </div>

                <div className='img'>
                    {course.url && <img src={course.url} alt={course.title} style={{ maxWidth: '100%' }} />}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' ,justifyContent:'center' }}>
                        {course.img1 && <img src={course.img1} alt={course.title} style={{ width: '110px', height: '100px' }} />}
                        {course.img2 && <img src={course.img2} alt={course.title} style={{ width: '110px', height: '100px' }} />}
                        {course.img3 && <img src={course.img3} alt={course.title} style={{ width: '110px', height: '100px' }} />}
                    </div>
                </div>

            </div>
            <div className='SignD'>
                <Link to={`/Landing`} size="small"
                    color="primary" className='back'
                > <ExitToAppIcon/> </Link>
                <Link to={`/Sign`} size="small"
                    color="primary" className='btnSignD'
                >  سجل الآن  </Link>
           </div>
<br/>
<br/>
            <Footer />
        </>
    );
}

export default Details;
