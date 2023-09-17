import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import { NavBar } from '../../Components';
import style from './style.css'

function Details() {
    const { id } = useParams();
    const [course, setCourse] = useState({});
    const [relatedCourse, setRelatedCourse] = useState({});

    useEffect(() => {
        async function fetchCourse() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/MennatullahAsh/goldenApi/courses/${id}`);
                if (!response.ok) {
                    throw new Error("Network Error");
                }
                const courseData = await response.json();

                console.log(courseData);

                setCourse(courseData);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCourse();

        async function fetchRelatedCourse() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/MennatullahAsh/goldenApi-Diploma/diplomaA`);
                if (!response.ok) {
                    throw new Error("Network Error");
                }
                const relatedCourseData = await response.json();

                console.log(relatedCourseData);

                setRelatedCourse(relatedCourseData);
            } catch (error) {
                console.error(error);
            }
        }
        fetchRelatedCourse();
    }, [id]);

    return (
        <>
            <NavBar />
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
                    {course.url && <img src={course.url} alt={course.title} style={{ maxWidth: '80%' }} />}
                </div>
            </div>

            {/* عرض البيانات من الـAPI الثاني */}
            <div className='related-course'>
                <h2>دورة ذات صلة</h2>
                <p>اسم الدورة: {relatedCourse.title}</p>
                <p>مدة الدورة: {relatedCourse.duration}</p>
            </div>

            <div className='SignD'>
                <Link to={`/Landing`} size="small" color="primary" className='back'> رجوع </Link>
                <Link to={`/Sign`} size="small" color="primary" className='btnSignD'>  سجل الآن  </Link>
            </div>
            <div style={{ height: '200px' }}></div>
            <Footer />
        </>
    );
}

export default Details;
