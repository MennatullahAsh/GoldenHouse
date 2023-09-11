import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../../Components/Footer';

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
        <div>
            <h2>تفاصيل الدورة</h2>
            <p>عنوان الدورة: {course.title}</p>
            <p>وقت الدورة: {course.time}</p>
            <p>محاور الدورة: {course.axes && course.axes.join(', ')}</p>
            {course.url && <img src={course.url} alt={course.title} style={{ maxWidth: '100%' }} />}
            <Footer />
        </div>
    );
}

export default Details;
